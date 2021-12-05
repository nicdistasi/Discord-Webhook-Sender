const submitBtn = document.getElementById('submitBtn');
const username = document.getElementById('name');
const textbox = document.getElementById('message');
const info = document.getElementById('infoText');

function sendMessage() {
    const message = textbox.value;
    const user = username.value;
    const request = new XMLHttpRequest();
    const params = {
        username: user,
        content: message
    }
    if (message != '') {
        //luc's server: https://discordapp.com/api/webhooks/916889198622023691/7grsd65JWIX6NRclSVW35O8Hvnp9ff8tAHivg1prFw5Z-V7CLfZ95_I6j54jyzuCTdYY
        //code server: https://discordapp.com/api/webhooks/916878690602860605/75ObZaLvfGgTuge1B_EIznRS_rA8we_a5dQYaP85w-I70xYq_aoWKJ2vYHhhz7xS67_O
        request.open("POST", "https://discordapp.com/api/webhooks/916889198622023691/7grsd65JWIX6NRclSVW35O8Hvnp9ff8tAHivg1prFw5Z-V7CLfZ95_I6j54jyzuCTdYY");
        request.setRequestHeader('Content-type', 'application/json');
        request.send(JSON.stringify(params));

        info.innerHTML = 'Message sent';
        textbox.value = '';
        username.value = '';
    } else {
        info.innerHTML = 'Invalid message';
    }
}

submitBtn.addEventListener('click', sendMessage);
