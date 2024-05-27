
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
}


function main() {
    createSidebar(cv.profile, cv.languages, cv.softSkills)
    createContent(cv.profile.professionalSummary, cv.education, cv.technologySkills, cv.experiences)
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

function createContent(professionalSummary, education, technologySkills, experiences) {
    //professionalSummary
    const professionalSummaryDiv = document.getElementById("professionalSummary")
    professionalSummaryDiv.textContent = professionalSummary
    //educations
    const educationsDiv = document.getElementById("educations")
    for (let ed of education) {
        const educationDiv = createEducation(ed)
        educationsDiv.appendChild(educationDiv)
    }
    // technologySkills
    const technologySkillsDiv = document.getElementById("technologySkills")
    for (let skill of technologySkills) {
        const skillDiv = createSkill(skill)
        technologySkillsDiv.appendChild(skillDiv)
    }
    // experiences
    const experiencesDiv = document.getElementById("experiences")
    const projectsDiv = document.getElementById("projects")
    for (let experience of experiences) {
        if (experience.type == "Stage") {
            const experienceDiv = createExperience(experience)
            projectsDiv.before(experienceDiv)
        } else if (experience.type == "Projet") {
            const projectDiv = createPorject(experience)
            projectsDiv.appendChild(projectDiv)
        }
    }
}

function createPorject(project) {
    const div = createDiv_class_content("project")

    //
    let technologies = ""
    for (let i = 0; i < project.technologies.length; i++) {
        technologies += project.technologies[i]
        if (i != project.technologies.length - 1) {
            technologies += ", "
        }
    }
    // for (let technologie of project.technologies) {
    //     technologies += technologie
    //     technologies += " "
    // }
    const technologiesDiv = createDiv_class_content("", technologies)
    //
    const time = " (" + project.duration + ", " + project.year + ")"
    // const timeDiv = createDiv_class_content("", time)
    const projectDiv = createDiv_class_content("", project.title + " " + time)
    div.append(projectDiv, technologiesDiv)
    return div
}

function createExperience(experience) {
    const div = createDiv_class_content("experience")
    // organisation = type + org + (duree, year)
    // org = org  + place
    const organisation = experience.type + " à " + experience.organisation + " (" + experience.duration + ", " + experience.year + ")"
    const organisationDiv = createDiv_class_content("organisation", organisation)
    const projectDiv = createDiv_class_content("project_title", experience.title)
    let technologies = ""

    for (let i = 0; i < experience.technologies.length; i++) {
        technologies += experience.technologies[i]
        if (i != experience.technologies.length - 1) {
            technologies += ", "
        }
    }
    // for (let technologie of experience.technologies) {
    //     technologies += technologie
    //     technologies += " "
    // }
    const technologiesDiv = createDiv_class_content("technologies", technologies)
    div.append(organisationDiv, projectDiv, technologiesDiv)
    return div
}

function createSkill(skill) {
    const div = createDiv_class_content("skill")
    const skill_title = createDiv_class_content("skill_title", skill.skill)
    let details = ""
    for (let i = 0; i < skill.details.length; i++) {
        details += skill.details[i]
        if (i != skill.details.length - 1) {
            details += ", "
        }
    }
    // for (let detail of skill.details) {
    //     details += detail
    //     details += " "
    // }
    const detailsDiv = createDiv_class_content("details", details)
    div.append(skill_title, detailsDiv)
    return div

}

function createEducation(education) {
    const div = document.createElement("div")
    div.className = "education"
    diploma = createDiv_class_content("diploma", education.diploma)
    organisation = createDiv_class_content("", education.organisation)
    year = createDiv_class_content("diploma_year", education.year)
    div.append(diploma, organisation, year)
    return div
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





