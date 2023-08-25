const express = require('express')
const cors = require('cors')


const app = express()
app.use(cors())

const port = 8000;


const username = "sasuke"
const password = "Sasuke0rinnegan"

app.get('/deals', async(req, res)=>{
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
                "Authorization": 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
            }
        })

        const data = await response.json()
        const results =data.results[0].content.results.organic
        const filteredDeals = results.filter(deal=>deal.price_strikethrough)
        
        const sortedByBestDeal = filteredDeals.sort((b,a)=>
            ((a.price_strikethrough-a.price)/a.price_strikethrough*100)-
            ((b.price_strikethrough-b.price)/b.price_strikethrough*100)
        )
        // console.log(await response.json());
        res.send(sortedByBestDeal)
    
    }catch(err){
        console.log(err)
    }
})


app.listen(port, ()=>console.log(`listening on port: ${port}`))