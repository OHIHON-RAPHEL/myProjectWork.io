import React from 'react'

const Form = () => {
  const [formData, setFormData] = React.useState({
    email: "",
  })

  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormdata => ({
      ...prevFormdata,
      [name] : value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
  }
  
  return (
    <div className='flex items-center justify-center rounded h-screen'>
       <div className='w-4/12 grid gap-4'>
          <input
               type="text"
               placeholder="Email"
               name= "email"
               value={formData.email}
               className=' p-4 box-border border rounded m-2'
               onChange={handleChange}
          />
          <button onClick={handleSubmit} className='bg-yellow-400 border-none p-4 text-center no-underline inline-block text-base cursor-pointer rounded mt-4'>Continue</button>
          <button onClick={handleSubmit} className='bg-yellow-400 border-none p-4 text-center no-underline inline-block text-base cursor-pointer mt-20 rounded'>Log in With Facebook</button>
          <p className='font-medium'>For further support you may visit the Help Center or contact our<br></br> customer services team</p>
          <h1 className='text-4xl font-bold pl-44'>REFLEX</h1>
       </div>
    </div> 
  )
}

export default Form