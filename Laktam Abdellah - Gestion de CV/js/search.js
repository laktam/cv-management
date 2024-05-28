let databaseStrings = []
for (let cv of database) {
    databaseStrings.push(JSON.stringify(cv))
}

function search() {
    clean();
    const input = document.getElementById("searchInput")
    if (input.value != "") {
        let results = searchDatabase(input.value)
        for (let result of results) {
            console.log(database[result].profile.firstName)
        }
        displayResults(results)
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

function displayResults(results) {
    const container = document.createElement("div")
    document.body.appendChild(container)
    for (let result of results) {
        let s = `
        <img src="${database[result].profile.photo}"/>
        <div id="result_name">${database[result].profile.firstName} ${database[result].profile.lastName}
        </div>
        `
        const div = document.createElement("div")
        div.innerHTML = s
        div.className = "search_result"
        container.appendChild(div)
    }
}

