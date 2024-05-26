
let cv = {
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
        professionalSummary: `Ingénieur en informatique avec une bonne expérience 
            sur les architectures logicielles et les nouvelles technologies informatique, 
            en l'occurence Jakarta EE, Spring Boot, React et Angular. 
            Expérimenté dans la gestion de projets agiles, planification, exécution et coordination des tâches 
            avec des équipes multifonctionnelles. Disposant des compétences requises en communication et 
            en résolution de problèmes avec un esprit ouvert en collaboration efficace avec les parties prenantes 
            et les membres de l'équipe.
        `,
        links: ["github.com/laktam", "", ""],
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


function main() {
    createSidebar(cv.profile, cv.languages, cv.softSkills)

}









function createSidebar(profile, languages, softSkills) {
    //info div
    const sidebar = document.getElementById("sidebar")
    const infoDiv = document.createElement("div")
    const full_name = createDiv_id_content("full_name", profile.firstName + " " + profile.lastName)
    infoDiv.appendChild(full_name)

    const birthday = createDiv_id_content("birthday", profile.birthday.day + "/" + profile.birthday.month + "/" + profile.birthday.year)
    infoDiv.appendChild(birthday)
    //
    const address = createDiv_id_content("address", profile.address)
    infoDiv.appendChild(address)
    sidebar.prepend(infoDiv)
    // img
    const img = document.createElement("img")
    img.id = "photo"
    img.src = profile.photo
    img.height = 200
    sidebar.prepend(img)

    //contact_container
    const contact_container = document.getElementById("contact_container")
    const phone = createDiv_id_content("phone", profile.phone)
    const email = createDiv_id_content("email", profile.email)
    const link = createDiv_id_content("link", profile.link)
    contact_container.append(phone, email, link)
    // links
    for (let link of profile.links) {
        const div = createDiv_class_content("link", link)
        contact_container.appendChild(div)
    }
    // languages
    const languagesDiv = document.getElementById("languages")
    languagesDiv.appendChild(createDiv_class_content("sidebar_subtitle", "Langues"))
    for (let language of languages) {
        const div = document.createElement("div")
        div.textContent = language.language
        languagesDiv.appendChild(div)
    }
    // softskills
    const softSkillsDiv = document.getElementById("softSkills")
    softSkillsDiv.appendChild(createDiv_class_content("sidebar_subtitle", "Soft Skills :"))
    for (let softSkill of softSkills) {
        softSkillsDiv.appendChild(createDiv_class_content("soft_skill", softSkill))
    }

    //

}

function createDiv_id_content(id, content) {
    const div = document.createElement("div")
    div.id = id
    div.textContent = content
    return div
}

function createDiv_class_content(c, content) {
    const div = document.createElement("div")
    div.className = c
    div.textContent = content
    return div
}





