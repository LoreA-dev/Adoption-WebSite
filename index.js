const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname,'public/views/home_page.html'))
})


app.get('/pets', (req, res) =>{
    res.sendFile(path.join(__dirname,'/public/views/pets.html'))
})

app.get('/animal-cares', (req, res) =>{
    res.sendFile(path.join(__dirname,'/views/animal_cares.html'))
})

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server on")
})