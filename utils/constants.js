export const BASE_CDN_URL = "https://do6gp1uxl3luu.cloudfront.net";
export const BANNER_AND_LOGOS_PATH = `${BASE_CDN_URL}/banner+and+logos/`;
export const DOCS_PATH = `${BASE_CDN_URL}/docs/`;

export const LOGO_ICON = `${BANNER_AND_LOGOS_PATH}icon.webp`;
export const LOGO_NAME = `${BANNER_AND_LOGOS_PATH}name.webp`;

export const PROJECTS = [
    {
      title: "Beginner Projects",
      level: "Beginner",
      description: "Simple and easy-to-build projects to get started with coding.",
      image: `${DOCS_PATH}beginner.png`
    },
    {
      title: "Intermediate Projects",
      level: "Intermediate",
      description: "More complex projects with API integration and real-world use cases.",
      image: `${DOCS_PATH}intermediate.png`
    },
    {
      title: "Advanced Projects",
      level: "Advanced",
      description: "Full-stack and scalable applications with advanced features.",
      image: `${DOCS_PATH}advanced.png`
    }
  ];
  
export  const STEPS = [
    { title: "Choose a Project", description: "Browse through a variety of projects to get started." },
    { title: "Follow the Guide", description: "Get a structured step-by-step guide to build the project." },
    { title: "Deploy & Showcase", description: "Complete your project and add it to your portfolio." }
  ];