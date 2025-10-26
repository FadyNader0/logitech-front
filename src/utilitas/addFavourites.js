
export const addFavourites = async (userId , productId) => {
    try {
    const response = await fetch(
    "https://api.baserow.io/api/database/rows/table/717090/?user_field_names=true",
    {
        method: "POST",
        headers: {
        Authorization: "Token uSWeMUnoCUioCuxC22jTA0skWOpVwQ26",
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idFake: 1,
            customer: [userId],   
            product: [productId],    
        })
    }
    );
    return response;
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
};