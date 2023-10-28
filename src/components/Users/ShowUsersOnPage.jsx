import React from "react";
import UserCard from "./GetUser";
import { userImageUrl } from "../Consts/UserStandartImage";
function ShowUsers({filteredUsers, deleteUser, editUser}){

    return(
        filteredUsers.map(item => {
            return(
                <UserCard 
                    key={item.id}
                    name={item.name}
                    mail={item.mail}
                    userImage={item.userImage || userImageUrl}
                    position={item.position}
                    description={item.description}
                    id={item.id}
                    deleteUser={(i) => deleteUser(i)}
                    editUser={(id, key, value) => editUser(id, key, value)}
                />
            )
        })
    )
}

export default ShowUsers;