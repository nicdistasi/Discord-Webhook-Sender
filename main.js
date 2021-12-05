const submitBtn = document.getElementById('submitBtn');
const username = document.getElementById('name');
const textbox = document.getElementById('message');
const webhookInput = document.getElementById('webhookInput');
const webhookPlaceholder = document.getElementById('webhookPlaceholder');
var webhookVal = webhookInput.innerHTML;
const info = document.getElementById('infoText');
const inputNotify = document.getElementById('inputNotify');

var start = Date.now();
var delta;
setInterval(function() { //timer
    delta = Date.now() - start;

    if (webhookInput.innerHTML == '') {
        webhookPlaceholder.style.opacity = '60%';
    } else {
        webhookPlaceholder.style.opacity = '0%';
    }

    if (webhookInput === document.activeElement) {
        webhookInput.style.opacity = '100%';
    } else {
        webhookInput.style.opacity = '80%';
    }

    if (webhookInput.innerHTML == '') {
        webhookVal = webhookInput.innerHTML;
        webhookInput.style.width = '275px';
    } else if (webhookInput !== document.activeElement && webhookInput.innerHTML.length > 50) {
        webhookVal = webhookInput.innerHTML;
        const webhookShortened = webhookInput.innerHTML.substring(0, 50);
        webhookInput.innerHTML = webhookShortened;
    } else {
        webhookInput.style.width = 'initial';
    }

}, 1000/30); // currently 30 fps


function sendMessage() {
    const message = textbox.value;
    const user = username.value;
    const webhook = webhookVal;
    const request = new XMLHttpRequest();
    const params = {
        username: user,
        content: message
    }
    if (message=='' || user=='' || webhook == 'https://yourapp/webhook') {
        info.innerHTML = 'Invalid message';
    } else {
        //currently luc's server
        request.open("POST", webhook);
        request.setRequestHeader('Content-type', 'application/json');
        request.send(JSON.stringify(params));

        info.innerHTML = 'Message sent';
        textbox.value = '';
        username.value = '';
    }
}

submitBtn.addEventListener('click', sendMessage);

webhookInput.addEventListener('focus', function () {
    inputNotify.style.opacity = '0%';
    webhookInput.innerHTML = webhookVal;
})