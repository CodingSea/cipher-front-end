import {deleteFriend} from "../../../lib/userApi"
import { jwtDecode } from "jwt-decode"

const DeleteBtn = ({friendId})=>{ 

const  handelDelete =async ()=> {
try {

    const token = localStorage.getItem("token")
     const userId = jwtDecode(token).id
     await deleteFriend(userId, friendId)
     
} catch (error) {
    console.log(error)
}    

}
return(<>


<button onClick={handelDelete}>X</button>
</>)

}

export default DeleteBtn