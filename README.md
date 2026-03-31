# 🔐 Biometric Authentication Web App (FastAPI + WebAuthn)

A modern **passwordless authentication system** that allows users to register and log in using **fingerprint (biometric authentication)** instead of traditional passwords.

Built with **FastAPI**, **HTML/CSS/JavaScript**, and the secure WebAuthn standard.

---

## 🚀 Features

* 🔑 **Passwordless Authentication**
* 👆 **Fingerprint / Biometric Login**
* ⚡ Built with **FastAPI** for high performance
* 🎨 Clean, modern, and **mobile-responsive UI**
* 🔐 Secure authentication using public-key cryptography
* 📄 Separate frontend structure (HTML, CSS, JS)
* 🧠 No storage of sensitive biometric data

---

## 🧠 How It Works

This app uses **WebAuthn**, a browser-based API that enables biometric authentication.

### Authentication Flow:

1. User registers with a username
2. Browser prompts for fingerprint (or device biometrics)
3. Device verifies the user
4. A **public/private key pair** is generated
5. The server stores only the **public key**
6. During login, the fingerprint unlocks the private key for authentication

> ⚠️ Fingerprint data is **never stored or exposed**

---

## 🏗️ Project Structure

```
biometric-app/
│
├── main.py
│
├── templates/
│   ├── register.html
│   ├── login.html
│   └── dashboard.html
│
├── static/
│   ├── css/
│   │   ├── register.css
│   │   ├── login.css
│   │   └── dashboard.css
│   │
│   └── js/
│       ├── register.js
│       └── login.js
```

---

## ⚙️ Tech Stack

### Backend

* FastAPI
* python-fido2

### Frontend

* HTML5
* CSS3 (Responsive design)
* Vanilla JavaScript (WebAuthn API)

---

## 📦 Installation

### 1. Clone the repository

```
git clone https://github.com/your-username/biometric-app.git
cd biometric-app
```

---

### 2. Install dependencies

```
pip install fastapi uvicorn python-fido2 jinja2
```

---

### 3. Run the application

```
uvicorn main:app --reload
```

---

### 4. Open in browser

```
http://localhost:8000
```

---

## 🔐 Security Notes

* ✅ Uses **public-key cryptography**
* ❌ Does NOT store fingerprints
* 🔒 Requires **HTTPS** (or localhost for development)
* 🛡️ Authentication handled by device (Windows Hello, Android, Face ID, etc.)

---

## 📱 UI Preview (Concept)

![Image](https://images.openai.com/static-rsc-4/TwuzgwjruxEdKuhJNztQHGpftGRaCQMnzkHXjIw8gIyBCXFWbP6pr9pe5P-LypLGOEKH1LcOsmrOaM0RfL-hXlAzpLexloxVmS7U6UTb7bkxWGaMLAdLmMoOKK9DVLeOb3f5OhuIp2kRiPhm8P_xIzfDd5CLzzr1WgkvhG8vXWhMY8hLun9xe1Qvs8bCvlwH?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/9zK4u50WbEK-cB6esK6J-P1LptlupWorPsHscWMqs_k3MHYkQUuRnJOFhgIpfWrqp9asZjIwg3i7rAxAz61wQUPJ0sri_b-LmY2c7RobRgEWXQ2zTIaeSb4qdq2UzZGC-tWhDHSY0-tzoEVQjQQs2C87GhjpZuvjooUL5vs4aS_rsP2iS8aS-COITqE_m63N?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/Btxgh0aYVQUYWjUkTrf5MdV3DIqd_6iE1S5KNueRB7030sdieH-Jxhr_h_vnE4nOGPoLMgEgu7kutfbsodUKJe8qvdX9UIVDwWdqanF-Pf49Dnx6kI7PxZWZ70cLrJzvT6eKeaxDxG604Qr3JZZpyfSs-ir6tQWXbqUccurphaxzxe9mVoo-6Liu_Hf4uEcc?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/-RxrOGY6hgFK-ps0MtNmq6KWiAzB1NUKyW6PgMEct9vPe3zjXp16xXX3CB5DtY9cQmaJcsphAuMdQAdsdVP-G_xiwl8CbMvXyq4fXZRYXWyT0SnEbVCEt3dhOC-HfoZwT486TbsCW2b2bQmCcL5IA-UZs7Le2OjMRz_uxkT4PhVzpQkQo3u2Relj4-kcASKA?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/VtItkFvP_qV7JBLFM3IvNukkDFXaECuV4P7Q1yxDLLgGvTX4jTVzZeXjuL_fJXn7q-FanSeHlOdtJIpDeRufpClXRsgHVcKJwPdmSgoB-A1VGE4-RXNTAehBxZZVbpW3sidcYJ6vIEqFq0XAHM3u4sMC_UTdRN24hySbTN6UN2jnaaszsdJPnSk69jagS3xz?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/YZs407fhHMBY_AhSdU5__c1QS-xgKqO7oEAMCcLJsavqR0F2e-Ak7511b0cIOJX2U_kTcIVJnl-ERdlBucj8RuQsNaCUR8sY5xsJ4NSYaNaqJXbjT0CSIPgRYuKuYfwqaChMmMhHWfFarUoCFmwv3jXKi1RqSGJBkmjYqNo0Y1LUbB45lqi-FEbo1VsJIwHp?purpose=fullsize)

---

## 🚧 Limitations

* Works only on supported browsers (Chrome, Edge, Safari)
* Requires a device with biometric capability
* Current implementation uses in-memory storage (not persistent)

---

## 🔮 Future Improvements

* 🗄️ Database integration (PostgreSQL / MongoDB)
* 🔑 JWT authentication & session management
* 👥 Multi-device biometric support
* 🌍 Deployment (Docker, Nginx, HTTPS)
* 🎨 Advanced UI (animations, themes)

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🙌 Acknowledgements

* FIDO Alliance for WebAuthn standard
* FastAPI community
* Open-source contributors

---

## ⭐ Support

If you like this project:

* ⭐ Star the repo
* 🍴 Fork it
* 🧑‍💻 Share with others

---

## 💡 Author

**ENGR. IPAYE**
GitHub: https://github.com/engripaye

---

> “The future of authentication is passwordless.”
