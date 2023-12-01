import Content from '../../components/Content'

const Cart = ({checkoutItem, setCheckoutItem}) => {
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