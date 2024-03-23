import React from 'react'

interface User{
  id: number;
  name: string;
  email:string;
}
const page = async() => {

  const response= await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[]  =await response.json();
  return (
    <div>
    <h1>Users</h1>
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}  <br />  {user.email}  <br /><br /></li>
      ))}
    </ul>
  </div>
  )
}

export default page;