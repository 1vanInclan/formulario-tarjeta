const tarjeta = document.querySelector('#tarjeta');
const formulario = document.querySelector('#form_tarjeta');
const numeroTarjeta = document.querySelector('#tarjeta .numero');
const nombreTarjeta = document.querySelector('#tarjeta .nombre');
const logoMarca = document.querySelector('#logo__marca');
const firma = document.querySelector('#tarjeta .firma p');
const mesExpiracion = document.querySelector('#tarjeta #expiracion .mes');
const yearExpiracion = document.querySelector('#tarjeta #expiracion .year');
const ccv = document.querySelector('#tarjeta .cv');



console.log(formulario.inputCcv);

// Volteamos la tarjeta para mostrar frente

const mostrarFrente = () => {
    if(tarjeta.classList.contains('--active')){
        tarjeta.classList.remove('--active')
    }
}

// Rotacion de tarjeta
tarjeta.addEventListener('click', () =>{
    tarjeta.classList.toggle('--active');
})

// Select del mes generado dinamicamente

for(let i = 1; i <= 12; i++){
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectMes.appendChild(opcion);
}

// Select del año generado dinamicamente

const yearActual =  new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++){
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectYear.appendChild(opcion);
}

// Input numero de tarjeta

formulario.input_numero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.input_numero.value = valorInput
    // Eliminamos espacios en blanco
    .replace(/\s/g, '')
    // Eliminar las letras
    .replace(/\D/g, '')
    // Ponemos espacio cada 4 numeros
    .replace(/([0-9]{4})/g, '$1 ')
    // Elimina el ultimo espaciado
    .trim();
    
    numeroTarjeta.textContent = valorInput;

    if(valorInput == ''){
        numeroTarjeta.textContent = '●●●● ●●●● ●●●● ●●●●';

        logoMarca.innerHTML = '';
    }

    if(valorInput[0] == 4){
        logoMarca.innerHTML = ''
        const imagen = document.createElement('img');
        imagen.src = 'assets/images/logos/visa.png';
        logoMarca.appendChild(imagen) 
    } else if(valorInput[0] == 3){
        logoMarca.innerHTML = ''
        const imagen = document.createElement('img');
        imagen.src = 'assets/images/logos/american.png';
        logoMarca.appendChild(imagen)
    } else if(valorInput[0] == 5){
        logoMarca.innerHTML = ''
        const imagen = document.createElement('img');
        imagen.src = 'assets/images/logos/mastercard.png';
        logoMarca.appendChild(imagen) 
    }
    //Volteamos la tarjeta para que el usuario la vea de frente
    mostrarFrente();
});

// Input nombre de tarjeta

formulario.input_nombre.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.input_nombre.value = valorInput.replace(/[0-9]/g, '');
    nombreTarjeta.textContent = valorInput;
    firma.textContent = valorInput;

    if(valorInput == ''){
        nombreTarjeta.textContent = 'Nombre'
    }

    mostrarFrente();
});

// Select MES

formulario.selectMes.addEventListener('change', (e)=>{
    mesExpiracion.textContent = e.target.value;
    mostrarFrente();
});

// Select Año

formulario.selectYear.addEventListener('change', (e)=>{
    yearExpiracion.textContent = e.target.value.slice(2);
    mostrarFrente();
});

// ccv

formulario.inputCcv.addEventListener('keyup', () => {
    if(!tarjeta.classList.contains('--active')){
        tarjeta.classList.toggle('--active')
    }

    formulario.inputCcv.value = formulario.inputCcv.value
    .replace(/\s/g, '')
    .replace(/\D/g, '');

    ccv.textContent = formulario.inputCcv.value
})