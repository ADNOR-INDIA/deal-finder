import { useState, useEffect } from "react"


const App=()=> {

  const [deals, setDeals] = useState(null)

  const getDeals = async()=>{
    try{
      const response = await fetch("http://localhost:8000/deals", {method:"GET"})
      const data = await response.json()
      setDeals(data)

    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getDeals()
  }, [])

  console.log(deals)
  
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
