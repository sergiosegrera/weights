import PocketBase from "pocketbase";
import { getColorName } from "../utils/colors";

export const client = new PocketBase(import.meta.env.VITE_API_HOST || "");

export function isAuthValid() {
  return client.authStore.isValid;
}

export function authClear() {
  client.authStore.clear();
}

export function getUserPicture() {
  return client.authStore.model.avatarUrl;
}

export async function authRefresh() {
  return await client.collection("users").authRefresh();
}

export async function getAuthMethods() {
  return await client.collection("users").listAuthMethods();
}

export async function authWithOAuth2(name, code, codeVerifier, redirectUrl) {
  return await client
    .collection("users")
    .authWithOAuth2(name, code, codeVerifier, redirectUrl);
}

export async function updateUser(id, data) {
  return await client.collection("users").update(id, data);
}

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
    .create({ ...exercise, user: client.authStore.model.id });
}

export async function createSet(set) {
  return await client
    .collection("sets")
    .create({ ...set, user: client.authStore.model.id });
}

export async function deleteExercise({ id }) {
  return await client.collection("exercises").delete(id);
}

export async function deleteSet({ id }) {
  return await client.collection("sets").delete(id);
}

export async function getSetsCSV() {
  const data = await client
    .collection("sets")
    .getFullList(200, { expand: "exercise" });

  let csv =
    "data:text/csv;charset=utf-8,Exercise,Time,Color,Repetitions,Weight\n";
  data.forEach(
    (set) =>
      (csv += `${set.expand.exercise.name},${set.created},${getColorName(
        set.expand.exercise.color
      )},${set.repetitions},${set.weight}\n`)
  );

  return csv;
}
