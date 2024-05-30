

function createCV() {
    // cleaning page
    deleteCVs();
    deleteOldSearchResults();
    document.getElementById("searchInput").value = '';

    //


    const root = createDiv_id_content('create_cv')

    const education = createEducationDiv();
    const technologySkills = createTechnologySkillsDiv();
    const experience = createExperiencesDiv();
    root.append(education, technologySkills, experience);


    document.body.appendChild(root)
    // add save button

}

function createEducationDiv() {
    //educations
    const educationsDiv = createDiv_id_content('create_cv_educations')
    const educations_title = document.createElement('h2')
    educations_title.textContent = 'Education (add from old to new)'         //  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! hint
    educations_title.id = 'educations_title'
    educationsDiv.appendChild(educations_title)
    // education form
    const diplomaInput = createLabeledInput('diploma', 'diploma')
    const organisationInput = createLabeledInput('organisation', 'organisation')
    const yearInput = createLabeledInput('year', 'diploma_year')
    const button = document.createElement('button')
    button.innerText = 'ajouter education'
    button.addEventListener('click', addEducation)

    educationsDiv.append(diplomaInput, organisationInput, yearInput, button)
    return educationsDiv
}

function createTechnologySkillsDiv() {
    const technologySkillsDiv = createDiv_id_content('create_cv_technologySkills');
    const technologySkills_title = document.createElement('h2');
    technologySkills_title.innerText = 'Competences';
    technologySkills_title.id = 'technologySkills_title';
    technologySkillsDiv.appendChild(technologySkills_title);
    // technologies form
    const skill = createLabeledInput('skill', 'skill')
    const details = createLabeledTextArea('details', 'details'); // they should be entred separated by ,
    const button = document.createElement('button')
    button.innerText = 'ajouter Competence'
    button.addEventListener('click', addTechnologySkill)
    technologySkillsDiv.append(skill, details, button)
    return technologySkillsDiv
}

function createExperiencesDiv() {
    // experiences
    const experiencesDiv = createDiv_id_content('create_cv_experiences')
    const experiences_title = document.createElement('h2')
    experiences_title.textContent = 'Experience'
    experiences_title.id = 'experiences_title'
    experiencesDiv.appendChild(experiences_title)
    // experiences form
    const type = createLabeledInput('type', 'type')
    const organisation = createLabeledInput('organisation', 'organisation')
    const title = createLabeledInput('title', 'title')
    const technologies = createLabeledTextArea('technologies', 'technologies'); // they should be entred separated by ,
    const year = createLabeledInput('year', 'year')
    const duration = createLabeledInput('duration', 'duration')
    const button = document.createElement('button')
    button.innerText = 'ajouter experience'
    button.addEventListener('click', addExperience)

    experiencesDiv.append(type, organisation, title, technologies, year, duration, button);
    return experiencesDiv
}

function addProfileForm() {

}

function addEducation() {
    // add education to cv object
    const diploma = document.getElementById('diploma').value
    const organisation = document.getElementById('organisation').value
    const year = document.getElementById('diploma_year').value
    cv.education.push({
        diploma,
        organisation,
        year
    })

    // display added education
    const added_education = document.createElement('div')
    added_education.innerHTML = `
    <div>${diploma}</div>
    <div>${organisation}</div>
    <div>${year}</div>
    <br>
    `
    // document.getElementById('create_cv_educations').appendChild(added_education)
    document.getElementById('educations_title').after(added_education)
    console.log(cv)

    // reset input
    document.getElementById('diploma').value = '';
    document.getElementById('organisation').value = '';
    document.getElementById('diploma_year').value = '';
}

function addTechnologySkill() {
    // add education to cv object
    const skill = document.getElementById('skill').value
    const details = document.getElementById('details').value
    // create details array
    let detailsList = details.split(',')
    detailsList = detailsList.map(item => item.trim())

    cv.technologySkills.push({
        skill,
        details: detailsList
    })

    // display added skill
    const added_skill = document.createElement('div')
    added_skill.innerHTML = `
    <div>${skill}</div>
    <div>${details}</div>
    <br>
`
    // document.getElementById('create_cv_educations').appendChild(added_education)
    document.getElementById('technologySkills_title').after(added_skill)
    console.log(cv)

    // reset input
    document.getElementById('skill').value = '';
    document.getElementById('details').value = '';
}


function createLabeledInput(label_text, input_id) {
    const div = document.createElement('div');
    const label = document.createElement('label');
    label.innerText = label_text;
    const input = document.createElement('input');
    input.id = input_id;
    div.append(label, input);
    return div
}

function createLabeledTextArea(label_text, input_id) {
    const div = document.createElement('div');
    const label = document.createElement('label');
    label.innerText = label_text;
    const input = document.createElement('textarea');
    input.id = input_id;
    div.append(label, input);
    return div
}