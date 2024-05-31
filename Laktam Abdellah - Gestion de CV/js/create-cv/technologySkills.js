function createTechnologySkillsDiv() {
    const technologySkillsDiv = createDiv_id_content('create_cv_technologySkills');
    const technologySkills_title = document.createElement('h2');
    technologySkills_title.innerText = 'Competences';
    technologySkills_title.id = 'technologySkills_title';
    technologySkillsDiv.appendChild(technologySkills_title);
    // technologies form
    const skill = createLabeledInput('skill', 'skill')
    const details = createLabeledTextArea('details', 'details', 'separaged by ","'); // they should be entred separated by ,
    const button = document.createElement('button')
    button.innerText = 'ajouter Competence'
    button.addEventListener('click', addTechnologySkill)
    technologySkillsDiv.append(skill, details, button)
    return technologySkillsDiv
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