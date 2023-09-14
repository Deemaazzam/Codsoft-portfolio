import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    games,games2

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "C++ Developer",
      icon: mobile,
    },
    {
      title: "Game Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "HTML & CSS",
      company_name: "",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020",
      points: [
        "I acquired proficiency in HTML and CSS, which empowered me to craft a variety of projects such as a personal CV website and fan pages, among others.",
        "Continuously honing my skills, I commit to a weekly routine of building websites and exploring CSS libraries to stay updated with the latest trends and techniques.",
        "Prioritizing user experience, I implement responsive design principles and ensure cross-browser compatibility in my web projects.",
        "As part of my academic journey, I enrolled in a web development course at my university to further deepen my understanding of the field.",
      ],
    },
    {
      title: "Javascript",
      company_name: "",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021",
      points: [
        "I learned JavaScript and incorporated it into my front-end development toolkit to enhance website responsiveness and user-friendliness.",
        "I embarked on the journey of learning game development using JavaScript, aiming to both showcase my skills and delve into the advanced syntax of this versatile language.",
        "I have successfully created several HTML canvas-based games, including classics like Snake, Space Invaders, and a Pokémon-inspired game. Currently, I am in the process of developing a game reminiscent of Super Mario & chess Game.",
        "I'm actively acquiring knowledge of various JavaScript libraries such as Three.js and Node.js, allowing me to streamline my development process and build more sophisticated applications.",
      ],
    },
    {
      title: "React & OOP",
      company_name: "",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Learnt OOP & data structures in Java",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "C# Developement",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Present",
      points: [
        "I've acquired proficiency in C# programming, a versatile language widely used for various applications, including web and desktop development.",
        "In my C# development journey, I've worked with essential frameworks and tools, including ASP.NET for web development, Entity Framework for database interaction, and Visual Studio as my preferred integrated development environment (IDE).",
        "I have experience integrating C# back-end solutions with front-end technologies like HTML, CSS, and JavaScript to create comprehensive, full-stack applications.",
        "Looking ahead, I aim to specialize in specific areas of C# development, such as enterprise applications, game development, or web services, while exploring advanced topics like multithreading and design patterns to enhance my skills further.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Dima proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Dima does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Dima optimized our website, our traffic increased by 50%. We can't thank her enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Personal Cv",
      description:
        "My personal CV is a meticulously crafted HTML document designed to provide a comprehensive overview of my professional journey and qualifications. It serves as an interactive and informative representation of my skills, experience, and accomplishments, allowing potential employers or collaborators to gain valuable insights into my background.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        
      ],
      image: carrent,
      source_code_link: "https://deemaazzam.github.io/MyCV/",
    },
    {
      name: "Fanpage",
      description:
        "Step into a realm where passion knows no bounds. Our meticulously designed fanpage invites you to explore an immersive universe dedicated to your favorite interests. Dive into a trove of rich content, engage with a vibrant community, stay updated with the latest happenings, and enjoy exclusive merchandise tailored to your unique tastes.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: " https://deemaazzam.github.io/AttackonTitan/",
    },
    {
      name: "Quantum Computers",
      description:
        "Welcome to the Quantum Computing Hub – Unlocking the Future of Computing! 🌌🔬 Step into the fascinating realm of quantum computing, where the boundaries of classical computation are pushed beyond imagination. Our website is your gateway to understanding, exploring, and embracing the revolutionary world of quantum computers.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
       
      ],
      image: tripguide,
      source_code_link: "https://deemaazzam.github.io/QuantumDreamScape-ModernProject/",
    },
    {
      name: "Game1-",
      description:"Lucky Fish is a dynamic game where you aim to score 200 points within a time limit by eliminating various fish. Colliding with the special Lucky Fish boosts your energy recharge. Manage your bullets wisely, as running out leads to a game over. Can you emerge victorious?",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name:"Javascript",
          color:"yellow"
        }
       
      ],
      image: games,
      source_code_link: " https://deemaazzam.github.io/Lucky-Fish/",
    },
    {
      name: "Game2",
      description:" a game inspired by the world of Pokémon. I Used  advanced JS skills to build it, aiming to score 200 points within a time limit. Encounter special creatures to gain power-ups, but be careful not to run out of energy orbs. Plus, explore our selection of other exciting games available upon request for more gaming adventures!",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name:"Javascript",
          color:"yellow"
        }
       
      ],
      image: games2,
      source_code_link: "https://deemaazzam.github.io/Pokemon-game/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };