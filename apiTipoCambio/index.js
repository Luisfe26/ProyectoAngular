const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express ();

app.use(cors({ 
    origin:'*'
}))

jsonParser = bodyParser.json();

let monedas = [
    {
    IdMoneda: "USD",
    Nombre: "Dolar",
    MonedaCompra: "787",
    MonedaVenta: "815",
},
{
    IdMoneda: "EUR",
    Nombre: "Euro",
    MonedaCompra: "880",
    MonedaVenta: "915",
},
{
    IdMoneda: "BRL",
    Nombre: "Real Brasil",
    MonedaCompra: "155",
    MonedaVenta: "172",
},
{
    IdMoneda: "ARP",
    Nombre: "Peso Argentino",
    MonedaCompra: "3",
    MonedaVenta: "6",
}
]

let ordenes = []


app.get('/', function(req, res){
    respuesta = {
        error : false,
        codigo:200,
        mensaje: 'Inicio'
    }
    res.send(respuesta)
 })
 

 app.get('/monedas', function(req, res){
    if(!Array.isArray(monedas) || monedas.length === 0){
        respuesta = {
            error : true,
            codigo: 500,
            mensaje: 'No hay tipo de cambio disponible'
        }
    }else{
        respuesta = {
            error : false,
            codigo:200,
            mensaje: monedas
    }
}
    res.send(respuesta)
 })
 
 app.get('/moneda/:id', function(req, res){
    let id = req.params.id
    let monedaId = monedas.find(monedaid => monedaid.IdMoneda === id)
    console.log(monedaId)
    if(id > monedas.length || !Array.isArray(monedas) || monedas.length === 0){
        respuesta = {
            error : true,
            codigo: 500,
            mensaje: 'El id no existe'
        }
    }else{
        respuesta = {
            error : false,
            codigo:200,
            mensaje: monedaId,
            
    }
}
    res.send(respuesta)
 })

 app.get('/ordenes', function(req, res){
    if(!Array.isArray(ordenes) || ordenes.length === 0){
        respuesta = {
            error : true,
            codigo: 500,
            mensaje: 'No existen ordenes'
        }
    }else{
        respuesta = {
            error : false,
            codigo:200,
            mensaje: ordenes
    }
}
    res.send(respuesta)
 })
 
 app.get('/orden/:id', function(req, res){
    let id = req.params.id
    if(id > ordenes.length || !Array.isArray(ordenes) || ordenes.length === 0){
        respuesta = {
            error : true,
            codigo: 500,
            mensaje: 'la orden id no existe'
        }
    }else{
        respuesta = {
            error : false,
            codigo:200,
            mensaje: ordenes[id]
    }
}
    res.send(respuesta)
 })
app.listen(3000, ()=>{
})

app.post('/orden',jsonParser, function(req, res){
    console.log(req.body)
    if (!req.body) {
        respuesta = {
            error: true,
            codigo:502,
            mensaje : "Error al crear orden"
        }
    }else{
        ordenes.push(req.body)
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: ordenes
        }
    }
    res.send(respuesta)
})
