import {useState} from 'react'
import Content from '../../components/Content'

const Cart = ({checkoutItem, setCheckoutItem}) => {
  // const [content, setContent] = useState([])

  // function addContent(newContent) {
  //   setContent(prevContent => {
  //     return [...prevContent, newContent]
  //   })
  // }

  return (
    <>
      {checkoutItem.map((item) => {
        return (
          <Content item={item} setCheckoutItem={setCheckoutItem} />
        )
      })}
    </>
  )
}

export default Cart
