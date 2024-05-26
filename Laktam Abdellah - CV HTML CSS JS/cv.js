let cv = {
    profile : {
		photo: "/photos/p01.png",
		firstName: "Prénom",
		lastName: "Nom",
		birthday: {
            day: 0,
            month: 0,
            year: 0
        },
		phone: "N° de téléphone",
		email: "",
        address: "",
        professionalSummary: `Ingénieur en informatique avec une bonne expérience 
            sur les architectures logicielles et les nouvelles technologies informatique, 
            en l'occurence Jakarta EE, Spring Boot, React et Angular. 
            Expérimenté dans la gestion de projets agiles, planification, exécution et coordination des tâches 
            avec des équipes multifonctionnelles. Disposant des compétences requises en communication et 
            en résolution de problèmes avec un esprit ouvert en collaboration efficace avec les parties prenantes 
            et les membres de l'équipe.
        `,
        links: ["", "", ""]
    },
	education: [
		{
			diploma: "Master MQL",
			organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
			year: 2022
        },
        {

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
			details: ["HTML", "CSS", "JavaScript", "Node.js", "React", "Angular" ]
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
			organisation: "CGI - Fès",
			title: "",
			technologies: ["Spring Boot", "React", "Node.js"],
			year: 2023,
			duration: "4 mois"
        },
		{
			type: "Projet",
			organisation: "FSDM",
			title: "Réalisation d'une application de Gestion de CVs",
			technologies: ["HTML", "CSS", "JavaScript"],
			year: 2023,
			duration: "1 mois"
        }
    ],
    softSkills: ["Communication", "Esprit d'équipe", "Intelligence Emotionnelle", "Empatie et Ecoute", 
                    "Créativité", "Capacité de Résolution de problèmes", "Adaptabilité", "Gestion du Temps", 
                    "Rigueur", "Organisation", "Gestion du Stress", "Présence"
    ],
    languages: [
		{
            language: "Français",
            level: "A1|A2|B1|B2|C1|C2", // voir le "Common European Framework of Reference for Languages" (CEFR)
            certification: "DELF|DALF|TCF|TEF",
            experience: ""
        },
		{
            language: "Français",
            level: "A1|A2|B1|B2|C1|C2",
            certification: "TOEFL|TOEIC|...",
            experience: "" 
        }
	],
	interests: ["", "", ""]
}
