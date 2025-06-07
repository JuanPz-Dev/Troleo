document.addEventListener("DOMContentLoaded",function () {
    const pesoInput = document.getElementById("input-peso");
    const botonCalcular = document.getElementById("boton-calcular");
    const resultado = document.getElementById("resultado");
    const image = document.getElementById("imagen-anti");

    const peso_limite = 80;

    botonCalcular.addEventListener("click", function(){
        const peso = parseFloat(pesoInput.value);

        image.classList.add("oculto");
        resultado.innerHTML = "";

        if(isNaN(peso)||peso<=0){
            resultado.innerHTML = "<p>Ingrese el peso hp</p>"
            return;
        }

        if(peso>peso_limite){
            resultado.innerHTML = `<p>El peso ingresado: <strong${peso}> kg</strong> supera el límite de ${peso_limite} kg, procura bajar</p>`;
            image.classList.remove("oculto");
        }else{
            resultado.innerHTML = `<p>El peso ingresado es <strong>${peso} kg</strong>.</p>`;
        }
    });

    image.addEventListener('click', function() {
        image.classList.add("oculto")
    });
});




