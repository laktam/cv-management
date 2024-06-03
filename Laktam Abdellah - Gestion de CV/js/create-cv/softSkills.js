function createSoftSkillsDiv() {
    const softSkillsDiv = createDiv_id_content('create_cv_softSkills');
    const softSkillsTitle = document.createElement('h3');
    softSkillsTitle.innerText = 'Soft Skills';
    softSkillsTitle.id = 'softSkills_title';
    softSkillsDiv.appendChild(softSkillsTitle);

    const skill = createLabeledInput('softSkills', 'softSkills', 'serapated by ","');
    const button = document.createElement('button');
    button.innerText = 'Add Soft Skills';
    button.id = 'softSkills_button'
    button.addEventListener('click', addSoftSkills);
    softSkillsDiv.append(skill, button);

    return softSkillsDiv;
}

function addSoftSkills() {
    const softSkills = document.getElementById('softSkills').value;
    let softSkillsList = softSkills.split(',')
    softSkillsList = softSkillsList.map(item => item.trim())
    cv.softSkills = softSkillsList

    const added_SoftSkills = document.createElement('div');
    added_SoftSkills.innerHTML = `
        <div>${softSkills}</div>
    `;
    document.getElementById('softSkills_title').after(added_SoftSkills);
    console.log(cv)

    // document.getElementById('softSkills').value = '';
    document.getElementById('softSkills').remove();
    document.getElementById('create_cv_softSkills').querySelector('label').remove()
    document.getElementById('softSkills_button').remove()

}
