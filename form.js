const url = 'https://script.google.com/macros/s/AKfycbyjMiT0yYovcfe1VVwYm14jOlsN94r6U4W0tcWNu4p0UrOOUlh3plRVE-mkSIyVegc_cg/exec';

const myForm = document.querySelector('#myForm');

const myName = document.querySelector('#Name');

const myEmail = document.querySelector('#Email');

const myMessage = document.querySelector('#Message');

myName.value = 'Jenna Zielinski';

myEmail.value = 'jennazielinski14@gmail.com';

myMessage.value = 'Hello World';

myForm.addEventListener('submit', submitter);

function submitter(e) {

    console.log('submitted');

    e.preventDefault();

    let message = '';

    if (myName.value.length < 5) {

        myName.style.borderColor = 'red';

        message += `<br>Name needs to be 5 characters`;

    }

    if (myEmail.value.length < 5) {

        myEmail.style.borderColor = 'red';

        message += `<br>Email is missing`;

    }

    if (message) {

        const div = document.createElement('div');

        div.innerHTML = message;

        div.style.color = 'red';

        myForm.append(div);

        setTimeout(() => {

            div.remove();

            myName.style.borderColor = '';

            myEmail.style.borderColor = '';

        }, 5000);

    } else {

        const myObj = {

            Name: myName.value,

            Email: myEmail.value,

            Message: myMessage.value

        };

        console.log(myObj);

    }

}

function addSendMail(data) {

    console.log(data);

    fetch(url, {

        method: 'POST',

        body: JSON.stringify(data)

    })

        .then(res => res.json())

        .then(json => {

            console.log(json);

        })

}



function addSendMailGET(data) {

    const url1 = url + '?id=100';

    fetch(url1)

        .then(res => res.json())

        .then(json => {

            console.log(json);

        })

}