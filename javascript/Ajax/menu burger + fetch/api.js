/***************Méthode Ajax (méthode synchrone (utiliser JSON.parse et JSON.stringify dans l'autre sens)) ********/


/* let xhr = new XMLHttpRequest();
let container = document.querySelector(".container")

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        let datas = JSON.parse(xhr.responseText);

        for (let i = 0; i < 500; i++) {
            container.innerHTML += `<div class="card">
            <img src="${datas[i].url}" alt="">
            <div>
                <h3>${datas[i].title}</h3>
            </div>
        </div>`;
        }
    }
}

xhr.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
xhr.send(); */



/********************Méthode fetch (méthode asynchrone) ******************************/

let container = document.querySelector(".container");

fetch("https://dummyjson.com/products")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.products.forEach((res) => {
            container.innerHTML += `<div class="card">
            <img src="${res.images[0]}" alt="">
            <div>
                <h3>${res.title}</h3>
            </div>
        </div>`;
        })
    });

let container2 = document.querySelector(".container2");
fetch("https://dummyjson.com/users")
    .then((answer) => {
        return answer.json();
    })
    .then((data2) => {
        data2.users.forEach((ans) => {
            container2.innerHTML += `<div class="card">
        <p>${ans.firstName}</p>
        <p>${ans.lastName}</p>
        <p>${ans.age}</p>
        <p>${ans.gender}</p>
        <p>${ans.email}</p>
        <p>${ans.password}</p>
        <img class="idphoto" src="${ans.image}" alt="">
    </div>`;
        })
    });
