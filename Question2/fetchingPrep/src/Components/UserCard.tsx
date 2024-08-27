
type user = {
  name: string,
  url: string
}
export default function UserCard({name, url}: user) {
  return (
    <div>
      <img src={url} alt="" />
      <p>{name}</p>

    </div>
   
  )
}


