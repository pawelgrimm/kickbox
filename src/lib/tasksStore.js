import { TodoistApi } from "@doist/todoist-api-typescript";
import { writable } from "svelte/store";

async function createTaskStore() {
  const apiKey = window.prompt("Enter a Todoist API key");
  let tasks = [];
  try {
    tasks = await getTasks(apiKey);
  } catch (e) {
    window.alert("Something went wrong!" + e.toString());
  }

  const { subscribe, set, update } = writable(tasks);

  return { subscribe };
}

async function getTasks(apiKey) {
  const api = new TodoistApi(apiKey);

  return await api.getTasks().then((tasks) =>
    tasks
      .filter((t) => t.labels.includes("kickbox"))
      .map((t) => ({
        id: t.id,
        title: t.content,
        description: t.description,
      }))
  );
}

export const tasks = await createTaskStore();
