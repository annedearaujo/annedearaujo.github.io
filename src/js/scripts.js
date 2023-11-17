// Hamburger Menu
function menuOnClickD() {
    document.getElementById("menu-bar-desktop").classList.toggle("change");
    document.getElementById("nav-desktop").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

// Alert e Submission Redirect
function redirectPage() {
    var nome = document.getElementsByClassName("input-nome-desktop")[0].value;
    var email = document.getElementsByClassName("input-email-desktop")[0].value;
    var texto = document.getElementsByClassName("input-txt-desktop")[0].value;

    if (nome !== "" && email !== "" && texto !== "") {
        window.location.href = "https://annedearaujo.github.io/home/submitted";
    } else {
        Swal.fire(
            'Ops!',
            'Preencha todos os campos para enviar',
            'error'
        );
    }
}
