import axios from "axios";
import {environment} from "../environments/enviroment";

export const getUser = async (id) => {
  return await axios.get(`${environment.url}${id}`).then(response => response.data).catch(error => console.log(error));
}

export const login = async ({user, password}) => {
    return await axios.post(`${environment.url}login`, {user, password}).then(response => response.data).catch(error => console.log(error));
}
