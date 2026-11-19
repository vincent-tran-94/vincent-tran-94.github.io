export interface Dictionary {
  nav: {
    home: string;
    about: string;
    resume: string;
    projects: string;
  };
  hero: {
    portfolio: string;
    title: string;
    subtitle: string;
    description: string;
    projectsCta: string;
    emailCta: string;
    scrollCta: string;
    phone: string;
    email: string;
  };
  about: {
    kicker: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    signature: string;
  };
  resume: {
    kicker: string;
    intro: string;
    education: {
      title: string;
      items: string[];
    };
    experience: {
      title: string;
      items: {
        title: string;
        description: string;
      }[];
    };
    skills: {
      title: string;
      items: string[];
    };
    softSkills: {
      title: string;
      items: string[];
    };
    certifications: {
      title: string;
      items: string[];
    };
  };
  projects: {
    kicker: string;
    title: string;
    intro: string;
    filterLabel: string;
    githubLabel: string;
    filters: { all: string };
    categories: { web: string; ai: string; systems: string };
    items: {
      title: string;
      description: string;
      link: string;
      image: string;
      imageFit?: "contain" | "cover";
      category: "web" | "ai" | "systems";
      link2?: string;
      link2Label?: string;
    }[];
  };
  footer: {
    copyright: string;
    contact: string;
  };
}

const fr: Dictionary = {
  nav: {
    home: "Accueil",
    about: "À propos",
    resume: "Resumé",
    projects: "Mes projets",
  },
  hero: {
    portfolio: "PORTFOLIO",
    title: "Vincent TRAN",
    subtitle: "Ingénieur IA · Développeur Full Stack",
    description: "Je conçois des produits numériques utiles, de l’architecture technique à l’expérience utilisateur, en reliant intelligence artificielle, data et développement web.",
    projectsCta: "Voir mes projets",
    emailCta: "Me contacter",
    scrollCta: "Explorer le portfolio",
    phone: "+33 7 67 30 43 98",
    email: "vincenttran94@hotmail.fr",
  },
  about: {
    kicker: "Profil",
    title: "Du besoin au produit, avec une vision complète.",
    paragraph1: "Ingénieur en intelligence artificielle et développeur full stack, je transforme des besoins métier en solutions concrètes, maintenables et faciles à utiliser.",
    paragraph2: "J’ai piloté les projets numériques de Préserve Ton Droit pour faciliter l’accès au droit, puis exploré chez Devoteam la conception d’architectures cloud assistée par l’IA.",
    paragraph3: "J’aime faire le lien entre produit, technique et utilisateurs : cadrer une idée, construire la solution et la faire évoluer avec l’équipe.",
    signature: "Ingénierie · Produit · Impact",
  },
  resume: {
    kicker: "Parcours",
    intro: "Une expérience à la croisée du développement produit, de l’intelligence artificielle et de la gestion de projet.",
    education: {
      title: "Formations",
      items: [
        "2024 – 2025 : Diplôme Universitaire en Data Analytics, Université Paris 1 Panthéon-Sorbonne",
        "2020 – 2022 : Master en Ingénierie de l'Intelligence Artificielle, Université Paris 8",
        "2017 – 2020 : DUT GEII et Licence Sciences pour l'Ingénieur, IUT de Créteil-Vitry / UPEC",
        "2023 : Formations professionnelles en développement web Python et Linux embarqué",
      ],
    },
    experience: {
      title: "Expériences",
      items: [
        {
          title: "Juil. – sept. 2026 · Monteur-câbleur | Audiovisuel Technique Assistance — TF1, Boulogne-Billancourt",
          description: "Mission chez TF1, de la validation des besoins à la mise en service : montage, câblage réseau des équipements audiovisuels et livraison des installations.",
        },
        {
          title: "Janv. 2024 – juin 2026 · Développeur full stack & chef de projet digital | Préserve Ton Droit — Distanciel",
          description: "Pilotage stratégique et développement du projet numérique d’accès au droit : site vitrine, application de quiz full stack (API REST, génération par IA) et CMS Strapi. Coordination UX/UI et développement.",
        },
        {
          title: "Avr. – oct. 2025 · AI Engineer | Devoteam — Levallois-Perret",
          description: "PoC d’architecture cloud sécurisée : agent IA connecté par MCP et GraphQL à une API de pricing, benchmark de LLM, analyse de métadonnées par embeddings et évaluation automatisée des coûts avec LangGraph.",
        },
        {
          title: "Fév. – juil. 2022 · Data Scientist | Institut des Humanités Numériques — Cergy",
          description: "Modèle NLP pour classer les thèmes des discours de la présidentielle 2022 dans une application web : scraping de presse, analyse de données sociales, nettoyage du corpus et évaluation des modèles.",
        },
      ],
    },
    skills: {
      title: "Compétences Techniques",
      items: [
        "Langages : Python, JavaScript, Java",
        "Web & API : Next.js, FastAPI, Flask, Streamlit",
        "IA & data : NLP, RAG, Transformers, scikit-learn, Pandas",
        "Cloud & MLOps : AWS, Azure, Docker, MLflow",
        "Données : PostgreSQL, Neo4j, Power BI",
        "Systèmes : Linux, Raspberry Pi, systèmes embarqués",
      ],
    },
    softSkills: {
      title: "Compétences Comportementales",
      items: ["Rigueur", "Travail en équipe", "Résolution de problèmes", "Créatif"],
    },
    certifications: {
      title: "Certifications",
      items: [
        "Mars 2023 : TOSA Python – Score 823/1000",
        "Janvier 2023 : Udemy – Spark et Python pour Big Data avec PySpark",
        "Novembre 2022 : Udemy – SQL pour la Data Science de A à Z",
      ],
    },
  },
  projects: {
    kicker: "Sélection",
    title: "Des projets pensés pour être utiles.",
    intro: "Quelques réalisations qui illustrent mon approche : comprendre le besoin, choisir les bons outils et livrer une expérience claire.",
    filterLabel: "Filtrer les projets par domaine",
    githubLabel: "Voir le projet",
    filters: { all: "Tout voir" },
    categories: { web: "Web & produit", ai: "IA & data", systems: "Systèmes" },
    items: [
        {
          title: "Site web vitrine & Application Quiz - Préserve Ton Droit",
          description: "Site web vitrine de l'association et application de quiz interactive. Développement complet incluant la présentation de l'association, ses actions, et un système de quiz pédagogique fullstack.",
          link: "https://github.com/vincent-tran-94/Site_web_application_quiz_v1",
          image: "/images/Site_web_PTD_accueil.PNG",
          imageFit: "contain",
          category: "web",
          link2: "architecture-preservetondroit",
          link2Label: "Voir l'architecture",
        },
        {
          title: "Steam Activity MCP",
          description: "Serveur MCP et tableau de bord pour explorer une bibliothèque Steam, le temps de jeu et l’activité récente.",
          link: "https://github.com/vincent-tran-94/Steam-Activity-MCP",
          image: "/images/steam-activity-dashboard.png",
          imageFit: "contain",
          category: "systems",
          link2: "https://medium.com/%40vincenttran_81420/understanding-steam-playtime-through-natural-language-an-mcp-based-text-to-graphql-mvp-3aad2b882037",
          link2Label: "Voir l’article",
        },
        {
        title: "AQG4SD — Génération de requêtes GraphQL",
        description: "Un prototype Streamlit qui convertit des besoins en langage naturel en requêtes GraphQL pour découvrir des services cloud.",
        link: "https://github.com/vincent-tran-94/AQG4SD",
        image: "/images/Interface_part_1_Streamlit.png",
        imageFit: "contain",
        category: "ai",
      },
      {
        title: "Génération de quiz avec RAG",
        description: "Une approche RAG pour transformer des informations ciblées en contexte de quiz pertinent.",
        link: "https://github.com/vincent-tran-94/LLM-Quiz-Contextual-RAG",
        image: "/images/interface_quiz.png",
        imageFit: "contain",
        category: "ai",
      },
      {
        title: "Sentiment autour des jeux vidéo",
        description: "Analyse de tweets et classification des opinions sur différents jeux vidéo avec des modèles de machine learning.",
        link: "https://github.com/vincent-tran-94/Sentiment_Analytics_Video_Games",
        image: "/images/Vocabulary_sentimental_by_game.png",
        imageFit: "contain",
        category: "ai",
      },
      {
        title: "Analyse des discours politiques",
        description: "Modèles NLP pour classer les thèmes de discours de la présidentielle 2022, présentés dans une application interactive.",
        link: "https://github.com/vincent-tran-94/Stage_Cergy",
        image: "/images/nlp_project_2.png",
        imageFit: "contain",
        category: "ai",
      },
      {
        title: "Supervision système sur Raspberry Pi",
        description: "Outil Linux embarqué pour surveiller et administrer une carte Raspberry Pi.",
        link: "https://github.com/vincent-tran-94/Kernel_RPI",
        image: "/images/raspberrypi_project_2.jpg",
        category: "systems",
      },
      {
        title: "Robot mobile autonome",
        description: "Robot piloté par capteurs ultrason et caméra, avec détection d’objets et navigation autonome.",
        link: "https://github.com/vincent-tran-94/Electronic_Robot_Car_RPI",
        image: "/images/robot_car.jpg",
        category: "systems",
      }
    ],
  },
  footer: {
    copyright: "© 2026 Vincent Tran. Tous droits réservés.",
    contact: "Un projet en tête ? Échangeons.",
  },
};

const en: Dictionary = {
  nav: {
    home: "Home",
    about: "About",
    resume: "Resume",
    projects: "My Projects",
  },
  hero: {
    portfolio: "PORTFOLIO",
    title: "Vincent TRAN",
    subtitle: "AI Engineer · Full Stack Developer",
    description: "I build useful digital products, from technical architecture to user experience, connecting artificial intelligence, data, and web development.",
    projectsCta: "Explore my work",
    emailCta: "Get in touch",
    scrollCta: "Explore the portfolio",
    phone: "+33 7 67 30 43 98",
    email: "vincenttran94@hotmail.fr",
  },
  about: {
    kicker: "Profile",
    title: "From an idea to a product, with a complete perspective.",
    paragraph1: "As an AI engineer and full stack developer, I turn business needs into practical, maintainable solutions that are easy to use.",
    paragraph2: "I led Préserve Ton Droit’s digital projects to improve access to legal support, then explored AI-assisted cloud architecture design at Devoteam.",
    paragraph3: "I enjoy connecting product, technology, and people: shaping an idea, building the solution, and improving it with the team.",
    signature: "Engineering · Product · Impact",
  },
  resume: {
    kicker: "Experience",
    intro: "A career at the intersection of product development, artificial intelligence, and project leadership.",
    education: {
      title: "Education",
      items: [
        "2024 – 2025: University Diploma in Data Analytics, Paris 1 Panthéon-Sorbonne",
        "2020 – 2022: Master’s in AI Engineering, Paris 8 University",
        "2017 – 2020: DUT in Electrical Engineering and Bachelor’s in Engineering Sciences, IUT de Créteil-Vitry / UPEC",
        "2023: Professional training in Python web development and embedded Linux",
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          title: "Jul – Sep 2026 · Cable Technician | Audiovisuel Technique Assistance — TF1, Boulogne-Billancourt",
          description: "TF1 assignment from requirements gathering to commissioning: network cabling for audiovisual equipment, client validation, and delivery of completed installations.",
        },
        {
          title: "Jan 2024 – Jun 2026 · Full Stack Developer & Digital Project Manager | Préserve Ton Droit — Remote",
          description: "Led the digital project to improve access to legal support: showcase website, quiz app with a REST API and AI-generated quizzes, and Strapi CMS. Coordinated UX/UI and engineering contributors.",
        },
        {
          title: "Apr – Oct 2025 · AI Engineer | Devoteam — Levallois-Perret",
          description: "Prototyped secure cloud architecture support: an AI agent connected through MCP and GraphQL to a cloud pricing API, LLM benchmarking, semantic metadata embeddings, and automated cost evaluation with LangGraph.",
        },
        {
          title: "Feb – Jul 2022 · Data Scientist | Digital Humanities Institute — Cergy",
          description: "Built an NLP model to classify themes in 2022 presidential speeches for a web app: press scraping, social data analysis, corpus cleaning, and model evaluation.",
        },
      ],
    },
    skills: {
      title: "Technical Skills",
      items: [
        "Languages: Python, JavaScript, Java",
        "Web & APIs: Next.js, FastAPI, Flask, Streamlit",
        "AI & data: NLP, RAG, Transformers, scikit-learn, Pandas",
        "Cloud & MLOps: AWS, Azure, Docker, MLflow",
        "Data: PostgreSQL, Neo4j, Power BI",
        "Systems: Linux, Raspberry Pi, embedded systems",
      ],
    },
    softSkills: {
      title: "Soft Skills",
      items: ["Rigor", "Teamwork", "Problem Solving", "Creativity"],
    },
    certifications: {
      title: "Certifications",
      items: [
        "March 2023: TOSA Python – Score 823/1000",
        "January 2023: Udemy – Spark and Python for Big Data with PySpark",
        "November 2022: Udemy – SQL for Data Science from A to Z",
      ],
    },
  },
  projects: {
    kicker: "Selected work",
    title: "Projects built to be useful.",
    intro: "A selection that reflects how I work: understand the need, choose the right tools, and deliver a clear experience.",
    filterLabel: "Filter projects by area",
    githubLabel: "View project",
    filters: { all: "All work" },
    categories: { web: "Web & product", ai: "AI & data", systems: "Systems" },
    items: [
        {
          title: "Showcase Website & Quiz Application - Préserve Ton Droit",
          description: "Association showcase website and interactive quiz application. Full development including the association presentation, its actions, and a fullstack educational quiz system.",
          link: "https://github.com/vincent-tran-94/Site_web_application_quiz_v1",
          image: "/images/Site_web_PTD_accueil.PNG",
          imageFit: "contain",
          category: "web",
          link2: "architecture-preservetondroit",
          link2Label: "See architecture",
        },
        {
          title: "Steam Activity MCP",
          description: "An MCP server and dashboard for exploring a Steam library, playtime, and recent activity.",
          link: "https://github.com/vincent-tran-94/Steam-Activity-MCP",
          image: "/images/steam-activity-dashboard.png",
          imageFit: "contain",
          category: "systems",
          link2: "https://medium.com/%40vincenttran_81420/understanding-steam-playtime-through-natural-language-an-mcp-based-text-to-graphql-mvp-3aad2b882037",
          link2Label: "Read the article",
        },
        {
        title: "AQG4SD — Natural language to GraphQL",
        description: "A Streamlit prototype that turns natural-language requirements into GraphQL queries for cloud service discovery.",
        link: "https://github.com/vincent-tran-94/AQG4SD",
        image: "/images/Interface_part_1_Streamlit.png",
        imageFit: "contain",
        category: "ai",
      },
      {
        title: "RAG-powered quiz generation",
        description: "A retrieval-augmented approach for turning focused source material into useful quiz context.",
        link: "https://github.com/vincent-tran-94/LLM-Quiz-Contextual-RAG",
        image: "/images/interface_quiz.png",
        imageFit: "contain",
        category: "ai",
      },
      {
        title: "Video game sentiment analysis",
        description: "Classifies opinions about video games from tweets using machine learning models.",
        link: "https://github.com/vincent-tran-94/Sentiment_Analytics_Video_Games",
        image: "/images/Vocabulary_sentimental_by_game.png",
        imageFit: "contain",
        category: "ai",
      },
      {
        title: "Political speech analysis",
        description: "NLP models classify themes in 2022 presidential speeches, with results presented in an interactive application.",
        link: "https://github.com/vincent-tran-94/Stage_Cergy",
        image: "/images/nlp_project_2.png",
        imageFit: "contain",
        category: "ai",
      },
      {
        title: "Raspberry Pi system monitor",
        description: "An embedded Linux tool for monitoring and managing a Raspberry Pi.",
        link: "https://github.com/vincent-tran-94/Kernel_RPI",
        image: "/images/raspberrypi_project_2.jpg",
        category: "systems",
      },
      {
        title: "Autonomous mobile robot",
        description: "A mobile robot combining ultrasonic sensors and camera-based object recognition.",
        link: "https://github.com/vincent-tran-94/Electronic_Robot_Car_RPI",
        image: "/images/robot_car.jpg",
        category: "systems",
      },
    ],
  },
  footer: {
    copyright: "© 2026 Vincent Tran. All rights reserved.",
    contact: "Have a project in mind? Let’s talk.",
  },
};

export const dictionaries: Record<string, Dictionary> = { fr, en };

export const getDictionary = (locale: string): Dictionary => {
  return dictionaries[locale] ?? fr;
};
