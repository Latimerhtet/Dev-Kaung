import project_1_1 from "../assets/ProjectsPhotos/WeirdTV-Projects/weirdTV(1).png";
import project_1_2 from "../assets/ProjectsPhotos/WeirdTV-Projects/weirdTV(2).png";
import project_2_1 from "../assets/ProjectsPhotos/Marketplace-Projects/marketplace(1).png";
import project_2_2 from "../assets/ProjectsPhotos/Marketplace-Projects/marketplace(2).png";
import project_2_3 from "../assets/ProjectsPhotos/Marketplace-Projects/marketplace(3).png";
import project_3_1 from "../assets/ProjectsPhotos/Blog-projects/blogProject(1).png";
import project_3_2 from "../assets/ProjectsPhotos/Blog-projects/blogProject(2).png";
import project_3_3 from "../assets/ProjectsPhotos/Blog-projects/blogProject(3).png";
import project_4_1 from "../assets/ProjectsPhotos/Chit-chat-project/chitChat(1).png";
import project_4_2 from "../assets/ProjectsPhotos/Chit-chat-project/chitChat(2).png";
import project_4_3 from "../assets/ProjectsPhotos/Chit-chat-project/chitChat(3).png";

export const PROJECTS = [
  {
    title: "Movie Streaming Website",
    duration: "1 week",
    tech: [
      { name: "React", color: "bg-[#00d9ff]" },
      { name: "TailwindCSS", color: "bg-[#18baba]" },
    ],
    photos: [project_1_1, project_1_2],
    description:
      "This is my frontend real world project using Reactjs and Imdb Backend API for movies data.",
    github_link:
      "https://github.com/Latimerhtet/Movie-Streaming-application-Wired-TV-",
  },
  {
    title: "Marketplace Website",
    duration: "1 week",
    tech: [
      { name: "React", color: "bg-[#00d9ff]" },
      { name: "Express.js", color: "bg-[#737373]", text: "text-white" },
      { name: "Node.js", color: "bg-[#529e41]" },
      { name: "TailwindCSS", color: "bg-[#18baba]" },
      { name: "MongoDB", color: "bg-[#6cab48]" },
    ],
    photos: [project_2_1, project_2_2, project_2_3],
    description:
      "This is my full-stack real world ecommerce project using MERN stack technology. The features include admin pannel, login ,register, adding product, managing product, adding bid, notifications for biding of a product.",
    github_link: "https://github.com/Latimerhtet/EasySell-Marketplace",
  },
  {
    title: "Full stack Blog Website",
    duration: "1 week",
    tech: [
      { name: "EJS", color: "bg-[#567a3a]" },
      { name: "Express.js", color: "bg-[#737373]", text: "text-white" },
      { name: "Node.js", color: "bg-[#529e41]" },
      { name: "MongoDB", color: "bg-[#6cab48]" },
    ],
    photos: [project_3_1, project_3_2, project_3_3],
    description:
      "This is my full-stack real world blog project using EJS templating engine, express.js and mongodb.The features include CRUD operation, auth features, authorization features and account subscription with stripe.js",
    github_link:
      "https://github.com/Latimerhtet/express-MongoDB-blog/tree/blogMongose",
  },
  {
    title: "Live Room chatting application",
    duration: "1 week",
    tech: [
      { name: "React", color: "bg-[#00d9ff]" },
      { name: "Express.js", color: "bg-[#737373]", text: "text-white" },
      { name: "Node.js", color: "bg-[#529e41]" },
      { name: "MongoDB", color: "bg-[#6cab48]" },
      { name: "Socket.io", color: "bg-[#6cab48]" },
    ],
    photos: [project_4_1, project_4_2, project_4_3],
    description:
      "This is my full-stack real world chatting application using socket.io for full-duples communication and real time communication between users.",
    github_link: "https://github.com/Latimerhtet/chit-chat-liveRoom-App",
  },
];
