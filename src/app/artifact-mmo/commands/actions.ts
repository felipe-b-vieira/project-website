import { makeBodyRequest, makeRequest } from "../api";

export const move = (characterName: string, x: number, y: number) => {
  makeBodyRequest("POST", characterName, "move", { x, y });
};

export const fight = (characterName: string) => {
  makeRequest("POST", characterName, "fight");
};
