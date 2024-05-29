

function createCV() {
    // cleaning page
    deleteCVs();
    deleteOldSearchResults();
    document.getElementById("searchInput").value = '';

    //


    const root = createDiv_id_content('create_cv')

    const education = addEducationDiv();
    const experience = addExperiencesDiv();
    root.append(education, experience);


    document.body.appendChild(root)
    // add save button

}

function addEducationDiv() {
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
    button.innerText = 'Add education'
    button.addEventListener('click', addEducation)

    educationsDiv.append(diplomaInput, organisationInput, yearInput, button)
    return educationsDiv
}

function addExperiencesDiv() {
    // experiences
    const experiences = createDiv_id_content('create_cv_experiences')
    const experiences_title = document.createElement('h2')
    experiences_title.textContent = 'Experience'
    experiences_title.id = 'experiences_title'
    experiences.appendChild(experiences_title)


    return experiences

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

function createLabeledInput(label_text, input_id) {
    const div = document.createElement('div');
    const label = document.createElement('label');
    label.innerText = label_text;
    const input = document.createElement('input');
    input.id = input_id;
    div.append(label, input);
    return div
}