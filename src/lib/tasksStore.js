import { TodoistApi } from "@doist/todoist-api-typescript";
import { writable } from "svelte/store";

function createTaskStore() {
  const apiKey = window.prompt("Enter a Todoist API key");
  const { subscribe, set } = writable([]);
  try {
    getTasks(apiKey).then((tasks) => {
      set(tasks);
    });
  } catch (e) {
    window.alert("Something went wrong!" + e.toString());
  }

  return { subscribe };
}

async function getTasks(apiKey) {
  const api = new TodoistApi(apiKey);

  return (await api.getTasks()).map((t) => ({
    id: t.id,
    title: t.content,
    description: t.description,
  }));
}

export const tasks = createTaskStore();
