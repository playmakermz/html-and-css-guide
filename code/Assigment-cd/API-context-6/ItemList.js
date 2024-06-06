import { useContext } from "react";
import {daftarUser} from "./App"

function ItemList(){

    let {userList} = useContext(daftarUser)
    
    return(
        <>
        {userList.map(user => (
            <li key={user.id}>
                <p>
                    Name:
                    {user.first_name}
                    {user.last_name}
                </p>
                <p>
                    Email:
                    {user.email}
                </p>
                {/* Add more user data fields as needed */}
        <p>
        Skill:  
        {user.employment.key_skill}
        </p>
            </li>
        ))}
        </>
    )
}

export default ItemList