let current_cv = 0;
function changeCV(event) {
    if (event.keyCode == 39 && current_cv < (database.length - 1)) {
        current_cv++;
        displayCV(database[current_cv])
    } else if (event.keyCode == 37 && current_cv > 0) {
        current_cv--;
        displayCV(database[current_cv])
    }
}


function main() {
    console.log(database.length)
    displayCV(database[0])
}

function displayCV(cv) {
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
    const educationTitleDiv = createDiv_class_content("titre", "Education")
    educationsDiv.appendChild(educationTitleDiv)
    for (let ed of education) {
        const educationDiv = createEducation(ed)
        educationsDiv.appendChild(educationDiv)
    }
    // technologySkills
    const technologySkillsDiv = document.getElementById("technologySkills")
    const technologiesTitleDiv = createDiv_class_content("titre", "Competences")
    technologySkillsDiv.appendChild(technologiesTitleDiv)
    for (let skill of technologySkills) {
        const skillDiv = createSkill(skill)
        technologySkillsDiv.appendChild(skillDiv)
    }
    // experiences
    const experiencesDiv = document.getElementById("experiences")
    const experiencesTitleDiv = createDiv_class_content("titre", "Experience")
    experiencesDiv.appendChild(experiencesTitleDiv)
    //projects
    const projectsDiv = document.getElementById("projects")
    const projectsTitleDiv = createDiv_class_content("sub_title", "Projets")
    projectsDiv.appendChild(projectsTitleDiv)
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





