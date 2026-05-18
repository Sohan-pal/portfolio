// Add or edit projects here. Slug must be unique and URL-safe.
export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  description: string;
  tools: string[];
  cover: string; // gradient class or image url
  accent: string; // tailwind gradient stops
  problem: string;
  process: string[];
  outcome: string;
  gallery: string[];
  externalUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "design-poster",
    title: "Graphic design posters",
    category: "Print · Type",
    year: "2025-26",
    summary: "Typographic posters for various clients.",
    description:
      "A six-poster series mixing photography, modular type and risograph textures.",
    cover: "from-lime-300 via-emerald-300 to-teal-400",
    accent: "from-lime-300 to-teal-400",
    tools: ["Illustrator", "Figma"],
    externalUrl: "https://www.behance.net/gallery/249517067/Graphic-design-posters-showcase",
    problem:
      "The festival wanted print that felt local and unfussy, with strong wayfinding for a small budget.",
    process: [
      "Modular type system in two weights",
      "Photography sourced from community gardens",
      "Two-color riso prints for posters and zines",
    ],
    outcome:
      "200 posters distributed across the city; the festival reported 30% higher walk-in attendance.",
    gallery: [
      "from-lime-300 to-teal-400",
      "from-emerald-300 to-lime-200",
      "from-teal-400 to-emerald-300",
    ],
  },
  {
    slug: "spotify-fitness_app",
    title: "Spotify-fit app",
    category: "Mobile · UI/UX",
    year: "2025",
    summary: "Concept and prototype for a spotify based fitness app.",
    description:
      "A concept neobank app that reframes balances around what you can actually spend, with soft micro-interactions and a focus on financial calm.",
    cover: "/spotifyfit-thumbnail.png",
    accent: "from-amber-300 to-rose-400",
    tools: ["Figma", "Notion"],
    externalUrl: "https://www.notion.so/Spotify-x-Fitness-UX-Design-Sprint-Case-study-364c14536d3a801589ebcffe1b95fed0?source=copy_link",
    problem:
      "Most banking apps lead with anxiety-inducing balances. We wanted an interface that helps students plan, not panic.",
    process: [
      "User interviews with 12 students about money stress",
      "Information architecture exploring \"safe-to-spend\" first",
      "Lo-fi wireframes, then a high-fidelity Figma prototype",
      "Motion studies for transitions and micro-feedback",
    ],
    outcome:
      "A 24-screen prototype with a calmer visual system and a 38% faster perceived load in user testing.",
    gallery: [
      "from-amber-200 to-rose-400",
      "from-orange-300 to-pink-400",
      "from-yellow-200 to-orange-400",
    ],
  },
  {
    slug: "xp-bar",
    title: "XP bar logo",
    category: "Branding · Social media",
    year: "2025",
    summary: "Designed logo and social media content for a game dev page.",
    description:
      "An experimental music UI exploring non-linear playlists, where songs are arranged spatially and connected by mood.",
    cover: "/xpbar.png",
    accent: "from-sky-300 to-fuchsia-400",
    tools: ["Figma", "Premiere Pro"],
    externalUrl: "https://www.behance.net/gallery/249570551/Xp-bar",
    problem:
      "Linear playlists collapse the texture of how we actually listen. Could a spatial canvas feel more like a real listening session?",
    process: [
      "Sketch explorations of 12 spatial layouts",
      "Prototype in Framer with drag and zoom",
      "Rive animations for the playing state",
      "User test with 8 listeners — measured emotional response",
    ],
    outcome:
      "Concept featured in two student showcases; informed an ongoing research project on ambient interfaces.",
    gallery: [
      "from-sky-300 to-fuchsia-400",
      "from-violet-300 to-sky-300",
      "from-fuchsia-400 to-rose-300",
    ],
  },
];
