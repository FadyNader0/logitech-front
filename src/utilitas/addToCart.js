export const addToCartDB = async (userId, productId , priceProduct , productImage) => {

  try {
    const response = await fetch(
    "https://api.baserow.io/api/database/rows/table/667031/?user_field_names=true",
    {
        method: "POST",
        headers: {
        Authorization: "Token uSWeMUnoCUioCuxC22jTA0skWOpVwQ26",
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
        ID: 1,
        customer: [userId],   
        product: [productId],    
        quantity: 1,
        priceProduct: priceProduct,
        productImage: productImage
        })
    }
    );
    return response;
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
};
