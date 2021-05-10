import axios from "axios";
import { generateId } from "./string";

const api = axios.create({
  baseURL: "http://localhost:3001/",
});

export async function postTask(task) {
  return api.post("/task", {
    data: { id: generateId(), ...task },
  });
}
