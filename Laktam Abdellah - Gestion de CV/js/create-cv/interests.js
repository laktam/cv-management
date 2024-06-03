function createInterestsDiv() {
    const interestsDiv = createDiv_id_content('create_cv_interests');
    const interestsTitle = document.createElement('h3');
    interestsTitle.innerText = 'Interests';
    interestsTitle.id = 'interests_title';
    interestsDiv.appendChild(interestsTitle);

    const interest = createLabeledInput('interests', 'interests', 'separated by ","');
    const button = document.createElement('button');
    button.innerText = 'Add Interests';
    button.id = "interests_button";
    button.addEventListener('click', addInterests);
    interestsDiv.append(interest, button);

    return interestsDiv;
}

function addInterests() {
    const interests = document.getElementById('interests').value;
    let interestsList = interests.split(',')
    interestsList = interestsList.map(item => item.trim())
    cv.interests = interestsList;

    const added_Interests = document.createElement('div');
    added_Interests.innerHTML = `
        <div>${interests}</div>
    `;
    document.getElementById('interests_title').after(added_Interests);
    console.log(cv)

    // document.getElementById('interests').value = '';
    document.getElementById('interests').remove()
    document.getElementById('create_cv_interests').querySelector('label').remove()
    document.getElementById('interests_button').remove()
}
