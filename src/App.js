import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AddUserToData from "./Pages/AddUserToData";
import MainPage from "./Pages/MainPage";

function App() {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filterWord, setFilterWord] = useState("");
  const [usersCount, setUsersCount] = useState(0);
  const [usersData, setUsersData] = useState([])

  useEffect(() => {
    async function getUsersDataBase(){
      const response = await fetch("http://localhost:8000/users");
      const dataBase = await response.json();
      setUsersData(dataBase)
    }
    getUsersDataBase();
  }, [usersCount])

  useEffect(() =>{
    setFilteredUsers(
      usersData.filter(item => item.name.toLowerCase().indexOf(filterWord.toLowerCase()) !== -1)
    )
  }, [usersData, filterWord])

  async function addUserToData(user){
    await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
  }
  async function deleteUser(id){
      await fetch(`http://localhost:8000/users/${id}`, {
        method: "DELETE"
      })
      setUsersCount(usersCount - 1)
  }

  async function editUser(id, key, value){
    const user = usersData.find(item => item.id === id);
    user[key] = value;
    await fetch(`http://localhost:8000/users/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(user)
    })
    setUsersCount(usersCount + 1)
  }

  return (
    <Routes>
      <Route 
        path="/addUserToData" 
        element={
          <AddUserToData 
            addUserToData={(user) => addUserToData(user)}
          />
        }></Route>
 
      <Route 
        path="/" 
        element={
          <MainPage 
            filteredUsers={filteredUsers}
            setFilterWord={(i) => setFilterWord(i)}
            deleteUser={(i) => deleteUser(i)}
            editUser={(id, key, value) => editUser(id, key, value)}
          />
        }
      >
      </Route>
    </Routes>
  );
}

export default App;
