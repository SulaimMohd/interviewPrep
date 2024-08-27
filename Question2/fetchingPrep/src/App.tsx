import {  useState } from "react"

const fetchUser = (users, setUsers)=>{
  fetch('https://randomuser.me/api')
    .then(res => res.json())
    .then(data =>{
      const newData=  [
        ...users,
        data.results[0]
      ]
      setUsers(newData)
    })
}


function App() {
  const [users, setUsers] = useState([])
  console.log(users)

  return (
    <>
      <button onClick={()=> fetchUser(users, setUsers)}>
        Fetch User
      </button>
    </>
  )
}

export default App
