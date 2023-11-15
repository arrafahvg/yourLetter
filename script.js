function bukaSurprise() {
    var password = document.getElementById("password").value;
    // Ganti "password-rahasia" dengan password yang lu mau
    if (password === "araaraaja") {
        // Redirect ke halaman surprise
        window.location.href = "letter/halaman-surprise.html";
    } else {
        alert("Wrong password, Hint: Just like the old one.");
    }
}