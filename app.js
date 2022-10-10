const express = require("express");
const app = express();

const usuarios=[
    {nome:"Pedro",idade:20},
    {nome:"João",idade:50},
    {nome:"Maria",idade:19},
    {nome:"Raimundo",idade:70},
    {nome:"Antonio",idade:39},
    {nome:"Emanuel",idade:54}
    
]

app.get("/",(req,res)=>{
    res.json({mensagem:"hello Word"})
})
app.get("/usuarios",(req,res)=>{
    res.send(usuarios)
    res.json({mensagem:"Lista de Usuários"})
})

module.exports = app;
