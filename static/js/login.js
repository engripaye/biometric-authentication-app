async function login() {
    const username = document.getElementById("username").value;

    const res = await fetch("/login/start", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ username })
    });

    const options = await res.json();

    options.challenge = base64ToArrayBuffer(options.challenge);

    const credential = await navigator.credentials.get({
        publicKey: options
    });

    await fetch("/login/finish", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ username, credential })
    });

    window.location.href = "/dashboard";
}

function base64ToArrayBuffer(base64) {
    const binary = atob(base64);
    return Uint8Array.from(binary, c => c.charCodeAt(0));
}