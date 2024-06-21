import React from 'react'

import "./pd.css"
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { notFound } from 'next/navigation'
import Image from 'next/image'



const getData =async (pp)=>{

const res =await fetch(`https://fakestoreapi.com/products/${pp}`)

if (!res.ok){
  notFound()    
};

return res.json()
}


export async function generateMetadata({params}){

  const data =await getData(params.id)

return {
  title:data.title ,
  description:data.description
}


}



const page =async ({params}) => {

  const data =await getData(params.id)


  return (

<>
<Header/>

   <main style={{ textAlign: "center" }} className="flex">
   <Image width={266} height={260} style={{objectFit:"contain"}} src={data.image} alt={data.title}  />

    <div className="product-details">
      <div style={{ justifyContent: "space-between" }} className="flex">
        <h2>{data.title}</h2>
        <p className="price">${data.price}</p>
      </div>
      <p className="description">
       {data.description}
      </p>
      <button className="flex add-to-cart">
        <FontAwesomeIcon width="1.5rem" icon={faCartPlus} />
        Add To Cart
      </button>
    </div>
  </main>


<Footer/>

</>

 
  
  )
}

export default page