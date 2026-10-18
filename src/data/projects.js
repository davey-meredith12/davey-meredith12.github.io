// To add an image to a project, drop the file in public/projects/
// (e.g. public/projects/nocturne.jpg) and set that project's `image`
// field below to the matching path (e.g. "/projects/nocturne.jpg").
// Projects with image: null (or no image field) render as a text-only card.
// This applies to both otherProjects and gameProjects.
//
// `github` is the repo URL (shown as a "Code" button). `links` is a list of
// { label, url } buttons for deployed front ends, e.g.
// { label: "Live Site", url: "https://..." }. Use [] for none. Add an optional
// `note` to show small text under that link (e.g. a cold-start warning).

export const otherProjects = [
  {
    name: "Image Classification System",
    description:
      "Machine learning final project implementing a lightweight CNN (LeNet-5) in PyTorch for image classification on CIFAR-100 and performance evaluation across hyperparameter configurations.",
    tech: ["Python", "PyTorch"],
    image: null,
    github: null,
    links: [],
  },
  {
    name: "Drawing App",
    description:
      "Android drawing app with a Firebase backend for image upload, storage, and real-time sharing between users, including user authentication and image management.",
    tech: ["Kotlin", "Android Studio", "Firebase"],
    image: null,
    github: null,
    links: [],
  },
  {
    name: "CanaryTests",
    description:
      "A C++ unit testing framework built from scratch to understand how frameworks like GoogleTest work under the hood. Macro-based test registration, automatic static discovery",
    tech: ["C++"],
    image: null,
    github: "https://github.com/davey-meredith12/CanaryTests",
    links: [],
  },
  {
    name: "SailingApp",
    description:
      "An iOS app built with SwiftUI for tracking boats and their onboard inventory.",
    tech: ["Swift", "SwiftUI"],
    image: null,
    github: "https://github.com/davey-meredith12/SailingApp",
    links: [],
  },
  {
    name: "PrimeTools",
    description:
      "A calculation app built with .NET MAUI built to explore number theory fundamentals.",
    tech: ["C#", ".NET MAUI"],
    image: null,
    github: "https://github.com/davey-meredith12/PrimeTools",
    links: [],
  },
  {
    name: "Explore London",
    description: "Educational app for exploring and learning about cites in London.",
    tech: ["C++", "QtCreator"],
    image: null,
    github: null,
    links: [],
  },
  {
    name: "Snake Game",
    description: "Classic Snake game implementation with multiplayer support over a TCP client-server connection.",
    tech: ["C#", ".NET", "MAUI"],
    image: null,
    github: null,
    links: [],
  },
  {
    name: "Web Party Game",
    description: "A self-hosted party game featuring a randomized player-selection wheel, interactive prompts, and turn-based gameplay.",
    tech: ["Django", "Python"],
    image: null,
    github: null,
    links: [],
  },
  {
    name: "DC Commute",
    description: "Real-time DC Metro dashboard with live train arrivals, service alerts, elevator outages, trip fares and station entrances on an interactive map, backed by a caching FastAPI server.",
    tech: ["Python", "FastAPI", "JavaScript", "Leaflet", "CSS", "WMATA API"],
    image: "/projects/dc_metro_image.png",
    github: "https://github.com/davey-meredith12/dc-metro-map",
    links: [
      {
        label: "Live Site",
        url: "https://dc-commute.onrender.com/",
        note: "Hosted on a free tier, so it may take ~30 seconds to wake up.",
      },
    ],
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
