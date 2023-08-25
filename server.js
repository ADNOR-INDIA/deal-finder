const express = require('express')
const cors = require('cors')


const app = express()
app.use(cors())

const port = 8000;


const username = "sasuke"
const password = "Sasuke0rinnegan"


try{
    const body ={
        "source":"amazon_search",
        "domain":"com",
        "query":"deal of the day",
        "parse":true,
        "pages":1
    }
    const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
        method:"POST",
        body:JSON.stringify(body),
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Basic"+Buffer.from(`${username}:${password}`.toString("base64"))
        }
    })
    console.log(await response.json());

}catch(err){
    console.log(err)
}

app.listen(port, ()=>console.log(`listening on port: ${port}`))