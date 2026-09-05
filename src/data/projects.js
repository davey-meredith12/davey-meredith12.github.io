// To add an image to a project, drop the file in public/projects/
// (e.g. public/projects/nocturne.jpg) and set that project's `image`
// field below to the matching path (e.g. "/projects/nocturne.jpg").
// Projects with image: null render as a text-only card.

export const otherProjects = [
  {
    name: "Image Classification System",
    description:
      "Machine learning final project implementing a lightweight CNN (LeNet-5) in PyTorch for image classification on CIFAR-100, including training/validation pipelines and analytical tooling (loss curves, heatmaps) to evaluate performance across hyperparameter configurations.",
    tech: ["Python", "PyTorch"],
    github: null,
  },
  {
    name: "Drawing App",
    description:
      "Android drawing app with a Firebase backend for image upload, storage, and real-time sharing between users, including user authentication and image management.",
    tech: ["Kotlin", "Android Studio", "Firebase"],
    github: null,
  },
  {
    name: "CanaryTests",
    description:
      "A C++ unit testing framework built from scratch to understand how frameworks like GoogleTest work under the hood. Macro-based test registration, automatic static discovery, colored output, and non-fatal EXPECT-style assertions.",
    tech: ["C++"],
    github: "https://github.com/davey-meredith12/CanaryTests",
  },
  {
    name: "SailingApp",
    description:
      "An iOS app built with SwiftUI for tracking boats and their onboard inventory.",
    tech: ["Swift", "SwiftUI"],
    github: "https://github.com/davey-meredith12/SailingApp",
  },
  {
    name: "PrimeTools",
    description:
      "A cross-platform tool-calculation app built with .NET MAUI, sharing one codebase across platforms.",
    tech: ["C#", ".NET MAUI"],
    github: "https://github.com/davey-meredith12/PrimeTools",
  },
  {
    name: "Explore London",
    description: "Educational mobile app for exploring London.",
    tech: [],
    github: null,
  },
  {
    name: "Snake Game",
    description: "Classic Snake game implementation.",
    tech: [],
    github: null,
  },
];

export const gameProjects = [
  {
    name: "Nocturne: Escape the Night",
    description:
      "CS capstone project built over a year with a 15-person Agile team of engineers, artists, and designers. Designed and implemented core C++ gameplay systems in Unreal Engine, debugged multilayered pointer and memory issues to eliminate crashes, and refactored shared code into reusable structures for team-wide development.",
    tech: ["C++", "Unreal Engine"],
    image: null,
    links: [
      {
        label: "View on Steam",
        url: "https://store.steampowered.com/app/4496410/Nocturne_Escape_the_Night/",
      },
    ],
  },
  {
    name: "Fallen Crown",
    description:
      "Programmed core gameplay mechanics in Unreal Engine using Blueprint scripting as part of an interdisciplinary game development team.",
    tech: ["Unreal Engine", "Blueprint"],
    image: null,
    links: [
      { label: "Play on itch.io", url: "https://czmavery.itch.io/fallen-crown" },
    ],
  },
  {
    name: "Eternity",
    description:
      "Programmed gameplay mechanics and designed levels in GameMaker, delivering a complete playable build.",
    tech: ["GameMaker", "Level Design"],
    image: null,
    links: [],
  },
];
