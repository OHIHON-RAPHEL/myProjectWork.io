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
    <div className='flex items-center justify-center min-h-screen'>
       <div className='w-full max-w-lg px-4'>
          <input
               type="text"
               placeholder="Email"
               name= "email"
               value={formData.email}
               className='w-full p-4 border rounded m-2'
               onChange={handleChange}
          />
          <button onClick={handleSubmit} className='w-full bg-yellow-400 border-none p-4 text-center cursor-pointer rounded mt-4'>
            Continue
          </button>
          <button onClick={handleSubmit} className='w-full bg-yellow-400 border-none p-4 text-center cursor-pointer mt-4 rounded'>
            Log in With Facebook
          </button>
          <p className='font-medium text-center mt-4'>
            For further support you may visit the Help Center or contact our<br /> customer services team
          </p>
          <h1 className='text-4xl font-bold text-center mt-8 md:mt-12'>REFLEX</h1>
       </div>
    </div> 
  )
}

export default Form;
