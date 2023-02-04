import Axios from "axios";
export const getPhotos = () =>
  Axios.get("https://jsonplaceholder.typicode.com/photos");
