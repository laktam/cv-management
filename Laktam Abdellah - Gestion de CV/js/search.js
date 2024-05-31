let databaseStrings = []
for (let cv of database) {
    databaseStrings.push(JSON.stringify(cv))
}

// search keywords individually if they all exist in the cv display it
function search() {
    deleteCVs();
    deleteOldSearchResults();
    deleteCreateCVDiv();
    const input = document.getElementById("searchInput")
    if (input.value != "") {

        let keywords = input.value.split(" ");
        let results = []
        // initialy search all database 
        // from second keyword search only on cvs that are found in last search and so one
        results = searchDatabase(keywords[0])
        if (keywords.length > 1) {
            for (let i = 1; i < keywords.length; i++) {
                // search next keyword in found result of last search
                results = searchSubDatabase(keywords[i], results)
            }
        }

        // for (let keyword of keywords) {
        //     results = results.concat(searchDatabase(keyword))
        // }
        // let results = searchDatabase(input.value)
        for (let result of results) {
            console.log(database[result].profile.firstName)
        }
        displayResults(results)
    } else {
        //display all
        onDisplayTypeChange()
    }

}

function deleteOldSearchResults() {
    const results_container = document.getElementById("resutls_container")
    if (results_container != null) {
        results_container.remove()
    }
}

function searchDatabase(keyword) {
    let results = [];
    for (let index in databaseStrings) {
        if (databaseStrings[index].toLowerCase().includes(keyword.toLowerCase())) {
            results.push(index)
            console.log(index)
        }
    }
    return results
}

function searchSubDatabase(keyword, indexes) {
    let results = [];
    for (let index of indexes) {
        if (databaseStrings[index].toLowerCase().includes(keyword.toLowerCase())) {
            results.push(index)
            console.log(index)
        }
    }
    return results
}

function displayResults(results) {
    const results_container = document.createElement("div")
    results_container.id = "resutls_container"
    document.body.appendChild(results_container)
    for (let result of results) {
        let s = `
        <img src="${database[result].profile.photo}" height="180"/>
        <div id="result_name">${database[result].profile.firstName} ${database[result].profile.lastName}
        </div>
        `
        const div = document.createElement("div")
        div.innerHTML = s
        div.className = "search_result"
        div.onclick = () => {
            deleteCVs()
            // deleteOldSearchResults()
            displayCV(database[result])
        }
        results_container.appendChild(div)
    }
}

