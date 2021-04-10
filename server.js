const express = require('express');
const app = express()
const iplocate = require("node-iplocate");
const publicIp = require('public-ip');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
var cors = require('cors')
app.use(cors())


const port = 2900

app.get('/', (req,res) =>{
    publicIp.v4().then(ip => {
        iplocate(ip).then(function(results) {
            let cityf = JSON.stringify(results.city, null)
            let countryf = JSON.stringify(results.country, null)
            cityf = cityf.split('"')
            cityf = cityf[1]
            countryf = countryf.split('"')
            countryf = countryf[1]
            console.log(cityf, " ", countryf)
            res.json({city: cityf, country:countryf})

            });
        });

    }
)



app.listen(port, ()=>{
    console.log("Running on port "+port)
})

