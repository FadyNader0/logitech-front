import {getMessages} from "./apiService";


export const getAllMessages = async (userID)=>{
    try {
      const response = await getMessages();
      if(!userID) return [];
      const filteredMessages = response.data.results
      .filter((msg) => msg?.customer?.[0]?.id === userID)
      .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

      return filteredMessages;
    } catch (error) {
      console.error("Error fetching messages:", error);
    }

}