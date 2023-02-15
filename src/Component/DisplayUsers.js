import React from 'react'

const DisplayUsers = ({users,userVisited,usersPerPage}) => {
  return (
    <div>
        {
        users.slice(userVisited, userVisited + usersPerPage)
        .map((user) => {
            return (
            <table className="user">
              <tr>
                <td>Name: {user.name}</td>
                <td>Email: {user.email}</td>
                <td>Password: {user.password}</td>
                <td>ConPassword: {user.confirmPassword}</td>
              </tr>
            </table>
            )})
        }
    </div>
  )
}

export default DisplayUsers