
function App() {

  const handleGetUsers = async () => {
    const response = await fetch("http://127.0.0.1:3000/users")
    const data = await response.json()
    console.log("handleGetUsers", data)
  }

  const handleGetUserById = async (pUserId: number) => {
    const response = await fetch(`http://127.0.0.1:3000/users/${pUserId}`)
    const data = await response.json()
    console.log("handleGetUserById", data)
  }

  const handlePostUser = async (pUser: { id: number, name: string }) => {
    const response = await fetch("http://127.0.0.1:3000/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pUser),
    })
    const data = await response.json()
    console.log("handlePostUser", data)
  }

  const handlePutUserById = async (pUser: { id: number, name: string }) => {
    const response = await fetch(`http://127.0.0.1:3000/users/${pUser.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pUser),
    })
    const data = await response.json()
    console.log("handlePutUserById", data)
  }

  const handleDeleteUserById = async (pUserId: number) => {
    const response = await fetch(`http://127.0.0.1:3000/users/${pUserId}`, {
      method: 'DELETE'
    })
    const data = await response.text()
    console.log("handleDeleteUserById", data)
  }

  return (
    <>
      <button onClick={handleGetUsers}>Get Users</button>
      <button onClick={() => handleGetUserById(1)}>Get User By Id</button>
      <button onClick={() => handlePostUser({ id: 4, name: "Orkun" })}>Post User</button>
      <button onClick={() => handlePutUserById({ id: 1, name: "Huseyin Updated" })}>Put User By Id</button>
      <button onClick={() => handleDeleteUserById(4)}>Delete User By Id</button>
    </>
  )
}

export default App