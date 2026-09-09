// To add an image to a project, drop the file in public/projects/
// (e.g. public/projects/nocturne.jpg) and set that project's `image`
// field below to the matching path (e.g. "/projects/nocturne.jpg").
// Projects with image: null (or no image field) render as a text-only card.
// This applies to both otherProjects and gameProjects.

export const otherProjects = [
  {
    name: "Image Classification System",
    description:
      "Machine learning final project implementing a lightweight CNN (LeNet-5) in PyTorch for image classification on CIFAR-100 and performance evaluation across hyperparameter configurations.",
    tech: ["Python", "PyTorch"],
    image: null,
    github: null,
  },
  {
    name: "Drawing App",
    description:
      "Android drawing app with a Firebase backend for image upload, storage, and real-time sharing between users, including user authentication and image management.",
    tech: ["Kotlin", "Android Studio", "Firebase"],
    image: null,
    github: null,
  },
  {
    name: "CanaryTests",
    description:
      "A C++ unit testing framework built from scratch to understand how frameworks like GoogleTest work under the hood. Macro-based test registration, automatic static discovery",
    tech: ["C++"],
    image: null,
    github: "https://github.com/davey-meredith12/CanaryTests",
  },
  {
    name: "SailingApp",
    description:
      "An iOS app built with SwiftUI for tracking boats and their onboard inventory.",
    tech: ["Swift", "SwiftUI"],
    image: null,
    github: "https://github.com/davey-meredith12/SailingApp",
  },
  {
    name: "PrimeTools",
    description:
      "A calculation app built with .NET MAUI built to explore number theory fundamentals.",
    tech: ["C#", ".NET MAUI"],
    image: null,
    github: "https://github.com/davey-meredith12/PrimeTools",
  },
  {
    name: "Explore London",
    description: "Educational app for exploring and learning about cites in London.",
    tech: ["C++", "QtCreator"],
    image: null,
    github: null,
  },
  {
    name: "Snake Game",
    description: "Classic Snake game implementation with multiplayer support over a TCP client-server connection.",
    tech: ["C#", ".NET", "MAUI"],
    image: null,
    github: null,
  },
];

export const gameProjects = [
  {
    name: "Nocturne: Escape the Night",
    description:
      "CS capstone project built over a year with a 15-person Agile team of engineers, artists, and designers.",
    tech: ["C++", "Unreal Engine"],
    image: "/projects/nocturne_screenshot.jpg",
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
    image: "/projects/fallen_crown_image.png",
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
