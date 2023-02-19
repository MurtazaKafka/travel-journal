import React from "react"
import data from "./data"
import Navbar from "./components/Navbar"
import Journal from "./components/Journal"

export default function App(){
    const trip = data.map(item => {
        return <Journal 
                    key={item.googleMapsUrl}
                    item={item}
                />
    })
    
    return (
        <div>
            <Navbar />
            <section>
                {trip}
            </section>
        </div>
    )
}