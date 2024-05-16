import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [list, setList ] = useState([{
    title: 'Walk the dog',
    id: 1,
  },
  {
    title:'Water the plants',
    id: 2
  }
])

   const [ task, setTask ] = useState('');

   const changeTask =  (e) => {
      setTask(e.target.value);
   }

   const updateToList = (e) => {
      e.preventDefault();
      const maxId = list[list.length - 1].id
      setList(prevState => {
        return [
          ...prevState,
          {
            title: task,
            id: maxId + 1
          }
        ]
      })
      console.log(list);
   }

   const removeFromList = (elementClickedId) => {
     console.log(elementClickedId);
     const filteredList = list.filter(el => elementClickedId != el.id);
     setList(filteredList);
   }


  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" placeholder="Add your task" value={task} onChange={changeTask}/>
        <div>
          <button onClick={updateToList}>Submit</button>
        </div>
      </div>
      <ul> 
        {
          list.map(val => {
            return  (
              <li key={val.id}>
              <span>{val.title}</span>
              <button onClick={() => removeFromList(val.id)}>Delete</button>
              </li>
            )
          })
        }

      </ul>
    </div>
  
    </>
  )
}

export default App
