import axios from "axios";

const Api = axios.create({
  baseURL: "https://api.baserow.io/api", 
  headers: {
    Authorization: `Token uSWeMUnoCUioCuxC22jTA0skWOpVwQ26`,  
    "Content-Type": "multipart/form-data"
  },
});

export default Api;
