import React, { use } from 'react'



const Users = ({userPromise}) => {
  const users =use(userPromise)

  const handleAddUsers = e =>{
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const user = {name, email}
  console.log(user);
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