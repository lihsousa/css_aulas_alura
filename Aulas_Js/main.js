function tocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;



while (contador < listaDeTeclas.length) {

    const tecla =  listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    

    // TEMPLATE ISTRING
    const idAudio = `#som_${instrumento}`

   tecla.onclick = function() {
        tocaSom(idAudio);
    };
    contador = contador + 1;
    
   
}