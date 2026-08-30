export const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/cv/Adeel_Azad_Senior_Frontend_Developer_Resume.pdf";
  link.download = "Adeel_Azad_Senior_Frontend_Developer_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
