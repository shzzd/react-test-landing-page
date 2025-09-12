import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import Temp1 from './components/Temp1/Temp1'
import Temp2 from './components/Temp2/Temp2'

function App() {
    const [data, setData] = useState([])

    useEffect(() => {
        // fetch data from fakestoreapi
        const fetchData = async () => {
            const res = await fetch('https://fakestoreapi.com/users')
            const data = await res.json()
            setData(data)
        }
        fetchData()
    }, [])

    return (
        <div className="App">
            <Nav />
            <Home />
            <Temp1 />
            <Temp2 data={data} />
            <Footer />
        </div>
    )
}

export default App
