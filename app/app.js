let botones = document.querySelectorAll(".btn");

const desplegar = (e) => {
    let name = e.target.name;
        
    if(name == "pregunta__1"){
        validarPregunta(name)
    }
    else if(name == "pregunta__2"){
        validarPregunta(name)
    }
    else if(name == "pregunta__3"){
        validarPregunta(name)
    }
    else if(name == "pregunta__4"){
        validarPregunta(name)
    }
    else if(name == "pregunta__5"){
        validarPregunta(name)
    }
}

const validarPregunta = (name) => {

    if(1 == 1){
        document.querySelector(`.${name}`).classList.toggle("active")
    }

}

botones.forEach(boton => {
    boton.addEventListener("click", desplegar)
})
