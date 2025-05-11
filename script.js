window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;

    const lightness = 70 - scrollPercent * 40;
    const color = `hsl(220, 100%, ${lightness}%)`;

    document.body.style.backgroundColor = color;
});

function validarFormulario() {
    const primeiroNome = document.getElementById('primeiroNome_cadastro').value.trim();
    const sobrenome = document.getElementById('sobrenome_cadastro').value.trim();
    const cpf = document.getElementById('cpf_cadastro').value.trim();
    const idade = parseInt(document.getElementById('idade_cadastro').value, 10);
    const dataNasc = document.getElementById('dataNasc_cadastro').value;
    const genero = document.getElementById('genero_cadastro').value;
    const email = document.getElementById('email_cadastro').value.trim();
    const telefone = document.getElementById('telefone_cadastro').value.trim();
    const nacionalidade = document.getElementById('nacionalidade_cadastro').value.trim();
    const senha = document.getElementById('senha_cadastro').value;
    const confirmSenha = document.getElementById('confirmSenha_cadastro').value;
    const cep = document.getElementById('cep_cadastro').value.trim();
    const cidade = document.getElementById('cidade_cadastro').value.trim();
    const estado = document.getElementById('estado_cadastro').value.trim();
    const pais = document.getElementById('pais_cadastro').value.trim();
    const altura = parseFloat(document.getElementById('altura_cadastro').value);
    const peso = parseFloat(document.getElementById('peso_cadastro').value);
    const tipoSangue = document.getElementById('tipoSangue_cadastro').value;
    const viagemSub = document.querySelector('input[name="viagemSub"]:checked');
    const certificado = document.querySelector('input[name="certificado"]:checked');
    const nivel = document.getElementById('nivel_cadastro').value;
    const pacoteEscolhido = document.getElementById('escolhaPacote_cadastro').value;
    const acompanhantes = parseInt(document.getElementById('acompanhantes_cadastro').value, 10);
    const corSubmarino = document.getElementById('corSubmarino_cadastro').value;
    const corTraje = document.getElementById('corTraje_cadastro').value;
    const horario = document.getElementById('horario_cadastro').value;
    const formaPagamento = document.getElementById('pagamento_cadastro').value;
    const aceitaTermos = document.getElementById('aceitaTermos');
    const foto = document.getElementById('foto_cadastro').files[0];

    if (!primeiroNome) {
        alert('Por favor, preencha o primeiro nome.');
        return;
    } else {
        console.log(primeiroNome);
    }

    if (!sobrenome) {
        alert('Por favor, preencha o sobrenome.');
        return;
    } else {
        console.log(sobrenome);
    }

    if (!cpf || cpf.length !== 11 || isNaN(cpf)) {
        alert('Por favor, insira um CPF válido com 11 dígitos.');
        return;
    } else {
        console.log(cpf);
    }

    if (isNaN(idade) || idade < 18) {
        alert('A idade deve ser um número igual ou maior que 18.');
        return;
    } else {
        console.log(idade);
    }

    if (!dataNasc) {
        alert('Por favor, preencha a data de nascimento.');
        return;
    } else {
        console.log(dataNasc);
    }

    if (!genero) {
        alert('Por favor, selecione o gênero.');
        return;
    } else {
        console.log(genero);
    }

    if (!email) {
        alert('Por favor, preencha o e-mail.');
        return;
    } else {
        console.log(email);
    }

    if (!telefone) {
        alert('Por favor, preencha o telefone.');
        return;
    } else {
        console.log(telefone);
    }

    if (!nacionalidade) {
        alert('Por favor, informe a nacionalidade.');
        return;
    } else {
        console.log(nacionalidade);
    }

    if (!senha || senha.length < 6) {
        alert('A senha deve ter no mínimo 6 caracteres.');
        return;
    } else {
        console.log(senha);
    }

    if (senha !== confirmSenha) {
        alert('As senhas não coincidem.');
        return;
    } else {
        console.log(confirmSenha);
    }

    if (!cep) {
        alert('Por favor, preencha o CEP.');
        return;
    } else {
        console.log(cep);
    }

    if (!cidade) {
        alert('Por favor, preencha a cidade.');
        return;
    } else {
        console.log(cidade);
    }

    if (!estado) {
        alert('Por favor, preencha o estado.');
        return;
    } else {
        console.log(estado);
    }

    if (!pais) {
        alert('Por favor, preencha o país.');
        return;
    } else {
        console.log(pais);
    }

    if (isNaN(altura) || altura <= 0) {
        alert('Altura inválida.');
        return;
    } else {
        console.log(altura);
    }

    if (isNaN(peso) || peso <= 0) {
        alert('Peso inválido.');
        return;
    } else {
        console.log(peso);
    }

    if (!tipoSangue) {
        alert('Por favor, selecione o tipo sanguíneo.');
        return;
    } else {
        console.log(tipoSangue);
    }

    if (!viagemSub) {
        alert('Por favor, informe se já participou de viagens subaquáticas.');
        return;
    } else {
        console.log('Viagem subaquática:', viagemSub.value);
    }

    if (!certificado) {
        alert('Por favor, informe se possui certificado de mergulho.');
        return;
    } else {
        console.log('Certificado de mergulho:', certificado.value);
    }

    if (nivel === '' || nivel < 1 || nivel > 10) {
        alert('Por favor, informe um nível de claustrofobia entre 1 e 10.');
        return;
    } else {
        console.log('Nível de claustrofobia:', nivel);
    }

    if (!pacoteEscolhido) {
        alert('Por favor, selecione um pacote.');
        return;
    } else {
        console.log(pacoteEscolhido);
    }

    if (isNaN(acompanhantes) || acompanhantes < 0) {
        alert('Número de acompanhantes inválido.');
        return;
    } else {
        console.log(acompanhantes);
    }

    if (!corSubmarino) {
        alert('Por favor, selecione a cor do submarino.');
        return;
    } else {
        console.log(corSubmarino);
    }

    if (!corTraje) {
        alert('Por favor, selecione a cor do traje.');
        return;
    } else {
        console.log(corTraje);
    }

    if (!horario) {
        alert('Por favor, selecione o horário de embarque.');
        return;
    } else {
        console.log(horario);
    }

    if (!formaPagamento) {
        alert('Por favor, selecione a forma de pagamento.');
        return;
    } else {
        console.log(formaPagamento);
    }

    if (!aceitaTermos.checked) {
        alert('Você deve aceitar os Termos e Condições para continuar.');
        return;
    } else {
        console.log('Aceitou os termos:', aceitaTermos.checked);
    }

    if (!foto) {
        alert('Por favor, envie uma foto.');
        return;
    } else {
        console.log(foto);
    }
}
