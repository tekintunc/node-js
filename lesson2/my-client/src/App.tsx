import './App.css'
function App() {


  const handleGetUsers = () =>{
    const response = fetch("http://127.0.0.1:3000/users")
    const data = response.json()
    console.log(data)
  }

  const handleGetUserById = (pUserId: number) =>{
    console.log("handleGetUserById", pUserId)
  }

  const handlePostUser = (pUser:{id:number, name: string}) =>{  
    console.log("handlePostUser", pUser )
  }

  const handlePutUserById = (pUser:{id:number, name: string}) =>{
    console.log("handlePostUserById" , pUser)
  }

  const handleDeleteUserById = (pUserId: number) =>{
    console.log("handleGetUser", pUserId)
  }
  

  return (
    <>    
     <button onClick={handleGetUsers}>Get Users</button>     
     <button onClick={() => handleGetUserById(3)}>Get User By Id</button>
     <button onClick={() => handlePostUser({id:5, name:"Mahmut"})}>Post User</button>
     <button onClick={() => handlePutUserById ({id:5, name:"Mahmut"})}>Put User By Id</button>
     <button onClick={() => handleDeleteUserById(5)}>Delete User By Id</button>
    </>
  )
}

export default App
