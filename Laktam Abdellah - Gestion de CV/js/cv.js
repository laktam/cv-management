// in other css files : 
// change container from id to class
// change container margin to 15
// add controllers css
// add bottom paddins in body to acount for controllers
// add buttons style

let current_cv = 0;

function changeCV(event) {
    if (event.keyCode == 39 && current_cv < (database.length - 1)) {
        current_cv++;
        clean();
        displayCV(database[current_cv])
    } else if (event.keyCode == 37 && current_cv > 0) {
        current_cv--;
        clean();
        displayCV(database[current_cv])
    } else if (event.keyCode == 38) {
        clean();
        current_cv = -1;
    }
}


function main() {
    console.log(database.length)
    const selectCV = document.getElementById("selectCV")
    const options = selectCV.options
    console.log(options.selectedIndex)
    if (options.selectedIndex == 0) {
        displayAll()
    } else {
        displayCV(database[current_cv])
    }
}

function onDisplayTypeChange() {
    const selectCV = document.getElementById("selectCV")
    const options = selectCV.options
    console.log(options.selectedIndex)
    if (options.selectedIndex == 0) {//show all
        displayAll()
        clearControllers()
    } else { // show one by one
        clean()
        displayCV(database[current_cv])
        addControllers()
    }
}

function clearControllers() {
    document.getElementById("controllers").remove()
}

function addControllers() {
    const controllersDiv = createDiv_id_content("controllers")
    // const controllersDiv = document.getElementById("controllers");
    const leftButton = document.createElement("button")
    leftButton.textContent = "previous"
    const centerButtonsDiv = document.createElement("div")
    const rightButton = document.createElement("button")
    rightButton.textContent = "next"
    const firstButton = document.createElement("button")
    firstButton.id = "firstButton"
    firstButton.textContent = "show first"
    const lastButton = document.createElement("button")
    lastButton.id = "lastButton"
    lastButton.textContent = "show last"
    centerButtonsDiv.append(firstButton, lastButton)
    controllersDiv.append(leftButton, centerButtonsDiv, rightButton)
    document.getElementById("search").before(controllersDiv)

    // eventhandling
    leftButton.addEventListener("click", () => {
        if (current_cv > 0) {
            current_cv--;
            clean();
            displayCV(database[current_cv])
        }
    })

    rightButton.addEventListener("click", () => {
        if (current_cv < (database.length - 1)) {
            current_cv++;
            clean();
            displayCV(database[current_cv])
        }
    })

    firstButton.addEventListener("click", () => {
        current_cv = 0;
        clean();
        displayCV(database[current_cv])
    })

    lastButton.addEventListener("click", () => {
        current_cv = database.length - 1;
        clean();
        displayCV(database[current_cv])
    })
}

function displayAll() {
    clean()
    for (let cv of database) {
        displayCV(cv)
    }
}

function displayCV(cv) {
    const container = createDiv_class_content("container")
    document.body.appendChild(container)
    createSidebar(cv.profile, cv.languages, cv.softSkills, container)
    createContent(cv.profile.professionalSummary, cv.education, cv.technologySkills, cv.experiences, container)
}

function clean() {
    const containers = document.querySelectorAll(".container")
    for (let container of containers) {
        container.remove()
    }
}

function createSidebar(profile, languages, softSkills, container) {
    //info div
    // const sidebar = document.getElementById("sidebar")
    const sidebar = createDiv_id_content("sidebar")
    container.appendChild(sidebar)
    const infoDiv = createDiv_id_content("info")
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
    // const contact_container = document.getElementById("contact_container")
    const contact_container = createDiv_id_content("contact_container")
    const phone = createDiv_id_content("phone", profile.phone)
    const email = createDiv_id_content("email", profile.email)
    const link = createDiv_id_content("link", profile.link)
    contact_container.append(phone, email, link)
    sidebar.appendChild(contact_container)
    // links
    for (let link of profile.links) {
        const div = createDiv_class_content("link", link)
        contact_container.appendChild(div)
    }
    // languages
    // const languagesDiv = document.getElementById("languages")
    const languagesDiv = createDiv_id_content("languages")
    sidebar.appendChild(languagesDiv)
    languagesDiv.appendChild(createDiv_class_content("sidebar_subtitle", "Langues"))
    for (let language of languages) {
        const div = document.createElement("div")
        div.textContent = language.language
        languagesDiv.appendChild(div)
    }
    // softskills
    // const softSkillsDiv = document.getElementById("softSkills")
    const softSkillsDiv = createDiv_id_content("softSkills")
    sidebar.appendChild(softSkillsDiv)
    softSkillsDiv.appendChild(createDiv_class_content("sidebar_subtitle", "Soft Skills :"))
    for (let softSkill of softSkills) {
        softSkillsDiv.appendChild(createDiv_class_content("soft_skill", softSkill))
    }

    //

}

function createContent(professionalSummary, education, technologySkills, experiences, container) {
    // content div
    const content_div = createDiv_id_content("content")
    container.appendChild(content_div)
    //professionalSummary
    // const professionalSummaryDiv = document.getElementById("professionalSummary")
    const professionalSummaryDiv = createDiv_id_content("professionalSummary", professionalSummary)
    content_div.appendChild(professionalSummaryDiv)
    //educations
    // const educationsDiv = document.getElementById("educations")
    const educationsDiv = createDiv_id_content("educations")
    content_div.appendChild(educationsDiv)
    const educationTitleDiv = createDiv_class_content("titre", "Education")
    educationsDiv.appendChild(educationTitleDiv)
    for (let ed of education) {
        const educationDiv = createEducation(ed)
        educationsDiv.appendChild(educationDiv)
    }
    // technologySkills
    // const technologySkillsDiv = document.getElementById("technologySkills")
    const technologySkillsDiv = createDiv_id_content("technologySkills")
    content_div.appendChild(technologySkillsDiv)
    const technologiesTitleDiv = createDiv_class_content("titre", "Competences")
    technologySkillsDiv.appendChild(technologiesTitleDiv)
    for (let skill of technologySkills) {
        const skillDiv = createSkill(skill)
        technologySkillsDiv.appendChild(skillDiv)
    }
    // experiences
    // const experiencesDiv = document.getElementById("experiences")
    const experiencesDiv = createDiv_id_content("experiences")
    content_div.appendChild(experiencesDiv)
    const experiencesTitleDiv = createDiv_class_content("titre", "Experience")
    experiencesDiv.prepend(experiencesTitleDiv)

    //projects
    // const projectsDiv = document.getElementById("projects")
    const projectsDiv = createDiv_id_content("projects")
    experiencesDiv.appendChild(projectsDiv)
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





