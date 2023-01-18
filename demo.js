window.addEventListener('load', solution);
//js object and display its content
function solution() {

    const car = {
        make: 'Mercedes',
        model: 'E',
        year: '2010'
    };

    const btn = document.getElementById('moreBtn');
    btn.addEventListener('click', more);

    function more() {

        const li = document.createElement('li');

        li.innerHTML = 
        `
        <li>${car.make}</li>
        <li>${car.model}</li>
        <li>${car.year}</li>
        `

        document.getElementById('show').appendChild(li);
    }
}

//AJAX and display its info
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById('div').innerHTML = `<p>This is the change</p>`;
    }
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}

function secondAjax() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById('newDiv').innerHTML = `This is the second example!`;
    }

    xhttp.open('GET', true);
    xhttp.send();
}