import axios from "axios";

export const removeFromCart = async (rowId) => {
  try {
    await axios.delete(
      `https://api.baserow.io/api/database/rows/table/667031/${rowId}/`,
      {
        headers: {
          Authorization: "Token uSWeMUnoCUioCuxC22jTA0skWOpVwQ26",
        },
      }
    );
  } catch (err) {
    console.error("Error removing item from cart:", err);
  }
};