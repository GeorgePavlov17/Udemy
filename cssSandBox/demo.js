window.addEventListener('load', info);

function info() {

    const person = {
        name: "John",
        age: "30",
        city: "New York"
    }

    const moreBtn = document.getElementById('button');
    moreBtn.addEventListener('click', moreInfo);
    
    // let txt = '';

    // for(let x in person) {
    //     txt += person[x] + ' ';
    // }

    function moreInfo() {

        // let personName = person.name;
        // let personAge = person.age;
        // let personCity = person.city;

        const li = document.createElement('li');
        li.className = 'info';
        li.innerHTML = 
        `
        <li>${person.name}</li>
        <li>${person.age}</li>
        <li>${person.city}</li>
        `

        document.getElementById('more').appendChild(li);
    }
}
