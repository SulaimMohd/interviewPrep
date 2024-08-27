import {  useState } from "react"
import UserCard from "./Components/UserCard"

const fetchUser = (users: Array<{}>, setUsers: any)=>{
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
      {
        users.map((item: {name: {first: string, last: string}, picture:{medium: string}})=>{
            return <UserCard name={item.name.first + item.name.last} url={item.picture.medium} />
            // return <UserCard />
        })
      }
    </>
  )
}

export default App
