async function register() {
    const username = document.getElementById("username").value;

    const res = await fetch("/register/start", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ username })
    });

    const options = await res.json();

    options.challenge = base64ToArrayBuffer(options.challenge);
    options.user.id = base64ToArrayBuffer(options.user.id);

    const credential = await navigator.credentials.create({
        publicKey: options
    });

    await fetch("/register/finish", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ username, credential })
    });

    alert("Registered!");
    window.location.href = "/";
}

function base64ToArrayBuffer(base64) {
    const binary = atob(base64);
    return Uint8Array.from(binary, c => c.charCodeAt(0));
}