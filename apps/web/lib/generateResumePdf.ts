// Generates the downloadable resume PDF directly with jsPDF + jspdf-autotable
// (real, selectable text — not a screenshot). autoTable is used purely as a
// layout/pagination engine: every row's default text rendering is suppressed
// and drawn manually in `didDrawCell` so we get full control over fonts,
// colors, and two-column (label / right-aligned value) rows, while autoTable
// handles measuring row heights and breaking the table across pages.
//
// jsPDF and jspdf-autotable are only needed for this one click handler, so
// they're dynamically imported to keep them out of the page's initial bundle.

import { resumeData } from "./resumeData";

type RGB = [number, number, number];

// Colors, lifted from the site's design tokens (app/globals.css) so the PDF
// reads as an extension of the on-page resume rather than a separate theme.
const NAVY: RGB = [20, 24, 33]; // --color-foreground
const BLUE: RGB = [32, 96, 154]; // --color-primary
const GRAY: RGB = [107, 117, 133]; // --color-muted-foreground
const BODY: RGB = [53, 60, 74]; // --color-body
const HEADER_BG: RGB = [234, 240, 247]; // light tint of --color-primary

const MARGIN_X = 42;
const HEADER_HEIGHT = 104;

type Block =
  | { type: "section"; text: string; height: number }
  | { type: "paragraph"; lines: string[]; height: number }
  | { type: "jobHeader"; title: string; dates: string; height: number }
  | { type: "jobMeta"; company: string; location: string; height: number }
  | { type: "bullet"; lines: string[]; height: number }
  | {
      type: "skill";
      label: string;
      labelWidth: number;
      lines: string[];
      height: number;
    }
  | { type: "eduHeader"; degree: string; dates: string; height: number }
  | {
      type: "eduMeta";
      institution: string;
      details: string;
      height: number;
    }
  | { type: "inline"; text: string; height: number };

function drawHeader(doc: import("jspdf").jsPDF, pageWidth: number) {
  doc.setFillColor(...HEADER_BG);
  doc.rect(0, 0, pageWidth, HEADER_HEIGHT, "F");

  let y = 38;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(...NAVY);
  doc.text(resumeData.name, MARGIN_X, y);

  y += 20;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(...BLUE);
  doc.text(resumeData.title.toUpperCase(), MARGIN_X, y, { charSpace: 0.6 });

  y += 20;
  const contentWidth = pageWidth - MARGIN_X * 2;
  const items: { text: string; link: boolean }[] = [
    { text: resumeData.contact.phone, link: false },
    { text: resumeData.contact.email, link: true },
    { text: resumeData.contact.website, link: true },
    { text: resumeData.contact.linkedin, link: true },
    { text: resumeData.contact.github, link: true },
  ];

  doc.setFont("helvetica", "normal");
  const sep = "  |  ";

  // Shrink the contact-line font just enough for every item to fit on a
  // single line, rather than letting it wrap and overflow the header band.
  const MIN_FONT_SIZE = 6.5;
  let fontSize = 9;
  const rowWidth = () => {
    doc.setFontSize(fontSize);
    const sepWidth = doc.getTextWidth(sep);
    const itemsWidth = items.reduce(
      (sum, item) => sum + doc.getTextWidth(item.text),
      0
    );
    return itemsWidth + sepWidth * (items.length - 1);
  };
  while (rowWidth() > contentWidth && fontSize > MIN_FONT_SIZE) {
    fontSize -= 0.25;
  }
  doc.setFontSize(fontSize);
  const sepWidth = doc.getTextWidth(sep);

  let x = MARGIN_X;
  items.forEach((item, i) => {
    const w = doc.getTextWidth(item.text);
    doc.setTextColor(...(item.link ? BLUE : GRAY));
    doc.text(item.text, x, y);
    x += w;
    if (i < items.length - 1) {
      doc.setTextColor(...GRAY);
      doc.text(sep, x, y);
      x += sepWidth;
    }
  });

  doc.setDrawColor(...BLUE);
  doc.setLineWidth(2);
  doc.line(0, HEADER_HEIGHT, pageWidth, HEADER_HEIGHT);
}

function buildBlocks(
  doc: import("jspdf").jsPDF,
  contentWidth: number
): Block[] {
  const blocks: Block[] = [];

  const section = (text: string) =>
    blocks.push({ type: "section", text, height: 30 });

  const paragraph = (text: string, marginAfter = 16) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    const lines = doc.splitTextToSize(text, contentWidth) as string[];
    blocks.push({
      type: "paragraph",
      lines,
      height: lines.length * 13 + marginAfter,
    });
  };

  const jobHeader = (title: string, dates: string) =>
    blocks.push({ type: "jobHeader", title, dates, height: 16 });

  const jobMeta = (company: string, location: string) =>
    blocks.push({ type: "jobMeta", company, location, height: 20 });

  const bullet = (text: string, marginAfter = 3) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    const lines = doc.splitTextToSize(text, contentWidth - 12) as string[];
    blocks.push({
      type: "bullet",
      lines,
      height: lines.length * 12.5 + marginAfter,
    });
  };

  const skill = (label: string, items: string, marginAfter = 6) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    const labelText = `${label}:  `;
    const labelWidth = doc.getTextWidth(labelText);
    doc.setFont("helvetica", "normal");
    const lines = doc.splitTextToSize(
      items,
      contentWidth - labelWidth
    ) as string[];
    blocks.push({
      type: "skill",
      label: labelText,
      labelWidth,
      lines,
      height: Math.max(lines.length, 1) * 12.5 + marginAfter,
    });
  };

  const eduHeader = (degree: string, dates: string) =>
    blocks.push({ type: "eduHeader", degree, dates, height: 16 });

  const eduMeta = (
    institution: string,
    details: string,
    marginAfter = 16
  ) =>
    blocks.push({
      type: "eduMeta",
      institution,
      details,
      height: 26 + marginAfter,
    });

  const inline = (text: string, marginAfter = 16) =>
    blocks.push({ type: "inline", text, height: 13 + marginAfter });

  // Professional Summary
  section("Professional Summary");
  paragraph(resumeData.summary);

  // Work Experience
  section("Work Experience");
  resumeData.experiences.forEach((exp, ei) => {
    jobHeader(exp.title, exp.dates);
    jobMeta(exp.company, exp.location);
    exp.bullets.forEach((b, bi) => {
      const isLastBullet = bi === exp.bullets.length - 1;
      const isLastJob = ei === resumeData.experiences.length - 1;
      bullet(b, isLastBullet ? (isLastJob ? 16 : 12) : 3);
    });
  });

  // Technical Skills
  section("Technical Skills");
  resumeData.skillGroups.forEach((group, i) => {
    const isLast = i === resumeData.skillGroups.length - 1;
    skill(group.label, group.items, isLast ? 16 : 6);
  });

  // Education
  section("Education");
  eduHeader(resumeData.education.degree, resumeData.education.dates);
  eduMeta(resumeData.education.institution, resumeData.education.details);

  // Key Achievements
  section("Key Achievements");
  resumeData.achievements.forEach((a, i) => {
    bullet(a, i === resumeData.achievements.length - 1 ? 16 : 3);
  });

  // Languages
  section("Languages");
  inline(resumeData.languages.join("   ·   "));

  // Interests
  section("Interests");
  resumeData.interests.forEach((item, i) => {
    bullet(item, i === resumeData.interests.length - 1 ? 0 : 3);
  });

  return blocks;
}

function drawBlock(
  doc: import("jspdf").jsPDF,
  block: Block,
  x: number,
  y: number,
  contentWidth: number
) {
  switch (block.type) {
    case "section": {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(...BLUE);
      doc.text(block.text.toUpperCase(), x, y + 11, { charSpace: 0.5 });
      doc.setDrawColor(...BLUE);
      doc.setLineWidth(1);
      doc.line(x, y + 17, x + contentWidth, y + 17);
      break;
    }
    case "paragraph": {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      doc.setTextColor(...BODY);
      block.lines.forEach((line, i) => doc.text(line, x, y + 9 + i * 13));
      break;
    }
    case "jobHeader": {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10.5);
      doc.setTextColor(...NAVY);
      doc.text(block.title, x, y + 10);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(...GRAY);
      doc.text(block.dates, x + contentWidth, y + 10, { align: "right" });
      break;
    }
    case "jobMeta": {
      doc.setFont("helvetica", "italic");
      doc.setFontSize(9.5);
      doc.setTextColor(...BLUE);
      doc.text(block.company, x, y + 9);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(...GRAY);
      doc.text(block.location, x + contentWidth, y + 9, { align: "right" });
      break;
    }
    case "bullet": {
      doc.setFillColor(...BLUE);
      doc.circle(x + 2.5, y + 6, 1.5, "F");
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(...BODY);
      block.lines.forEach((line, i) =>
        doc.text(line, x + 12, y + 9 + i * 12.5)
      );
      break;
    }
    case "skill": {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9.5);
      doc.setTextColor(...NAVY);
      doc.text(block.label, x, y + 9);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(...BODY);
      block.lines.forEach((line, i) =>
        doc.text(line, x + block.labelWidth, y + 9 + i * 12.5)
      );
      break;
    }
    case "eduHeader": {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10.5);
      doc.setTextColor(...NAVY);
      doc.text(block.degree, x, y + 10);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(...GRAY);
      doc.text(block.dates, x + contentWidth, y + 10, { align: "right" });
      break;
    }
    case "eduMeta": {
      doc.setFont("helvetica", "italic");
      doc.setFontSize(9.5);
      doc.setTextColor(...BLUE);
      doc.text(block.institution, x, y + 9);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(...BODY);
      doc.text(block.details, x, y + 24);
      break;
    }
    case "inline": {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      doc.setTextColor(...BODY);
      doc.text(block.text, x, y + 9);
      break;
    }
  }
}

/** Builds the resume PDF and returns the jsPDF document, ready to `.save()`
 *  or `.output()`. Kept separate from the save side-effect so it stays easy
 *  to test. */
async function buildResumeDoc() {
  const [{ default: jsPDF }, { default: autoTable }] = await Promise.all([
    import("jspdf"),
    import("jspdf-autotable"),
  ]);

  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const contentWidth = pageWidth - MARGIN_X * 2;

  drawHeader(doc, pageWidth);

  const blocks = buildBlocks(doc, contentWidth);

  autoTable(doc, {
    startY: HEADER_HEIGHT + 24,
    margin: { left: MARGIN_X, right: MARGIN_X, top: 40, bottom: 40 },
    theme: "plain",
    tableWidth: contentWidth,
    styles: { cellPadding: 0, fontSize: 9, lineWidth: 0 },
    body: blocks.map((block) => [
      { content: "", styles: { minCellHeight: block.height } },
    ]),
    columnStyles: { 0: { cellWidth: contentWidth } },
    didDrawCell: (data) => {
      if (data.section !== "body") return;
      const block = blocks[data.row.index];
      if (!block) return;
      drawBlock(doc, block, data.cell.x, data.cell.y, contentWidth);
    },
  });

  return doc;
}

export async function generateResumePdf() {
  const doc = await buildResumeDoc();
  doc.save("Adeel_Azad_Resume.pdf");
}
