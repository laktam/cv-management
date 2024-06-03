function createExperiencesDiv() {
    // experiences
    const experiencesDiv = createDiv_id_content('create_cv_experiences')
    const experiences_title = document.createElement('h3')
    experiences_title.textContent = 'Experience'
    experiences_title.id = 'experiences_title'
    experiencesDiv.appendChild(experiences_title)
    // experiences form
    const type = createLabeledInput('type', 'type')
    const organisation = createLabeledInput('organisation', 'added_organisation')
    const title = createLabeledInput('title', 'title')
    const technologies = createLabeledTextArea('technologies', 'technologies', 'separaged by ","'); // they should be entred separated by ,
    const year = createLabeledInput('year', 'year')
    const duration = createLabeledInput('duration', 'duration')
    const button = document.createElement('button')
    button.innerText = 'ajouter experience'
    button.addEventListener('click', addExperience)

    experiencesDiv.append(type, organisation, title, technologies, year, duration, button);
    return experiencesDiv
}

function addExperience() {
    // add education to cv object
    const type = document.getElementById('type').value
    const organisation = document.getElementById('added_organisation').value
    const title = document.getElementById('title').value
    const technologies = document.getElementById('technologies').value
    const duration = document.getElementById('duration').value
    const year = document.getElementById('year').value

    // create technologies array
    let technologiesList = technologies.split(',')
    technologiesList = technologiesList.map(item => item.trim())

    cv.experiences.push({
        type,
        organisation,
        title,
        technologies: technologiesList,
        duration,
        year
    })

    // display added skill
    const added_Experience = document.createElement('div')
    added_Experience.innerHTML = `
    <div>${type} a ${organisation} (${duration}, ${year})</div>
    <div>${title}</div>
    <div>${technologiesList}</div>
`
    // document.getElementById('create_cv_educations').appendChild(added_education)
    document.getElementById('experiences_title').after(added_Experience)
    console.log(cv)

    // reset input
    document.getElementById('type').value = '';
    document.getElementById('added_organisation').value = '';
    document.getElementById('title').value = '';
    document.getElementById('technologies').value = '';
    document.getElementById('year').value = '';
    document.getElementById('duration').value = '';
}