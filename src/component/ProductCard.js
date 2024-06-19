import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail=()=>{
    navigate(`product/${item.id}`)
  }
  return (
    <div className='product-card' onClick={showDetail}>
      <div className='thum'><img src={item?.img} alt='' /></div>
      <div className='choice'>{item?.choice ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div className='new-product'>신제품</div>
    </div>
  )
}

export default ProductCard
