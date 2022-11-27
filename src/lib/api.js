import axios from "axios";
import { API_URL } from "./api-url";

export const api = axios.create({ baseURL: API_URL });
