/// <reference types = 'jquery'/>

const link = 'https://api.exchangeratesapi.io/v1/';
const access_key = 'd564d07b265b1622a5106983bf38220d';

const calendario = $('#fecha');
const $muestraMonedas = $('#mostrar-monedas');
let fecha;

calendario.on('click',function(){
    let fechaActual = new Date().toISOString().split('T')[0]

   return calendario.attr('max', fechaActual)}
)

$muestraMonedas.on('click', function(){

    let $listaDivisas = $('#lista-conversion');
    let $listaValorMonedas = $('#lista-valor-moneda');

    $listaDivisas.text('')
    $listaValorMonedas.text('')

    fecha = calendario.val();

    fetch(link+fecha+'?access_key='+access_key)
        .then(res => res.json())
        .then(resJSON => {
            $('#base').text(`La base es: ${resJSON.base}`)
            Object.keys(resJSON.rates).forEach(monedas =>{
                $('#lista-conversion').append($(`<li>${monedas}</li>`))
                $('#lista-valor-moneda').append($(`<li>${resJSON.rates[monedas]}</li>`))
            })
        })
})