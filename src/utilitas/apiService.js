import Api from "./axios";

export const getUser = () => Api.get(`/database/rows/table/659208/?user_field_names=true`);
export const addUser = (data) => Api.post("/database/rows/table/659208/?user_field_names=true", data);
export const deleteUser = (id) => Api.delete(`/database/rows/table/659208/${id}/`);
export const updateUser = (id, data) => Api.patch(`/database/rows/table/659208/${id}/`, data);
export const uploadImage = (formData) => Api.post("user-files/upload-file/", formData );
export const getProducts = () => Api.get(`https://api.baserow.io/api/database/rows/table/659209/?user_field_names=true`);
export const getCatogries = () => Api.get(`https://api.baserow.io/api/database/rows/table/662267/?user_field_names=true`);
export const getFromCart = () => Api.get(`https://api.baserow.io/api/database/rows/table/667031/?user_field_names=true`);
