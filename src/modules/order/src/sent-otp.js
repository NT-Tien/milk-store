const myHeaders = new Headers();
myHeaders.append("Authorization", "App 0d20f5eefbb431dc32acb66c164cfcb6-b6cf6095-90a8-4fc5-a30a-8bad2576f6e7");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "application/json");

const raw = JSON.stringify({
    "messages": [
        {
            "destinations": [{"to":"84356415082"}],
            "from": "ServiceSMS",
            "text": "Hello,\n\nThis is a test message from Infobip. Have a nice day!"
        }
    ]
});

const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
};

fetch("https://k2832e.api.infobip.com/sms/2/text/advanced", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));