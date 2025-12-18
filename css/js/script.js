// ===== LOGIN VALIDATION =====
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const message = document.getElementById("loginMessage");

        if (username === "admin" && password === "admin123") {
            window.location.href = "home.html";
        } else {
            message.textContent = "Username atau password salah!";
        }
    });
}

// ===== IMAGE UPLOAD & AI SIMULATION =====
function processImage() {
    const imageInput = document.getElementById("imageUpload");
    const descInput = document.getElementById("description");
    const preview = document.getElementById("previewImage");
    const descOutput = document.getElementById("descOutput");
    const aiResult = document.getElementById("aiResult");

    if (imageInput.files.length === 0) {
        alert("Silakan upload gambar terlebih dahulu!");
        return;
    }

    const file = imageInput.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        preview.src = reader.result;
    };

    reader.readAsDataURL(file);

    descOutput.textContent = "Deskripsi: " + descInput.value;

    const results = [
        "Lingkungan Bersih 🌱",
        "Lingkungan Tercemar 🚯",
        "Lingkungan Sehat 🌍"
    ];

    const randomResult = results[Math.floor(Math.random() * results.length)];
    aiResult.textContent = "Hasil Klasifikasi AI: " + randomResult;
}
