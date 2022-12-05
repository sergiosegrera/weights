import PocketBase from "pocketbase";

export const client = new PocketBase(import.meta.env.VITE_API_HOST);

export async function getExercises() {
  return await client.collection("exercises").getFullList();
}

export async function getSets() {
  // TODO: Pagination
  return await client
    .collection("sets")
    .getFullList(200, { expand: "exercise" });
}

export async function createExercise(exercise) {
  return await client
    .collection("exercises")
    .create({ ...exercise, user: "n2thn3nfai29xkw" });
}

export async function createSet(set) {
  return await client
    .collection("sets")
    .create({ ...set, user: "n2thn3nfai29xkw" });
}
