import React from 'react'
import { EventProps } from './Components/EventProps'

const App = () => {
  function handleButtonClick() {
    alert("thanks for clicking button")


  }

  return (
    <div className=''>
      {/* <button onClick={handleButtonClick}
        className="">Click Me!</button> */}

      <EventProps />
    </div>
  )
}

export default App