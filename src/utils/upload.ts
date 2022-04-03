import { imageUploadAPI } from "../pages/api/api";
import { API_ENDPOINT } from "../constants";
import { ReturnObj } from "../types/type";

const fileUpload = async (files: FileList): Promise<ReturnObj> => {
  const response = await imageUploadAPI(files);
  const result = await response.json();
  const { id, url } = result[0];
  const imageURL = `${API_ENDPOINT}${url}`;

  return { id, url: imageURL };
};

export default fileUpload;
