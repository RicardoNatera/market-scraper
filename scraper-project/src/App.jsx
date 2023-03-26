import { useState,useEffect } from 'react'
import axios from 'axios';

import Form from './components/Form'
import ProductList from './components/ProductList'

function App() {
  const [data,setData] = useState(null)
  const [show,setShow] = useState(false)
  const [products,setProducts] = useState([])
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    async function fetchData(data){
      
      const result = await axios.post("http://localhost:3000/", data);
      if(result.data){
        const response = result.data.array
        setProducts(response);
      }
    }
    
    if(data){
      fetchData(data)
    }
  }, [data])
  
  return (
    <>
      <Form setData={setData} setShow={setShow}/>
      {show ? (<ProductList products={products}/>):(<></>)}
    </>
  )
}

export default App
