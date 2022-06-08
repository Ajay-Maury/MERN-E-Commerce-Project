import React from 'react'
import { useState } from 'react'

const BrandCreate = () => {
const [name,setName] = useState("")
const [logo,setLogo] = useState("")

  function handleBrand() {
    const Brand = {
BrandName : name, BrandLogo : logo
    }
    console.log(Brand)
  }
  return (
    <div>
      Brand Name : <input type="text" name="name" id="name"  onInput={(e)=>setName(e.target.value)} />
      Brand Logo : <input type="text" name="logo" id="logo" onInput={(e)=>setLogo(e.target.value)} />
      <button onClick={handleBrand}>Create Brand</button>
    </div>
  )
}

export default BrandCreate
