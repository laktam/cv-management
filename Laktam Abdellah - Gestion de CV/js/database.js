// contains the database and the cv data placeholder for cv creation
const database = [
    {
        profile: {
            photo: "./resources/photo.png",
            firstName: "Abdellah",
            lastName: "Laktam",
            birthday: {
                day: 23,
                month: 9,
                year: 2000
            },
            phone: "0663573878",
            email: "laktamlaktamabdellah@gmail.com",
            address: "Rabat",
            professionalSummary: `  Étudiant passionné et motivé, actuellement en Master Qualite du Logiciel (MQL) à la faculté des sciences Dhar El Mahraz , avec 
        une solide compréhension des architectures logicielles et les nouvelles technologies informatique, 
        en l'occurence Jakarta EE, Spring Boot, React et Angular. Disposant des compétences requises en communication et 
        en résolution de problèmes avec un esprit ouvert en collaboration efficace avec les parties prenantes 
        et les membres de l'équipe.`
            ,
            links: ["github.com/laktam", "", ""],
        },
        education: [
            {
                diploma: "Master MQL",
                organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
                year: 2025
            },
            {
                diploma: "Licence Professionnelle GLAASRI",
                organisation: "École SUPÉRIEURE DE TECHNOLOGIE CASA",
                year: 2023
            },
            {
                diploma: "Diplôme de technicien spécialisé en réseau informatique",
                organisation: "ISTA Hay Nahda ",
                year: 2022
            },
            {
                diploma: "Baccalauréat physique chimie",
                organisation: "Lycée Moulay Abdellah",
                year: 2018
            },


        ],
        technologySkills: [
            {
                skill: "Jakarta Entreprise Edition (JEE)",
                details: ["Architecture 3 tiers", "Modèle MVC2", "Servlets et JSP",
                    "modèle DAO", "Framework Spring / Spring Boot", "JPA", "Hibernate",
                    "Administration Tomcat"
                ]
            },
            {
                skill: "Ingénierie du Web",
                details: ["HTML", "CSS", "JavaScript", "Node.js", "React", "Angular"]
            },

            {
                skill: "Ingénierie DevOps",
                details: ["Maven", "Git", "GitHub", "GitLab", "Jira", "Jenkins", "JUnit", "Selenuim"]
            },
            {
                skill: "Technologie XML",
                details: ["Standard XML", "Bases de données XML", "Parseurs XML (DOM, SAX)",
                    "DTD", "XSD (XML Schema)", "XSLT", "XPath", "XQuery"]
            }
        ],
        experiences: [
            {
                type: "Stage",
                organisation: "4Digital - Tanger",
                title: "PFE: développement d'une webapp d'ecomerce",
                technologies: ["React", "NestJS", "Node.js", "TypeScript", "Material UI", "Docker", "MySQL", "Swagger"],
                year: 2023,
                duration: "1 mois"
            },
            {
                type: "Projet",
                organisation: "ESTC",
                title: "Extension de prise de note sur les tabs de navigateur",
                technologies: ["HTML", "CSS", "JavaScript"],
                year: 2022,
                duration: "1 mois"
            },
            {
                type: "Projet",
                organisation: "ESTC",
                title: " Online tic-tac-toe",
                technologies: ["React", "ExpressJS", "HTML", "CSS"],
                year: 2022,
                duration: "1 mois"
            },
            {
                type: "Projet",
                organisation: "ESTC",
                title: " Site web de l'ESTC",
                technologies: ["Django", "HTML", "CSS"],
                year: 2022,
                duration: "1 mois"
            },
            {
                type: "Projet",
                organisation: "ESTC",
                title: "Application android qui utilise 3 algorithme (knn, Reseau Bayesien,Arbre de decision)",
                technologies: ["Java"],
                year: 2022,
                duration: "1 mois"
            },
            {
                type: "Projet",
                organisation: "ESTC",
                title: "Application desktop de gestion des contacts (GUI)",
                technologies: ["Java Swing", "JDBC"],
                year: 2022,
                duration: "1 mois"
            }
        ],
        softSkills: ["Communication", "Esprit d'équipe", "Empatie et Ecoute",
            "Capacité de Résolution de problèmes", "Adaptabilité", "Gestion du Temps",
            "Gestion du Stress", "Présence"
        ],
        languages: [
            {
                language: "Français",
                level: "", // voir le "Common European Framework of Reference for Languages" (CEFR)
                certification: "",
                experience: ""
            },
            {
                language: "Anglais",
                level: "",
                certification: "",
                experience: ""
            },
            {
                language: "Arabe",
                level: "",
                certification: "",
                experience: ""
            }
        ],
        interests: ["", "", ""]
    },
    {
        profile: {
            photo: "resources/Amine_Hmidani_Filali.png",
            firstName: "Amine",
            lastName: "Hmidani Filali",
            birthday: {
                day: 26,
                month: 4,
                year: 2001,
            },
            phone: "0651638496",
            email: "hmidanifilaliamine@gmail.com",
            address: "Meknès, Maroc",
            professionalSummary: `Passionné par l'intelligence artificielle, la science des données et le développement web,
       je suis titulaire d'une licence professionnelle en Intelligence Artificielle et Sciences des Données ainsi que d'un DUT en Génie Logiciel. 
       Grâce à des formations en ligne et académiques, j'ai acquis des compétences en codage dans divers langages informatiques et en conception de systèmes 
       d'information. J'ai une expérience solide dans l'analyse de données et le développement de solutions d'IA, ainsi qu'une capacité à collaborer efficacement avec 
       des équipes interdisciplinaires.
          `,
            links: [
                "linkedin.com/in/amine-hmidani-filali-20083723a",

            ],
        },
        education: [
            {
                diploma: "Master MQL",
                organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
                year: 2025,
            },
            {
                diploma: "Licence Professionnelle - Intelligence Artificielle et sciences des données",
                organisation: "EST Meknès - Université Moulay Ismail  - Meknès",
                year: 2023,
            },
            {
                diploma: "Diplôme Universitaire de Technologie - Génie Logiciel",
                organisation: "EST Meknès - Université Moulay Ismail  - Meknès",
                year: 2022,
            },
            {
                diploma: "Baccalauréat Science Mathématique option A",
                organisation: "Lycée Marjiaa - Meknès",
                year: 2019,
            },
        ],
        technologySkills: [
            {
                skill: "Jakarta EE",
                details: [
                    "Architecture 3 tiers",
                    "Modèle MVC2",
                    "Servlets et JSP",
                    "modèle DAO",
                    "JPA",
                    "Hibernate",
                    "Spring - Spring boot"
                ],
            },
            {
                skill: "Ingénierie du Web",
                details: ["HTML", "CSS", "JavaScript", "Node.js", "React", "PHP", "Vuejs"],
            },
            {
                skill: "Analyse et conception",
                details: ["UML", "MERISE", "Design Patterns"]
            },

            {
                skill: "Ingénierie DevOps",
                details: ["Maven", "Jira", "Git", "GitHub", "GitLab", "JUnit"],
            },
            {
                skill: "Web Services",
                details: ["REST"]
            },
            {
                skill: "Technologies XML",
                details: ["Standard XML", "Bases de données XML", "Parseurs XML (DOM, SAX)",
                    "DTD", "XSD (XML Schema)", "XSLT", "XPath", "XQuery"]
            },
            {
                skill: "Data Science",
                details: [
                    "Analyse de données - visualisation de données",
                    "Machine Learning - Deep Learning",
                    "Modélisation des séries temporelles",
                    "Traitement du langage naturel (NLP)",
                    "AutoML",
                    "Python",
                    "TensorFlow",
                    "Keras"
                ],
            },
        ],
        experiences: [
            {
                type: "Stage",
                organisation: "3D Smart Factory",
                title: "Amélioration d'une platforme de recrutement avec NLP et technologies web",
                technologies: ["Django REST framework", "NextJs", "SpaCy", "tensorflow"],
                year: 2023,
                duration: "2 mois",
            },
            {
                type: "Stage",
                organisation: "CloudLink",
                title: "Création d'une application web streaming de musique pour augmenter la popularité des artistes.",
                technologies: ["HTML", "CSS", "JavaScript", "Php", "laravel", "VueJS"],
                year: 2022,
                duration: "2 mois",
            },
            {
                type: "Stage",
                organisation: "INFO-MARKET",
                title: "Développement d'une application web de gestion des ordres de réparation, enregistrant les informations et générant des rapports détaillés avec reçu pour les clients.",
                technologies: ["HTML", "CSS", "JavaScript", "Php", "ajax", "Jquery"],
                year: 2021,
                duration: "1 mois",
            },
        ],
        softSkills: ["Esprit d'équipe", "Créativité", "Analyse", "Rigueur"],
        languages: [
            {
                language: "Français",
                level: "B2", // voir le "Common European Framework of Reference for Languages" (CEFR)
                certification: "",
                experience: "",
            },
            {
                language: "Anglais",
                level: "B2",
                certification: "",
                experience: "",
            },
        ],
        interests: ["BasketBall", "Voyage", "Jeux Vidéo", "Jeux d'échecs"],
    },
    {
        "profile": {
            "photo": "resources/El Maalmi Ayoub.png",
            "firstName": "Ayoub",
            "lastName": "El Maalmi",
            "birthday": {
                "day": 6,
                "month": 7,
                "year": 2001
            },
            "phone": "+212 616242462",
            "email": "elmaalmiayoub@gmail.com",
            "address": "Meknes, Maroc",
            "professionalSummary": "En tant que jeune Marocain passionné par l'informatique, j'ai décidé d'en faire ma profession. J'espère ainsi acquérir une expérience solide et constructive qui me permettra de me démarquer sur le marché du travail.",
            "links": [
                "https://www.linkedin.com/in/ayoub-el-maalmi-8b274a1a1/",
                "https://github.com/ELMAALMIA"
            ]
        },
        "education": [
            {
                "diploma": "Master MQL",
                "organisation": "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
                "year": 2025
            },
            {
                "diploma": "Licence Professionnelle Développement des Systems d'information et de communication",
                "organisation": "ESTM - Université Moulay Ismaïl - Méknès",
                "year": 2023
            },
            {
                "diploma": "Diplôme universitaire de Technologie en Génie informatique",
                "organisation": "ESTM - Université Moulay Ismaïl - Méknès",
                "year": 2022
            },
            {
                "diploma": "Baccalauréat en sciences physiques et chimiques",
                "organisation": "Lycée Zitoune, Meknes",
                "year": 2019
            }
        ],
        "technologySkills": [
            {
                "skill": "Jakarta Enterprise Edition (JEE)",
                "details": [
                    "Architecture 3 tiers",
                    "Modèle MVC2",
                    "Servlets et JSP",
                    "Modèle DAO",
                    "Framework Spring / Spring Boot",
                    "JPA",
                    "Hibernate",
                    "Administration Tomcat"
                ]
            },
            {
                "skill": "Ingénierie du Web",
                "details": [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Node.js",
                    "React",
                    "Angular"
                ]
            },
            {
                "skill": "Ingénierie DevOps",
                "details": [
                    "Maven",
                    "Git",
                    "GitHub",
                    "GitLab",
                    "Jira",
                    "Jenkins",
                    "JUnit",
                    "Ant"
                ]
            },
            {
                "skill": "Technologie XML",
                "details": [
                    "Standard XML",
                    "Bases de données XML",
                    "Parseurs XML (DOM, SAX)",
                    "DTD",
                    "XSD (XML Schema)",
                    "XSLT",
                    "XPath",
                    "XQuery"
                ]
            },
            {
                "skill": "Gestion des bases de données",
                "details": [
                    "MySQL",
                    "Oracle",
                    "MongoDB",
                    "PostgreSQL"
                ]
            }
        ],
        "experiences": [
            {
                "type": "Stage",
                "organisation": "Okayenergy - MEKNES, Maroc",
                "title": "Au sein de ma Licence professionnelle, j'ai développé une application de gestion de budget chez Okayenergy.J'ai conçu l'interface utilisateur avec React et Redux et développé le backend avec Spring Boot, renforçant ainsi l'architecture et la sécurité du système",
                "technologies": [
                    "React",
                    "Redux",
                    "Spring Boot"
                ],
                "year": 2023,
                "duration": "2 mois"
            },
            {
                "type": "Projet",
                "organisation": "My-Pharma",
                "title": "MY-PHARMA @ Java + JavaFX :\n My-pharma est une application desktop en Java et JavaFX dédiée à la gestion de pharmacie. Elle permet aux utilisateurs de gérer les médicaments, les stocks et les factures en toute simplicité. Grâce à ma-pharma, les pharmaciens sont en mesure de gérer efficacement leurs stocks, de suivre les ventes et de générer des factures en quelques clics.",
                "technologies": [
                    "Java",
                    "JavaFX"
                ],
                "year": 2023,
                "duration": "2 mois"
            },
            {
                "type": "Stage",
                "organisation": "2R FLÈCHE - MEKNÈS, Maroc",
                "title": "Lors de mon stage chez 2R FLÈCHE, j'ai amélioré la gestion du temps et augmenté les commandes avec JavaScript, PHP, Laravel, Bootstrap, et Vue.js. Cette expérience a renforcé ma capacité à gérer des projets complexes et à maîtriser plusieurs technologies web",
                "technologies": [
                    "JavaScript",
                    "PHP",
                    "Laravel",
                    "Bootstrap",
                    "Vue.js"
                ],
                "year": 2022,
                "duration": "3 mois"
            },
            {
                "type": "Projet",
                "organisation": "E-Supply-Online",
                "title": "E-Supply-Online @ Laravel + JS/JQUERY \n E-supply est une plateforme pour gérer le Marché public en utilisant des langages HTML, CSS, PHP, JS/JQUERY et des Framework Bootstrap et Laravel.",
                "technologies": [
                    "Laravel",
                    "JS",
                    "JQUERY"
                ],
                "year": 2022,
                "duration": "4 mois"
            },
            {
                "type": "Stage",
                "organisation": "DPA - MEKNÈS, Maroc",
                "title": "Gestion des dossiers, notation du courrier dans les carnets d'arrivée ou de départ, et développement d'une application de gestion de congé en PHP/Laravel.",
                "technologies": [
                    "PHP",
                    "Laravel",
                    "HTML/CSS",
                    "Bootstrap"
                ],
                "year": 2020,
                "duration": "1 mois"
            }
        ],
        "softSkills": [
            "Esprit d'équipe",
            "Intelligence Emotionnelle",
            "Empathie et Écoute",
            "Créativité",
            "Gestion du Temps",
            "Gestion du Stress",
            "Présence"
        ],
        "languages": [
            {
                "language": "Français",
                "level": "B2",
                "certification": "DELF",
                "experience": "courant"
            },
            {
                "language": "Anglais",
                "level": "",
                "certification": "",
                "experience": "courant"
            },
            {
                "language": "Arabe",
                "level": "",
                "certification": "",
                "experience": "Langue maternelle"
            }
        ],
        "interests": [
            "Échecs",
            "Écriture",
            "Football"
        ]
    },
    {
        profile: {
            photo: "resources/photo-mehdi.png",
            firstName: "El Mehdi ",
            lastName: "Amarti Riffi",
            birthday: {
                day: 12,
                month: 1,
                year: 2002
            },
            phone: "0772587266",
            email: "mehdiamarti33@gmail.com",
            address: "12 LOTS SALMA APPT 12 RTE AIN CHKEF FES",
            professionalSummary: `Étudiant en première année Master Qualité du Logiciel (MQL), je suis à la recherche d'un stage dans le domaine du développement logiciel pour mettre en pratique mes compétences.
        `,
            links: ["https://github.com/mehdiI2002", "https://www.linkedin.com/in/el-mehdi-amarti-riffi"]
        },
        education: [
            {
                diploma: "Master qualité du logiciel (MQL)",
                organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
                year: 2025
            },
            {
                diploma: "Licence Fondamentale en Sciences Mathématiques et Informatique",
                organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
                year: 2023
            },
            {
                diploma: "DEUG en Sciences Mathématiques et Informatique",
                organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
                year: 2022
            },
            {
                diploma: "Baccalauréat International en Sciences Mathématiques option B",
                organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
                year: 2019
            }
        ],
        technologySkills: [
            {
                skill: "Jakarta Entreprise Edition (JEE)",
                details: ["Architecture 3 tiers", "Modèle MVC2", "Servlets et JSP",
                    "modèle DAO", "Framework Spring / Spring Boot", "JPA", "Hibernate",
                    "Administration Tomcat"
                ]
            },
            {
                skill: "Ingénierie du Web",
                details: ["HTML", "CSS", "PHP", "JavaScript", "Node.js", "React", "Angular"]
            },

            {
                skill: "Ingénierie DevOps",
                details: ["Jira", "Maven", "Git", "GitHub", "GitLab", "Jenkins", "JUnit", "Selenuim"]
            },
            {
                skill: "Technologie XML",
                details: ["Standard XML", "Bases de données XML", "Parseurs XML (DOM, SAX)",
                    "DTD", "XSD (XML Schema)", "XSLT", "XPath", "XQuery"]
            },
            {
                skill: "Conception et modélisation",
                details: ["UML", "Merise"]
            },
            {
                skill: "Bases de données",
                details: ["MySQL", "Oracle"]
            }


        ],
        experiences: [
            {
                type: "Projet",
                organisation: "FSDM",
                title: " Réalisation Application gestion des étudiants",
                technologies: ["Java", "Java swing", "DOM"],
                year: 2024,
                duration: "1 mois"
            },
            {
                type: "Projet",
                organisation: "FSDM",
                title: "Application de génération de diagrammes de classe et de packages avec Java",
                technologies: ["Java", "Java swing", "DOM"],
                year: 2024,
                duration: "1 mois"
            }
        ],
        softSkills: ["Communication", "Esprit d'équipe",
            "Créativité"

        ],
        languages: [
            {
                language: "Français",
                level: "Bonne maîtrise",
                certification: "DELF|DALF|TCF|TEF",
                experience: ""
            },
            {
                language: "Anglais",
                level: "Niveau moyen",
                certification: "TOEFL|TOEIC|...",
                experience: ""
            }
        ],
        interests: ["Kick boxing", "échecs"]
    },
    {
        "profile": {
            "photo": "resources/Marouane.jpeg",
            "firstName": "Marouane",
            "lastName": "ElGhayate",
            "birthday": {
                "day": 19,
                "month": 12,
                "year": 2000
            },
            "phone": "0648437955",
            "email": "elghayate28@gmail.com",
            "address": "Fès, Maroc",
            "professionalSummary": "Actuellement inscrit dans le programme de Master Qualite du Logiciel (MQL) à la faculté des sciences Dhar El Mahraz je suis à la recherche d'un stage PFE. Ayant des bonnes connaissances sur les architectures logicielles et les nouvelles technologies informatique, en l'occurence Jakarta EE, Spring Boot et React. En tant que développeur Java, ma mission consiste de la conception et l'implémentation des solutions logicielles de haute qualité qui répondent aux besoins des entreprises et des utilisateurs. J'aspire à améliorer constamment mes compétences et mes connaissances, et à collaborer efficacement avec mon équipe et les parties prenantes afin de fournir de la valeur.",
            "links": [
                "https://www.linkedin.com/in/marouane-elghayate-42b116172/",
                "https://github.com/marouaneelghayate/"
            ]
        },
        "education": [
            {
                "diploma": "Master Specialise en Qualite du Logiciel MQL",
                "organisation": "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
                "year": 2023
            },
            {
                "diploma": "Licence en sciences mathématiques et informatiques SMI",
                "organisation": "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
                "year": 2023
            },
            {
                "diploma": "DEUG en sciences mathématiques et informatiques SMI",
                "organisation": "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
                "year": 2022
            }
        ],
        "technologySkills": [
            {
                "skill": "Jakarta Entreprise Edition (JEE)",
                "details": [
                    "Architecture 3 tiers",
                    "Modèle MVC2",
                    "Servlets et JSP",
                    "modèle DAO",
                    "Framework Spring / Spring Boot",
                    "JPA",
                    "Hibernate",
                    "Administration Tomcat"
                ]
            },
            {
                "skill": "Ingénierie du Web",
                "details": [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Node.js",
                    "React"
                ]
            },
            {
                "skill": "Ingénierie DevOps",
                "details": [
                    "Maven",
                    "Git",
                    "GitHub",
                    "GitLab",
                    "Jira",
                    "Jenkins",
                    "JUnit",
                    "Selenuim",
                    "JMeter",
                    "Gitlab CI",
                    "Docker"
                ]
            },
            {
                "skill": "Technologie XML",
                "details": [
                    "Standard XML",
                    "Bases de données XML",
                    "Parseurs XML (DOM, SAX)",
                    "DTD",
                    "XSD (XML Schema)",
                    "XSLT",
                    "XPath",
                    "XQuery"
                ]
            }
        ],
        "experiences": [
            {
                "type": "Projet",
                "organisation": "FSDM",
                "title": "générateur de diagrammes UML",
                "technologies": [
                    "Java",
                    "Swing",
                    "DOM",
                    "SAX"
                ],
                "year": 2023,
                "duration": "1 mois"
            },
            {
                "type": "Projet",
                "organisation": "FSDM",
                "title": "Réalisation d'une application de Gestion de CVs",
                "technologies": [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Json"
                ],
                "year": 2023,
                "duration": "1 mois"
            }
        ],
        "softSkills": [
            "Communication",
            "Esprit d'équipe",
            "Intelligence Emotionnelle",
            "Empatie et Ecoute",
            "Créativité",
            "Capacité de Résolution de problèmes",
            "Adaptabilité",
            "Gestion du Temps",
            "Rigueur",
            "Organisation",
            "Gestion du Stress",
            "Présence"
        ],
        "languages": [
            {
                "language": "Français",
                "level": "bonne maîtrise",
                "certification": "DELF|DALF|TCF|TEF",
                "experience": ""
            },
            {
                "language": "Anglais",
                "level": "courant",
                "certification": "TOEFL|TOEIC|...",
                "experience": ""
            },
            {
                "language": "arabe",
                "level": "Langue Maternelle",
                "certification": "TOEFL|TOEIC|...",
                "experience": ""
            }
        ],
        "interests": [
            "jouer au échecs",
            "faire du sport",
            "Programmation"
        ]
    },
    {
        profile: {
            photo: "resources/Abdelhamid_Fadel.png",
            firstName: "Abdelhamid",
            lastName: "Fadel",
            birthday: {
                day: 29,
                month: 11,
                year: 2000
            },
            phone: "+212767347766",
            email: "fadelabdelhamid1@gmail.com",
            address: "El Jadida, Maroc",
            professionalSummary: `
                            Étudiant passionné en ingénierie logicielle
                            à la recherche d’opportunités pour acquérir
                            de nouvelles compétences et appliquer mes
                            connaissances en programmation.
                            Je possède de solides compétences techniques
                            dans les langages de programmation tels que
                            Java, JavaScript et C. Maîtrise des technologies
                            Web telles que Java Enterprise Edition(JEE) et
                            Node.js. Je recherche un environnement de travail
                            stimulant où je peux apprendre, évoluer et
                            contribuer à des projets de développement de
                            logiciels passionnants.
                            `,
            links: ["https://www.linkedin.com/in/fadelabdelhamid/", "https://twitter.com/a_fadel_dev/"]
        },
        education: [
            {
                diploma: "Master Qualité du Logiciel (MQL)",
                organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
                year: 2025
            },
            {
                diploma: "Licence Professionnelle - Ingénierie des Systèmes d’information et Réseaux",
                organisation: "EST Safi - Université Cadi Ayyad - Safi",
                year: 2021
            },
            {
                diploma: "Diplôme Universitaire de Technologie - Génie Informatique",
                organisation: "EST Safi - Université Cadi Ayyad - Safi",
                year: 2020
            },
            {
                diploma: "Baccalauréat",
                organisation: "Lycée Abou Chouaib Doukkali - El Jadida",
                year: 2018
            }
        ],
        technologySkills: [
            {
                skill: "Jakarta Entreprise Edition (JEE)",
                details: ["Architecture 3 tiers", "Modèle MVC2", "Servlets et JSP",
                    "modèle DAO", "Framework Spring / Spring Boot", "JPA", "Hibernate",
                    "Administration Tomcat"
                ]
            },
            {
                skill: "Ingénierie du Web",
                details: ["HTML", "CSS", "JavaScript", "Node.js", "React", "Express.js", "PHP"]
            },

            {
                skill: "Ingénierie DevOps",
                details: ["Maven", "Git", "GitHub", "GitLab", "Jira", "JUnit"]
            },
            {
                skill: "Bases de données",
                details: ["MySQL", "PostgreSQL", "MongoDB", "Oracle Database"]
            },
            {
                skill: "Analyse et conception",
                details: ["UML", "MERISE", "Design Patterns"]
            },
            {
                skill: "Web Services",
                details: ["REST", "SOAP"]
            },
            {
                skill: "Technologies XML",
                details: ["Standard XML", "Bases de données XML", "Parseurs XML (DOM, SAX)",
                    "DTD", "XSD (XML Schema)", "XSLT", "XPath", "XQuery"]
            }
        ],
        experiences: [
            {
                type: "Stage",
                organisation: "Laboratoire LAPSSI ESTS - Safi",
                title: "Estimation des mesures du corps humain à partir d’images, en utilisant des techniques de Computer vision",
                technologies: ["Python", "Tensoflow", "Keras"],
                year: 2021,
                duration: "2 mois"
            },
            {
                type: "Stage",
                organisation: "Laboratoire LAPSSI ESTS - Safi",
                title: "Détection des maladies des plantes à partir des images en utilisant des techniques de Computer vision",
                technologies: ["Python", "Tensoflow", "Keras"],
                year: 2020,
                duration: "2 mois"
            },
            {
                type: "Stage",
                organisation: "OCP Jorf Lasfar",
                title: "Développement d’une application web, pour la gestion des réparations du matériel",
                technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
                year: 2019,
                duration: "2 mois"
            }
        ],
        softSkills: [
            "Créativité", "Curiosité", "Flexibilité", "Autonomie", "Adaptabilité",
            "Sens du détail", "Bonne communication", "Gestion de l’information"
        ],
        languages: [
            {
                language: "Français",
                level: "B2",
                certification: "TCF",
                experience: ""
            },
            {
                language: "Anglais",
                level: "C1",
                certification: "",
                experience: ""
            },
            {
                language: "Arabe",
                level: "Langue maternelle",
                certification: "",
                experience: ""
            }
        ],
        interests: ["Jeux d'échecs", "Jeux vidéo", "Formula 1", "Volleyball"]
    }
]


const cv = {
    profile: {
        photo: "",
        firstName: "",
        lastName: "",
        birthday: {
            day: 0,
            month: 0,
            year: 0
        },
        phone: "",
        email: "",
        address: "",
        professionalSummary: ``
        ,
        links: [],
    },
    education: [],
    technologySkills: [],
    experiences: [],
    softSkills: [],
    languages: [],
    interests: []
}