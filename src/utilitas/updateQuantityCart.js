import axios from "axios";


export const updateQuantityCart = async (rowId, quantity) => {
  try {
    await axios.patch(
      `https://api.baserow.io/api/database/rows/table/667031/${rowId}/?user_field_names=true`,
      {
        quantity: quantity, 
      },
      {
        headers: {
          Authorization: "Token uSWeMUnoCUioCuxC22jTA0skWOpVwQ26",
          "Content-Type": "application/json",
        },
      }
    );

  } catch (err) {
    console.error("Error in update quantity in cart:", err);
  }
};
