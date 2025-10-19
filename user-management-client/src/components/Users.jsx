import React, { use } from 'react'

const Users = ({userPromise}) => {
  const users =use(userPromise)
  return (
    <div>

      {
      users.map(user => <li key={user.id}>{user.name} : {user.email}</li>)        
      }
    </div>
  )
}

export default Users