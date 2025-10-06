export const addMessage = async (messageData) => {
  try {
    const response = await fetch("https://api.baserow.io/api/database/rows/table/672455/?user_field_names=true", { 
      method: "POST",
      headers: {
        Authorization: "Token uSWeMUnoCUioCuxC22jTA0skWOpVwQ26",
        "Content-Type": "application/json"

      },
      body: JSON.stringify(messageData) 
    });

    if (!response.ok) {
      console.log(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error adding message:", error);
  }
};
