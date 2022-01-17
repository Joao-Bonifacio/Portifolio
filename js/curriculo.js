function carregar() {
    let msg = document.getElementById('hora')
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    if (min < 10) {
        min = `0${min}`
    }
    var saida = (hora >= 13 && hora <= 24) ? (`Agora são 0${hora-12}:${min} PM`) : (`Agora são 0${hora}:${min} AM`)
    if (hora > 9 && hora < 13) {
        saida = `Agora são ${hora}:${min} AM`
    }
    if (hora > 21 && hora <= 24) {
        saida = `Agora são ${hora-12}:${min} PM`
    }
    msg.innerHTML = saida
}

function cursos() {
    let windowHeight = window.innerHeight;
    let screenHeight = screen.height;
    document.getElementById('cursos1').style = 'display:none;'
    document.getElementById('cursos').innerHTML =
        `<div style="height:90%">
            <p>Logica de Programação (DankiCode) *validação com cpf</p>
            <p>Front-End-Completo (DankiCode) *validação com cpf</p>
            <p>Front-End-Completo-2.0 (DankiCode) *validação com cpf</p>
            <p>Web-Design-express (DankiCode) *validação com cpf</p>
            <p>HTML5 (Curso em Video) cod validação: 399D7-63D5-7</p>
            <p>JavaScript (Curso em video) cod validação: 399D7-6C61-6</p>
            <a href="https://www.cursoemvideo.com/validacao-de-certificado/" style="text-decoration:none;">Validaçao Curso em video</a><span> *clique para verificar</span><br>
            <a href="https://cursos.dankicode.com/certificados/" style="text-decoration:none;">Validaçao DankiCode</a><span> *clique para verificar</span><br>
        </div>
        <button style="border-style:none;cursor:pointer;background-color:white;" onclick="fechaCursos()">*fechar*</button>`
    document.getElementById('aside').style = 'overflow:auto;'
    if (windowHeight.toString(1000) + 'px' < 1000 | screenHeight.toString(1000) + 'px' < 1000) {
        document.getElementById('aside1').style = 'height:98%;min-height:1100px;'
    } else {
        document.getElementById('aside1').style = 'height:98%;min-height:800px;'

    }

}

function fechaCursos() {
    document.getElementById('cursos').innerHTML = '';
    document.getElementById('cursos1').style = ''
    document.getElementById('aside1').style = ''
    document.getElementById('aside').style = ''
}