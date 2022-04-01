import { TodoistApi } from "@doist/todoist-api-typescript";
import { writable } from "svelte/store";

function createTaskStore() {
  const { subscribe, set } = writable([]);

  const fetch = (apiKey) => {
    try {
      return getTasks(apiKey).then((tasks) => {
        set(tasks);
      });
    } catch (e) {
      console.log(e.toString());
    }
  };

  return { subscribe, fetch };
}

async function getTasks(apiKey) {
  const api = new TodoistApi(apiKey);

  if (!apiKey) {
    return [];
  }

  return (await api.getTasks()).map((t) => ({
    id: t.id,
    title: t.content,
    description: t.description,
  }));
}

export const tasks = createTaskStore();
