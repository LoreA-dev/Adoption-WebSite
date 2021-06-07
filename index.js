const express = require('express')
const path = require('path')
const app = express()
app.set('port',process.env.PORT || 3000)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname,'/public/views/home_page.html'))
})


app.get('/pets', (req, res) =>{
    res.sendFile(path.join(__dirname,'/public/views/pets.html'))
})

app.get('/animal-care', (req, res) =>{
    res.sendFile(path.join(__dirname,'/public/views/animal_care.html'))
})

app.listen(app.get('port'),()=>{
    console.log("Server on port", app.get('port'))
})