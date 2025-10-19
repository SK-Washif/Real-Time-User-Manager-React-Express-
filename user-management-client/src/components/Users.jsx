import React, { use, useState } from 'react'



const Users = ({userPromise}) => {
  const initialUsers =use(userPromise);
  const [users, setUsers] = useState(initialUsers);
  console.log(users);

  const handleAddUsers = e =>{
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const user = {name, email}
  console.log(user);

  fetch('http://localhost:9000/users',{
    method: 'POST',
    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(data =>{
    console.log("Data after post:", data);
    const newUsers = [...users,data]
    setUsers(newUsers);
    e.target.reset();
  })
}

  return (
    <div>

      <div>
        <form onSubmit={handleAddUsers}>
          <input name='name' type="text" />
          <br />
          <input name='email' type="text" />
          <br />
          <input type="submit" value='Add User' />
          <br />
        </form>
      </div>

      <div>
        {
      users.map(user => <li key={user.id}>{user.name} : {user.email}</li>)        
      }
      </div>
    </div>
  )
}

export default Users