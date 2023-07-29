import { useState, useEffect } from 'react'
import {Card} from '../../Components/Card'
import { ProductDetail } from '../../Components/ProductDetail'

function Home() {

  const [items, setItems] = useState(null)

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data))
  },[])

  return (
    <>
    <div className='grid gap-8 grid-cols-4 w-full max-w-screen-lg'>
    {
      items?.map(item => { 
        return <Card key={item.id} data={item}/>
      })
    }
  </div>
  <ProductDetail/>
    </>
  )
}

export { Home }