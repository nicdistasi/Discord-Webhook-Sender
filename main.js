const submitBtn = document.getElementById('submitBtn');
const textbox = document.getElementById('message');
const info = document.getElementById('infoText');

function sendMessage() {
    const message = textbox.value;
    const request = new XMLHttpRequest();
    const params = {
        username: "Hey Toby ;)",
        content: message
    }
    if (message != '') {
        request.open("POST", "https://discordapp.com/api/webhooks/916878690602860605/75ObZaLvfGgTuge1B_EIznRS_rA8we_a5dQYaP85w-I70xYq_aoWKJ2vYHhhz7xS67_O");
        request.setRequestHeader('Content-type', 'application/json');
        request.send(JSON.stringify(params));

        info.innerHTML = 'Message sent';
        textbox.value = '';
    } else {
        info.innerHTML = 'Invalid message';
    }
}

submitBtn.addEventListener('click', sendMessage);
