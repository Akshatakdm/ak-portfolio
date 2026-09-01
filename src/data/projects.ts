export type Project = {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  idea: string;
  built: string;
  stack: string[];
  learned: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "digital-love-letter",
    name: "Digital Love Letter",
    category: "Web Experience",
    shortDescription:
      "A private digital letter experience built around encrypted messages.",
    description:
      "A small, private space for writing something personal and sharing it without putting it on the internet for everyone to see.",
    idea:
      "I wanted to recreate the feeling of writing an actual letter, but digitally. The idea was simple: write a letter, protect it with a password, and share a private link with the person it is meant for.",
    built:
      "The application lets someone create a letter, protect it with a password, generate a short private link, and allow the recipient to unlock and read it.",
    stack: [
      "React",
      "JavaScript",
      "Web Crypto API",
      "Firebase",
      "Tailwind CSS",
      "Vercel",
    ],
    learned:
      "Working with browser-side encryption made me think much more carefully about what should happen to data before it ever reaches a database.",
    image: "/projects/digital-love-letter.webp",
    liveUrl: "https://digital-love-letter-xi.vercel.app/",
  },

  {
    slug: "jagdamb-fast-food",
    name: "Jagdamb Fast Food",
    category: "Restaurant Website",
    shortDescription:
      "A playful food ordering experience with 3D elements.",
    description:
      "A visual-first website created for a local fast-food brand, combining a simple ordering experience with playful 3D interactions.",
    idea:
      "The goal was to make a small food business feel more memorable online instead of building another generic restaurant website.",
    built:
      "The site combines responsive layouts, menu presentation, ordering information and interactive 3D elements to give the experience a little more personality.",
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Three.js",
      "React Three Fiber",
    ],
    learned:
      "Adding 3D to a website is fun until you open it on a phone. Performance and asset optimisation became just as important as the visual experience.",
    image: "/projects/jagdamb-fast-food.webp",
    liveUrl: "https://jagdamb-fast-food.netlify.app/",
  },

  {
    slug: "baddie-playlist",
    name: "Baddie Playlist",
    category: "Fun Experiment",
    shortDescription:
      "A tiny playlist experiment because playlists apparently need websites too.",
    description:
      "A small music-focused experiment built around the idea of turning a playlist into its own little web experience.",
    idea:
      "Sometimes a project doesn't need to solve a serious problem. I wanted to experiment with creating a fun, simple experience around a playlist.",
    built:
      "The project uses a React interface, YouTube integration and Firebase to create a lightweight interactive playlist experience.",
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "YouTube",
      "Firebase",
    ],
    learned:
      "Small projects are surprisingly useful for trying ideas quickly without worrying about whether they belong in a production application.",
    image: "/projects/baddie-playlist.webp",
    liveUrl: "https://baddie-playlist.netlify.app/",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}