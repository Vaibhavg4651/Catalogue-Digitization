import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import Description from '../components/Description'



const Home = () => {
  return (
   <>
   <Header/>
   <div className="grid grid-cols-2">
        <div>
            <Card/>
        </div>
        <div>
            
            <Description/>
        </div>
   </div>
   </>
  )
}

export default Home