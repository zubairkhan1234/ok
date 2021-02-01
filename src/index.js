import React, { useState } from "react";
import reactDOM from "react-dom";


function App() {
  
  const [Data, setData] = useState([])
  React.useEffect(() => {
    const userData = localStorage.getItem('Data')
    if (userData) {
      setData(JSON.parse(userData))
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem('Data', JSON.stringify(Data))
  })  
  function TodoApp(e) {
    e.preventDefault()

    var todoText = document.getElementById('TodoText').value
    // console.log(todoText)

    setData((previouseVlaue) => {
      return previouseVlaue.concat(todoText)
    })
    console.log()
    // var text = document.createElement('li')
    // text.innerHTML = todoText
    // document.getElementById('ListPost').innerHTML = text
  }

  const remove = () => {

  }





  return (
    <div>
      <form onSubmit={TodoApp}>
        <input type="text" id="TodoText" /><button > Add </button>
      </form>

      {Data.map((value, index) => {

        console.log(value, index)
        return (
          <div key={index}>
            <span>{value}</span><button onClick={remove}>Delete</button>
          </div>
        )
      })}

    </div>
  )
}





reactDOM.render(<App />, document.getElementById('root'))