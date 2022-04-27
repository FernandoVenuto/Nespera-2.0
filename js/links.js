// Acordeao Clientes
// 1
var acc = document.getElementsByClassName("acordeao");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// 2
var acc = document.getElementsByClassName("acordeao2");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
//Enviado
function enviado() {
    alert("Enviado!")
}

//LINKS
function gerar() {

    var nome = document.getElementById('nome').value
    var PGI = document.getElementById('job').value
    nome = (`${nome}`.toLowerCase());
    nome = nome.replace(/\s+/g, "-").replace(/[&\/\\#,+()$~%..'":*?<>{}¡!@%¨&*']/g, '')
    nome = nome.replace(/[éèêë]/g, 'e')
    nome = nome.replace(/[áàâã]/g, 'a')
    nome = nome.replace(/[íìîï]/g, 'i')
    nome = nome.replace(/[óóòõôö]/g, 'o')
    nome = nome.replace(/[úùûü]/g, 'u')
    nome = nome.replace(/[ç]/g, 'c')
    nome = nome.replace(/[ñ]/g, 'n');

    var pais = document.getElementById('pais').value
    pais = (`${pais}`.toLowerCase());//Variavel Pais em minusculo
    var pais2 = document.getElementById('pais').value
    pais2 = (`${pais2}`.toUpperCase());//Variavel Pais em maiusculo

    var conteudo = document.getElementById('conteudo').value
    conteudo = (`${conteudo}`.toLowerCase());
    conteudo = conteudo.replace(/\s+/g, "-").replace(/[&\/\\#,+()$~%..'":*?<>{}¡!@%¨&*']/g, '')
    conteudo = conteudo.replace(/[éèêë]/g, 'e')
    conteudo = conteudo.replace(/[áàâã]/g, 'a')
    conteudo = conteudo.replace(/[íìîï]/g, 'i')
    conteudo = conteudo.replace(/[óóòõôö]/g, 'o')
    conteudo = conteudo.replace(/[úùûü]/g, 'u')
    conteudo = conteudo.replace(/[ç]/g, 'c')
    conteudo = conteudo.replace(/[ñ]/g, 'n');

    var campanha = document.getElementById('campanha').value

    var pchave = document.getElementById('p-chave').value
    pchave = (`${pchave}`.toLowerCase());//Variavel Pais em minusculo


    tit.style.fontWeight = "900"
    tit.style.margin = "0px 0px 0px 15px"
    tit.style.borderRadius = "15px 15px 0px 0px"
    tit.style.padding = "0px 0px 5px 0px"
    tit.style.color = "black"
    tit.innerHTML = `Este é o seu link do <span style="color:black">${PGI}</span>`
    res.style.width = `80%`
    res.style.display = 'inline-block'
    res.style.padding = "5px 0px 10px 0px"
    res.style.fontWeight = "900"
    res.style.color = "black"

    //Quantidade de Botões.
    qbotoes = document.getElementById('q-botoes')

    let link = `https://content.pghealthnews.com/eap/${pais}/${pais2}-${PGI}-${nome}-mini-capsula.html?utm_medium=vae&utm_source=veeva&utm_campaign=${campanha}&utm_content=${conteudo}&utm_term=${pchave}&u={{Account.Id}}`
    document.getElementById('link-gerado').value = link

    document.getElementById('button').style.display = 'inline-block'

    let link2 = `https://content.pghealthnews.com/eap/${pais}/${pais2}-${PGI}-${nome}-capsula-completa.html?utm_medium=vae&utm_source=veeva&utm_campaign=${campanha}&utm_content=${conteudo}&utm_term=${pchave}&u={{Account.Id}}`

    document.getElementById('link-gerado2').value = link2

    let link3 = `https://content.pghealthnews.com/eap/${pais}/${pais2}-${PGI}-${nome}-resumen.html?utm_medium=vae&utm_source=veeva&utm_campaign=${campanha}&utm_content=${conteudo}&utm_term=${pchave}&u={{Account.Id}}`

    document.getElementById('link-gerado3').value = link3
}
/*
function download(filename, textInput) {

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textInput));
    element.setAttribute('download', filename);
    document.body.appendChild(element);
    element.click();
    //document.body.removeChild(element);
}
document.getElementById("btn")
    .addEventListener("click", function () {
        var text = document.getElementById("link-gerado").value;
        var filename = "output.txt";
        download(filename, text);
    }, false);
    */

