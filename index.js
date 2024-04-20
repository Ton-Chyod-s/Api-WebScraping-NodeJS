const { main } = require('./src/mandarEmail');
const { DOE } = require('./src/funcDoe');
const { UFMS } = require('./src/funcUfms');
const { Exercito } = require('./src/funcExercito');

const ano = new Date().getFullYear().toString();

async function run(nome,mail) {
    const documentoGeradoDOE = await DOE(nome);
    const documentoGeradoUFMS = await UFMS();
    const documentoGeradoExercito = await Exercito();

    const corpoEmail = `<p><strong>Prezado(a),</strong></p>
    <p>Aqui estão as análises solicitadas:</p>
    <p><strong>Movimentação Interna e Reingresso UFMS ${ano}</strong></p>
    <p>${documentoGeradoUFMS}</p>
    <p><strong>Oficial Técnico Temporário (OTT) - PROCESSO SELETIVO ${ano}</strong></p>
    <p>${documentoGeradoExercito}</p>
    <p><strong>Diário Oficial do Estado de Mato Grosso do Sul (DOE)</strong></p>
    <p>${documentoGeradoDOE}</p>
    <p>Por favor, mantenha-se informado sobre possíveis atualizações.</p>
    <p>Atenciosamente,</p>
    <p>PerinDevBoot~</p>`

    // Envie o e-mail aqui, após o processamento de todas as informações.
    main(corpoEmail, `E-mail enviado com sucesso!!`, `Atualizações - UFMS, OTT e DOE ${ano}`, mail, true);
}

run("Klayton Chrysthian Oliveira Dias","hix_x@hotmail.com");
run('Silvianny Aparecida Faria Camilo','silvianny.faria@ufms.br')