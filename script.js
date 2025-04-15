function validarFormulario() {

    const nome = document.getElementById('nome_maquinista').value.trim();
    const cpf = document.getElementById('cpf_maquinista').value.trim();
    const idade = parseInt(document.getElementById('idade_maquinista').value, 10);
    const experiencia = parseInt(document.getElementById('experiencia_maquinista').value, 10);

}

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;

    const lightness = 70 - scrollPercent * 40;
    const color = `hsl(220, 100%, ${lightness}%)`;

    document.body.style.backgroundColor = color;
});