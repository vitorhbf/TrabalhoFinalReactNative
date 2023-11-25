import axios from "axios";

const ip = ""

export const jsonServerDb = axios.create({
  baseURL: `http://${ip}:3000`,
});

