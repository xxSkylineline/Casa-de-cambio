/// <reference types = 'jquery'/>

const link = 'https://api.exchangeratesapi.io/v1/';
const access_key = 'd564d07b265b1622a5106983bf38220d';

const calendario = $('#fecha');
const $muestraMonedas = $('#mostrar-monedas');
let fecha;

calendario.on('click',function(){
    let fechaActual = new Date().toISOString().split('T')[0];
   return calendario.attr('max', fechaActual)}
)
);

$muestraMonedas.on('click', function(){


function cargarValoresDeMonedas(){

    
    let $listaValorMonedas = $('#listado-monedas');
    $listaValorMonedas.text('')

    fecha = calendario.val();

    fetch(link+fecha+'?access_key='+access_key)
        .then(res => res.json())
        .then(resJSON => {
            $('#base').text(`La base es: ${resJSON.base}`);
            Object.keys(resJSON.rates).forEach(monedas =>{
                let contenedorFila = $('<div></div>').addClass('row');
                let contenedorColumna1 = $('<div></div>').addClass('col');
                let contenedorColumna2 = $('<div></div>').addClass('col')
                
                $('#listado-monedas').append(
                    contenedorFila
                        .append(contenedorColumna1.text(monedas).addClass('moneda'))
                        .append(contenedorColumna2.text(resJSON.rates[monedas]).addClass('valor-moneda'))

                )
                /* $('#lista-conversion').append($(`<li>${monedas}</li>`).addClass('moneda'));
                $('#lista-valor-moneda').append($(`<li>${resJSON.rates[monedas]}</li>`).addClass('valor-moneda')); */
            });
        });
}

