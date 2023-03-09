let containerEl = document.querySelector(".container")
let headerEl = document.querySelector("header")
fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        headerEl.innerHTML += `
            <h1>${data.squadName}</h1>
            <h2>Hometown: ${data.homeTown} // formed: ${data.formed}</h2>`;
        for (i = 0; i < data.members.length; i++) {
            const divEl = document.createElement("div");
            containerEl.appendChild(divEl);
            divEl.innerHTML += `
            <h3>${data.members[i].name}</h3>
            <p>Secret identity: ${data.members[i].secretIdentity}</p>
            <p>Age: ${data.members[i].age}</p>`;
            const ulEl = document.createElement("ul");
            ulEl.classList.add("liste" + i);
            ulEl.innerHTML += "Superpowers :";
            divEl.appendChild(ulEl);
            for (j = 0; j < data.members[i].powers.length; j++) {
                const liEl = document.createElement("li");
                let listeEl = document.querySelector(".liste" + i);
                liEl.textContent = `${data.members[i].powers[j]}`;
                listeEl.appendChild(liEl);
            }
        }
    });




