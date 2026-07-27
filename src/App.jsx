import React from 'react'
import { EventProps } from './Components/EventProps'
import CountButton from './Components/CountButton'

const App = () => {
  function handleButtonClick() {
    alert("thanks for clicking button")


  }

  return (
    <div className=''>
      {/* <button onClick={handleButtonClick}
        className="">Click Me!</button> */}

      <CountButton />
    </div>
  )
}

export default App