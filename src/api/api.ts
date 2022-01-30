import { User } from "../models/User";
import Config from "./api.config.json"

/**
 * Fetch api set on ./api.config.json.
 * 
 * @returns Promise<User[]>
 */
export function getAll(): Promise<User[]> {
    return fetch(Config.url + "?results=" + Config.userNumber)
      .then(response => response.json())
      .then(res => res.results)
  } 