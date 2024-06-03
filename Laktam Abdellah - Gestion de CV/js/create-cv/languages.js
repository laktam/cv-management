function createLanguagesDiv() {
    const languagesDiv = createDiv_id_content('create_cv_languages');
    const languagesTitle = document.createElement('h3');
    languagesTitle.innerText = 'Languages';
    languagesTitle.id = 'languages_title';
    languagesDiv.appendChild(languagesTitle);

    const language = createLabeledInput('language', 'language');
    const level = createLabeledInput('level', 'level');
    const certification = createLabeledInput('certification', 'certification');
    const experience = createLabeledInput('experience', 'experience');
    const button = document.createElement('button');
    button.innerText = 'Add Language';
    button.addEventListener('click', addLanguage);
    languagesDiv.append(language, level, certification, experience, button);

    return languagesDiv;
}

function addLanguage() {
    const language = document.getElementById('language').value;
    const level = document.getElementById('level').value;
    const certification = document.getElementById('certification').value;
    const experience = document.getElementById('experience').value;

    cv.languages.push({
        language,
        level,
        certification,
        experience
    });

    const addedLanguage = document.createElement('div');
    addedLanguage.innerHTML = `
        <div>language: ${language}, level:${level},certification: ${certification},experience ${experience}</div>
    `;
    document.getElementById('languages_title').after(addedLanguage);
    console.log(cv)

    document.getElementById('language').value = '';
    document.getElementById('level').value = '';
    document.getElementById('certification').value = '';
    document.getElementById('experience').value = '';
}
