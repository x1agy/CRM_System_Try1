import React from "react";
import UserCard from "./GetUser";
import { userImageUrl } from "../Consts/UserStandartImage";
function ShowUsers({filteredUsers, deleteUser}){

    return(
        filteredUsers.map(item => {
            return(
                <UserCard 
                    key={item.id}
                    name={item.name}
                    mail={item.mail}
                    image={item.userImage || userImageUrl}
                    position={item.position}
                    description={item.description}
                    id={item.id}
                    deleteUser={(i) => deleteUser(i)}
                />
            )
        })
    )
}

export default ShowUsers;