export interface Recommendation {
  id: number;
  name: string;
  title: string;
  date: string;
  quote: string;
  /** Link to the original recommendation (e.g. LinkedIn post). */
  url: string;
}

// Placeholder content — swap these out with the real recommendations.
export const recommendationsData: Recommendation[] = [
  {
    id: 1,
    name: "Recommender Name",
    title: "Job Title @ Company",
    date: "Month Year",
    quote:
      "This is placeholder recommendation text. Replace it with the actual quote from the person who wrote the recommendation, describing the work and impact in their own words. Keep it as long or short as the original text — the card will truncate it automatically and let readers expand to see the rest.",
    url: "#",
  },
  {
    id: 2,
    name: "Recommender Name",
    title: "Job Title @ Company",
    date: "Month Year",
    quote:
      "This is placeholder recommendation text. Replace it with the actual quote from the person who wrote the recommendation, describing the work and impact in their own words. Keep it as long or short as the original text — the card will truncate it automatically and let readers expand to see the rest.",
    url: "#",
  },
  {
    id: 3,
    name: "Recommender Name",
    title: "Job Title @ Company",
    date: "Month Year",
    quote:
      "This is placeholder recommendation text. Replace it with the actual quote from the person who wrote the recommendation, describing the work and impact in their own words. Keep it as long or short as the original text — the card will truncate it automatically and let readers expand to see the rest.",
    url: "#",
  },
  {
    id: 4,
    name: "Recommender Name",
    title: "Job Title @ Company",
    date: "Month Year",
    quote:
      "This is placeholder recommendation text. Replace it with the actual quote from the person who wrote the recommendation, describing the work and impact in their own words. Keep it as long or short as the original text — the card will truncate it automatically and let readers expand to see the rest.",
    url: "#",
  },
  {
    id: 5,
    name: "Recommender Name",
    title: "Job Title @ Company",
    date: "Month Year",
    quote:
      "This is placeholder recommendation text. Replace it with the actual quote from the person who wrote the recommendation, describing the work and impact in their own words. Keep it as long or short as the original text — the card will truncate it automatically and let readers expand to see the rest.",
    url: "#",
  },
  {
    id: 6,
    name: "Recommender Name",
    title: "Job Title @ Company",
    date: "Month Year",
    quote:
      "This is placeholder recommendation text. Replace it with the actual quote from the person who wrote the recommendation, describing the work and impact in their own words. Keep it as long or short as the original text — the card will truncate it automatically and let readers expand to see the rest.",
    url: "#",
  },
];
