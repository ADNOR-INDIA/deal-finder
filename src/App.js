import { useState, useEffect } from "react"
import Card from "./components/Card"
import Header from "./components/Header"



const App = () => {

  const [deals, setDeals] = useState(null)

  const getDeals = async () => {
    try {
      const response = await fetch("http://localhost:8000/deals", { method: "GET" })
      const data = await response.json()
      setDeals(data)

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getDeals()
  }, [])

  //console.log(deals)

  return (
    <div className="App">
      <Header />
      <div className="bottomOne">
        <nav>
          <button className="primary">Amazon</button>
          <button className="primary" disabled>Walmart</button>
          <button className="primary" disabled>Google Shopping</button>
          <button className="primary" disabled>ebay</button>
        </nav>
        <div className="something">
          <h2>Best Deals</h2>
          <div className="feed">
            {deals?.map(deal => <Card key={deal.pos} item={deal} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
