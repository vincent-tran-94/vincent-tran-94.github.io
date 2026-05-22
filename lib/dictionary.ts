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
    contact: string;
    phone: string;
    email: string;
  };
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
  resume: {
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
    title: string;
    items: {
      title: string;
      description: string;
      link: string;
      image: string;
    }[];
  };
  footer: {
    copyright: string;
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
    subtitle: "Développeur Full Stack / Ingénieur IA",
    description: "Passionné par l'intelligence artificielle et le développement web, avec une solide expérience en programmation.",
    contact: "Contact",
    phone: "+33 7 67 30 43 98",
    email: "vincenttran94@hotmail.fr",
  },
  about: {
    title: "À Propos",
    paragraph1: "Je suis Vincent TRAN, passionné par l'intelligence artificielle, le développement web, et la data science. Fort d'au moins trois ans d'expérience professionnelle, j'ai acquis des compétences solides en programmation, analyse de données et systèmes embarqués. J'aime relever des défis et travailler sur des projets concrets qui ont un impact positif.",
    paragraph2: "J'ai notamment contribué au développement d'une application web pour l'association Préserve ton droit, où j'ai créé des parcours d'apprentissage interactifs pour les utilisateurs. Ce projet a également permis de collecter des données utiles pour accroître la visibilité de l'association. En parallèle, je suis capable de rédiger des documents techniques et fonctionnels pour fournir des informations et des conseils pratiques.",
    paragraph3: "En plus de mon expérience dans le développement web, j'ai des connaissances en data science et en systèmes embarqués, ce qui me permet d'approcher des projets sous différents angles. Aujourd'hui, je suis motivé à rejoindre une entreprise dynamique et innovante, où je pourrai mettre à profit mes compétences pour contribuer efficacement à des projets significatifs.",
  },
  resume: {
    education: {
      title: "Formations",
      items: [
        "2024 – 2025 : Diplôme Universitaire en Data Analytics, Université Paris 1 Panthéon-Sorbonne",
        "Juin 2023 – Septembre 2023 : Développeur bas-niveau Linux, DataScientest",
        "Février 2023 – Avril 2023 : Développeur Web Python, M2I Formation",
        "2020 - Juin 2022 : Master en Ingénierie de l'Intelligence Artificielle, Université Paris 8",
        "2019 - 2020 : Licence Sciences pour l'Ingénieur, UPEC",
        "2017 - 2019 : DUT Génie Electrique et Informatique Industrielle, IUT de Créteil-Vitry",
      ],
    },
    experience: {
      title: "Expériences",
      items: [
        {
          title: "Janvier 2024 – Aujourd'hui: Développeur Full Stack & Chef de Projet Digital | Préserve Ton Droit, Paris, France.",
          description: "En tant que Développeur full stack & Chef de projet digital, je pilote la stratégie numérique de l'association pour faciliter l'accès au droit. Mon action se concentre sur 4 axes :\n\n• Lancement & Stratégie : Conception du site vitrine www.preserve-ton-droit.com et contribution directe à la définition de la stratégie de croissance.\n• Développement Web : Conception et développement d'une application de quiz fullstack, incluant une API REST robuste pour la gestion de parcours d'apprentissage personnalisables, et intégrant la génération automatisée de quiz au format JSON via un LLM.\n• Gestion de Contenu (CMS) : Déploiement et configuration du Headless CMS Strapi pour la création du blog, structurant les données et offrant aux contributeurs une interface autonome pour la publication d'articles juridiques et actions humanitaires avec un API REST.\n• Leadership Technique : Coordination des équipes UX/UI et des développeurs pour assurer l'amélioration continue des plateformes.",
        },
        {
          title: "Avril 2025 – Octobre 2025 : Ingénieur en Intelligence Artificielle | Devoteam, Levallois-Perret, France",
          description: "Le sujet porte sur l'axe de recherche du Cloud Autonome dans le but de développer de solutions innovantes pour assister les architectes cloud dans la définition des architectures techniques pour le déploiement d'applications cloud natives, basées sur des besoins fonctionnels.\n\nPrincipales missions & réalisations :\n\n• Étude des techniques existantes pour la traduction du langage naturel en architecture technique formalisée à l'aide des standards de l'industrie.\n• Implémentation d'un PoC (Proof of Concept) à l'état de l'art de la traduction du langage naturel.\n• Rédaction des livrables de l'entreprise.\n• Proposition des solutions à l'état de l'art des bonnes pratiques et de la sécurité du domaine.",
        },
        {
          title: "Février 2022 – Juillet 2022 : Data Scientist NLP | Laboratoire d'Institut des Humanités Numériques (IDHN), Cergy, France.",
          description: "Développement de 'Politiquiz' : un modèle de classification et une application web interactive analysant en temps réel les discours des candidats à l'élection présidentielle de 2022.\n\nPrincipales missions & réalisations :\n\n• Acquisition et traitement NLP : Collecte des publications sur les réseaux sociaux et préparation du corpus textuel à l'aide de techniques avancées de nettoyage (Regex, NLTK, SpaCy).\n• Modélisation & Machine Learning : Développement, comparaison et optimisation de modèles de classification supervisée (Multinomial Naive Bayes, Régression Logistique, Random Forest, Linear SVC).\n• Évaluation de la performance : Suivi rigoureux des modèles via les métriques clés (Accuracy, Précision, Rappel et F1-score).\n• Dataviz & Déploiement : Intégration des prédictions dans un tableau de bord dynamique pour permettre aux utilisateurs d'analyser les discours sous plusieurs angles.",
        },
        {
          title: "Avril 2019 – Juillet 2019 : Technicien en conception électronique | Dassault Aviation - Saint-Cloud, France.",
          description: "Conception d'un outil de communication entre un ordinateur et un système de test pour le diagnostic et l'échange de données.",
        },
      ],
    },
    skills: {
      title: "Compétences Techniques",
      items: [
        "Langages: Python, Java, HTML/CSS, JavaScript",
        "Data Science: Pandas, Scikit-learn, Keras, NLTK, SpaCy, Tensorflow",
        "IA & NLP: Transformers, LangChain, LangGraph, OpenAI, Llama, Claude",
        "Bases de données: PostgreSQL, Neo4J",
        "MLOps & CI/CD: Git, Gitlab, Docker, MLflow",
        "Cloud: Databricks, Azure, AWS",
        "Data Viz & Web: PowerBI, FastAPI, NextJS, Flask, Streamlit",
        "Systèmes: Windows, Debian, Ubuntu",
        "Gestion de projet: Méthode Agile",
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
    title: "Découvrir mes meilleurs projets",
    items: [
        {
          title: "Site web vitrine & Application Quiz - Préserve Ton Droit",
          description: "Site web vitrine de l'association et application de quiz interactive. Développement complet incluant la présentation de l'association, ses actions, et un système de quiz pédagogique fullstack.",
          link: "https://github.com/vincent-tran-94/Site_web_application_quiz_v1",
          image: "/images/Site_web_PTD_accueil.PNG",
        },
        {
        title: "AQG4SD - Génération automatisée de requêtes GraphQL à partir des exigences utilisateur en langage naturel pour la découverte et la sélection de services cloud.",
        description: "Application Streamlit pour Génération automatisée de requêtes GraphQL à partir des exigences utilisateur en langage naturel pour la découverte et la sélection de services cloud.",
        link: "https://github.com/vincent-tran-94/AQG4SD",
        image: "/images/Interface_part_1_Streamlit.png",
      },
      {
        title: "Recherche d'informations de Quiz avec l'architecture RAG ( Retrieval Augmented Generation )",
        description: "L'objectif est de permettre à l'utilisateur de spécifier des informations précises pour générer un contexte de quiz adapté.",
        link: "https://github.com/vincent-tran-94/LLM-Quiz-Contextual-RAG",
        image: "/images/interface_quiz.png",
      },
      {
        title: "Analyse sentimentale des tweets sur les jeux vidéos",
        description: "L'objectif principal de ce projet est de déterminer si un type de jeu est perçu comme bon, mauvais ou neutre à partir d'un ensemble de tweets, en utilisant des modèles de Machine Learning",
        link: "https://github.com/vincent-tran-94/Sentiment_Analytics_Video_Games",
        image: "/images/Vocabulary_sentimental_by_game.png",
      },
      {
        title: "Classification multi-classes des tweets des candidats à l'élection présidentielle de 2022",
        description: "Développement et évaluation des modèles de classification de texte supervisée pour identifier des sujets politiques dans les discours des candidats à l'élection présidentielle de 2022. Intégration des résultats dans une application web interactive",
        link: "https://github.com/vincent-tran-94/Stage_Cergy",
        image: "/images/nlp_project_2.png",
      },
      {
        title: "Projet final Raspberry Pi pour la formation 'DataScientest'",
        description: "Système d'application dédié à la surveillance et à la gestion d'une carte Raspberry Pi.",
        link: "https://github.com/vincent-tran-94/Kernel_RPI",
        image: "/images/raspberrypi_project_2.jpg",
      },
      {
        title: "Robot Car autonome M1/M2",
        description: "Pilotage d'un robot sans interaction humaine via capteur ultrason et caméra pour la reconnaissance d'objet.",
        link: "https://github.com/vincent-tran-94/Electronic_Robot_Car_RPI",
        image: "/images/robot_car.jpg",
      }
    ],
  },
  footer: {
    copyright: "© 2026 Vincent TRAN. Tous droits réservés.",
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
    subtitle: "Data Scientist / Web Developer",
    description: "Passionate about artificial intelligence and web development, with solid programming experience.",
    contact: "Contact",
    phone: "+33 7 67 30 43 98",
    email: "vincenttran94@hotmail.fr",
  },
  about: {
    title: "About Me",
    paragraph1: "I am Vincent TRAN, passionate about artificial intelligence, webdevelopment, and data science. With at least three years of professional experience, I have acquired strong skills in programming, data analysis, and embedded systems.",
    paragraph2: "I contributed to the development of a web application for the association Preserve Ton Droit, where I created interactive learning paths for users. This project also allowed us to collect valuable data to increase the association's visibility",
    paragraph3: "In addition, I am able to write technical and functional documentation to provide information and practical advice.",
  },
  resume: {
    education: {
      title: "Education",
      items: [
        "2024 – 2025: University Diploma in Data Analytics, Paris 1 Panthéon-Sorbonne",
        "June 2023 – September 2023: Low-level Linux Developer, DataScientest",
        "February 2023 – April 2023: Python Web Developer, M2I Formation",
        "2020 - June 2022: Master's in AI Engineering, Paris 8 University",
        "2019 - 2020: Bachelor's in Engineering Sciences, UPEC",
        "2017 - 2019: DUT in Electrical Engineering, IUT de Créteil-Vitry",
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          title: "January 2024 – Present : Full Stack Developer & Digital Project Manager | Préserve Ton Droit, Paris, France.",
          description: "As a Full Stack Developer & Digital Project Manager, I drive the association's digital strategy to facilitate access to legal rights. My work focuses on 4 areas:\n\n• Launch & Strategy: Design of the showcase website www.preserve-ton-droit.com and direct contribution to the growth strategy.\n• Web Development: Design and development of a fullstack quiz application, including a robust REST API for managing customizable learning paths, integrating automated quiz generation in JSON format via an LLM.\n• CMS Management: Deployment and configuration of the Strapi Headless CMS for the blog, structuring data and providing contributors with an autonomous interface for publishing legal articles and humanitarian actions via a REST API.\n• Technical Leadership: Coordination of UX/UI teams and developers to ensure continuous platform improvement.",
        },
        {
          title: "April 2025 – October 2025: AI Engineer | Devoteam, Levallois-Perret, France",
          description: "This project focuses on the research area of ​​Autonomous Cloud, aiming to develop innovative solutions to assist cloud architects in defining technical architectures for deploying cloud-native applications based on functional requirements. Main missions & achievements: • Study of existing techniques for translating natural language into formalized technical architecture using industry standards. • Implementation of a state-of-the-art Proof of Concept (PoC) for natural language translation. • Drafting of company deliverables. • Proposal of state-of-the-art solutions incorporating best practices and domain security."
        },
        {
          title: "February 2022 – July 2022: Data Scientist | Digital Humanities Institute (IDHN), Cergy, France.",
          description: "Development of 'Politiquiz': a classification model and interactive web application analyzing in real-time the speeches of candidates for the 2022 presidential election.\n\nKey missions & achievements:\n\n• NLP Acquisition & Processing: Collection of social media publications and preparation of the textual corpus using advanced cleaning techniques (Regex, NLTK, SpaCy).\n• Modeling & Machine Learning: Development, comparison, and optimization of supervised classification models (Multinomial Naive Bayes, Logistic Regression, Random Forest, Linear SVC).\n• Performance Evaluation: Rigorous model monitoring through key metrics (Accuracy, Precision, Recall, and F1-score).\n• Dataviz & Deployment: Integration of predictions into a dynamic dashboard allowing users to analyze speeches from multiple angles.",
        },
        {
          title: "April 2019 – July 2019: Electronic Design Technician | Dassault Aviation - Saint-Cloud, France.",
          description: "Design of a communication tool between a computer and a test system for data diagnosis and exchange.",
        },
      ],
    },
    skills: {
      title: "Technical Skills",
      items: [
        "Languages: Python, Java, HTML/CSS, JavaScript",
        "Data Science: Pandas, Scikit-learn, Keras, NLTK, SpaCy, Tensorflow",
        "AI & NLP: Transformers, LangChain, LangGraph, OpenAI, Llama, Claude",
        "Databases: PostgreSQL, Neo4J",
        "MLOps & CI/CD: Git, Gitlab, Docker, MLflow",
        "Cloud: Databricks, Azure, AWS",
        "Data Viz & Web: PowerBI, FastAPI, NextJS, Flask, Streamlit",
        "Systems: Windows, Debian, Ubuntu",
        "Project Management: Agile",
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
    title: "Discover my best projects",
    items: [
        {
          title: "Showcase Website & Quiz Application - Préserve Ton Droit",
          description: "Association showcase website and interactive quiz application. Full development including the association presentation, its actions, and a fullstack educational quiz system.",
          link: "https://github.com/vincent-tran-94/Site_web_application_quiz_v1",
          image: "/images/Site_web_PTD_accueil.PNG",
        },
        {
        title: "AQG4SD - Automated GraphQL Query Generation from Natural Language User Requirements for Cloud Service Discovery and Selection.",
        description: "Streamlit application for automated generation of GraphQL queries from natural language user requirements for cloud service discovery and selection.",
        link: "https://github.com/vincent-tran-94/AQG4SD",
        image: "/images/Interface_part_1_Streamlit.png",
      },
      {
        title: "Searching for quiz information using RAG (Retrieval Augmented Generation) architecture",
        description: "The objective is to allow users to specify precise information to generate an appropriate quiz context.",
        link: "https://github.com/vincent-tran-94/LLM-Quiz-Contextual-RAG",
        image: "/images/interface_quiz.png",
      },
      {
        title: "Sentimental analysis of tweets about video games",
        description: "The main objective of this project is to determine whether a type of game is perceived as good, bad or neutral based on a set of tweets, using Machine Learning models",
        link: "https://github.com/vincent-tran-94/Sentiment_Analytics_Video_Games",
        image: "/images/Vocabulary_sentimental_by_game.png",
      },
      {
        title: "Multi-class classification of tweets from candidates in the 2022 presidential election",
        description: "Development and evaluation of supervised text classification models to identify political themes in the speeches of candidates for the 2022 presidential election. Integration of the results into an interactive web application",
        link: "https://github.com/vincent-tran-94/Stage_Cergy",
        image: "/images/nlp_project_2.png",
      },
      {
        title: "Raspberry Pi Final Project - DataScientest",
        description: "Application system dedicated to monitoring and managing a Raspberry Pi board.",
        link: "https://github.com/vincent-tran-94/Kernel_RPI",
        image: "/images/raspberrypi_project_2.jpg",
      },
      {
        title: "Autonomous Robot Car M1/M2",
        description: "Robot control without human interaction using ultrasonic sensor and camera for object recognition.",
        link: "https://github.com/vincent-tran-94/Electronic_Robot_Car_RPI",
        image: "/images/robot_car.jpg",
      },
    ],
  },
  footer: {
    copyright: "© 2026 Vincent TRAN. All rights reserved.",
  },
};

export const dictionaries: Record<string, Dictionary> = { fr, en };

export const getDictionary = (locale: string): Dictionary => {
  return dictionaries[locale] ?? fr;
};