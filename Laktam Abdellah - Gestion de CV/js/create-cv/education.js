function createEducationDiv() {
    //educations
    const educationsDiv = createDiv_id_content('create_cv_educations')
    const educations_title = document.createElement('h3')
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
    `
    // document.getElementById('create_cv_educations').appendChild(added_education)
    document.getElementById('educations_title').after(added_education)
    console.log(cv)

    // reset input
    document.getElementById('diploma').value = '';
    document.getElementById('organisation').value = '';
    document.getElementById('diploma_year').value = '';
}