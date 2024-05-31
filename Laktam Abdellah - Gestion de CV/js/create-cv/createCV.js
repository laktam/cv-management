

function createCV() {
    if (document.getElementById('create_cv') == null) {
        // cleaning page
        deleteCVs();
        deleteOldSearchResults();
        document.getElementById("searchInput").value = '';

        //
        const root = createDiv_id_content('create_cv')
        const profile = createProfileDiv()
        const education = createEducationDiv();
        const technologySkills = createTechnologySkillsDiv();
        const experience = createExperiencesDiv();
        const languages = createLanguagesDiv();
        const interests = createInterestsDiv();
        const softSkills = createSoftSkillsDiv();

        const saveButton = document.createElement('button')
        saveButton.id = 'saveButton'
        saveButton.innerText = "Save"
        saveButton.addEventListener('click', saveCV);
        root.append(profile, languages, interests, softSkills, education, technologySkills, experience, saveButton);
        document.body.appendChild(root)
    }
}

function saveCV() {
    database.push(cv)
    const add_cv_div = document.getElementById('create_cv');
    add_cv_div.remove()
    // reset input
    createCV();
    // add new cv to string database
    databaseStrings.push(JSON.stringify(cv))
}






function createProfileDiv() {
    const profileDiv = createDiv_id_content('create_cv_profile');
    const profile_title = document.createElement('h2');
    profile_title.innerText = 'Profile';
    profile_title.id = 'profile_title';
    profileDiv.appendChild(profile_title);
    //
    const nom = createLabeledInput('nom', 'lastname')
    const prenom = createLabeledInput('prenom', 'firstname')
    const birthday = createLabeledInput('birthday', 'birthday', "dd/mm/yyyy") // dd/mm/yyyy
    const phone = createLabeledInput('phone', 'phone')
    const email = createLabeledInput('email', 'email')
    const address = createLabeledInput('address', 'address')
    const professionalSummary = createLabeledTextArea('professional summary', 'professionalSummary')
    const links = createLabeledTextArea('links', 'links', 'separaged by ","')
    const button = document.createElement('button')
    button.id = "profile_button"
    button.innerText = 'save profile info'
    button.addEventListener('click', addProfile)
    profileDiv.append(nom, prenom, birthday, phone, email, address, professionalSummary, links, button)
    return profileDiv
}

// add photo upload ??????????????
function addProfile() {
    // add education to cv object
    const lastName = document.getElementById('lastname').value
    const firstName = document.getElementById('firstname').value
    // birthday
    const birthday = document.getElementById('birthday').value // dd/mm/yyyy
    let birthdayList = birthday.split('/')
    let day = birthdayList[0]
    let month = birthdayList[1]
    let year = birthdayList[2]
    //
    const phone = document.getElementById('phone').value
    const email = document.getElementById('email').value
    const address = document.getElementById('address').value
    const professionalSummary = document.getElementById('professionalSummary').value
    const links = document.getElementById('links').value
    let linksList = links.split(",");


    let profile = {
        firstName,
        lastName,
        birthday: {
            day,
            month,
            year
        },
        phone,
        email,
        address,
        professionalSummary,
        links: linksList
    }

    cv.profile = profile;

    // display added skill
    const profile_text = document.createElement('div')
    profile_text.innerHTML = `
<div>${firstName} ${lastName}</div>
<div>${birthday}</div>
<div>${phone}</div>
<div>${email}</div>
<div>${address}</div>
<div>${professionalSummary}</div>
<div>${links}</div>
<br>
`
    // document.getElementById('create_cv_educations').appendChild(added_education)
    document.getElementById('profile_title').after(profile_text)
    console.log(cv)

    // remove inputs and labels
    document.getElementById('lastname').remove()
    document.getElementById('firstname').remove()
    document.getElementById('birthday').remove()
    document.getElementById('phone').remove()
    document.getElementById('email').remove()
    document.getElementById('address').remove()
    document.getElementById('professionalSummary').remove()
    document.getElementById('links').remove()
    const labels = document.getElementById('create_cv_profile').querySelectorAll('label')
    for (let label of labels) {
        label.remove()
    }

    //delete profile button
    document.getElementById("profile_button").remove()
}







function createLabeledInput(label_text, input_id, placeholder) {
    const div = document.createElement('div');
    const label = document.createElement('label');
    label.innerText = label_text;
    const input = document.createElement('input');
    if (placeholder != undefined) {
        input.placeholder = placeholder
    }

    input.id = input_id;
    div.append(label, input);
    return div
}

function createLabeledTextArea(label_text, input_id, placeholder) {
    const div = document.createElement('div');
    const label = document.createElement('label');
    label.innerText = label_text;
    const input = document.createElement('textarea');
    if (placeholder != undefined) {
        input.placeholder = placeholder
    }
    input.id = input_id;
    div.append(label, input);
    return div
}

function deleteCreateCVDiv() {
    if (document.getElementById('create_cv') != null) {
        document.getElementById('create_cv').remove()
    }
}