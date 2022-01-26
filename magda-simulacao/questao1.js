//Exercicio 1:
//crie um chatbot que pergunte ao usuario como ele esta;
//logo responda "posso ajudar em algo?" ou "que otimo!";
//fazer isso em cada caso de resposta (pode fazer em hard code)




// const show = str => console.log(str)

// show("Como vc esta?")
// const resposta = "Bem"

// resposta == "Bem" ? show ('Que bom') : show ("posso ajudar em algo")

const simulacaoChatbot = respostas => console.log(respostas)

simulacaoChatbot("Como vc esta?");
resposta = "Tudo bem";

if (resposta == "Tudo bem"){
    simulacaoChatbot ("Que ótimo, posso ajudar em algo?");
}else {
    "Conversa encerrada";
}