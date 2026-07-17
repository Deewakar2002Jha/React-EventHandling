import React from 'react'

const App = () => {
  function handleButtonClick() {
    // console.log('Button clicked!');
    // alert('Button clicked!');
    // console.log(event);
    // console.log(event.type);
    console.log(event.target)


  }
  return (
    <div>
      <button onClick={handleButtonClick}
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 active:scale-95 transition duration-200">Click Me!</button>
      <button onClick={handleButtonClick}
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 active:scale-95 transition duration-200">Buy Now!</button>
    </div>
  )
}

export default App