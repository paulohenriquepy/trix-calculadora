const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputClorofilaA = e.target.querySelector('#clorofilaA');
    const inputSaturacionOxigeno = e.target.querySelector('#saturacionOxigeno');
    const inputNitrogenoTotal = e.target.querySelector('#nitrogenoTotal');
    const inputFosforoTotal = e.target.querySelector('#fosforoTotal');

    const clorofilaA = Number(inputClorofilaA.value);
    const saturacionOxigeno = Number(inputSaturacionOxigeno.value);
    const nitrogenoTotal = Number(inputNitrogenoTotal.value);
    const fosforoTotal = Number(inputFosforoTotal.value);

    if (!clorofilaA) {
        setResultado('Clorofila A inválida.', false);
        return;
    }


    if (!saturacionOxigeno) {
        setResultado('Saturacion de Oxígeno inválido.', false);
        return;
    }

    if (!nitrogenoTotal) {
        setResultado('Nitrógeno Total inválido.', false);
        return;
    }

    if (!fosforoTotal) {
        setResultado('Fosforo total inválido.', false);
        return;
    }

    const indiceTRIX = getTRIX(clorofilaA, saturacionOxigeno, nitrogenoTotal, fosforoTotal);
    const nivelTRIX = getNivelTRIX(indiceTRIX);
    const msg = `El estado trófico de tu zona es ${nivelTRIX}.`;
    setResultado(msg, true);

});

function getTRIX(clorofilaA, saturacionOxigeno, nitrogenoTotal, fosforoTotal){
    const indiceTRIX = (Math.log10(clorofilaA * saturacionOxigeno * nitrogenoTotal * fosforoTotal) + 1.5) / 1.2
    return indiceTRIX.toFixed(2)


}

function criaP() {

    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado');
    return p
    
};


function setResultado(msg, isValid) {

    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');

    }


    p.innerHTML = msg;
    resultado.appendChild(p);
};


function getNivelTRIX(indiceTRIX){

    const nivel = ["Zona oligotrófica", "Zona mesotrófica", "Zona mesoeutrófica", "Zona eutrófica"];

    // Se a condicional tem apenas uma linha, não precisa usar as chaves

    if (indiceTRIX >= 6.1) return nivel[3];    
    if (indiceTRIX >= 6) return nivel[2];
    if (indiceTRIX >= 5) return nivel[1];
    if (indiceTRIX >= 4) return nivel[1];
    
 }





   

