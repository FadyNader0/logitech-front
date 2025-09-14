import {updateUser} from "./apiService";

export const editNumberMessagesInDb = async (userID , userData)=>{
    try {
      await updateUser(userID , userData);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }

}