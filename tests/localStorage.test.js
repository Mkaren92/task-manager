import { localStoragePlugin } from "@/plugins/localStorage";
import { test, expect } from "vitest";

const data = [
  { id: 1, title: "Task 1" },
  { id: 2, title: "Task 2" },
];

test("localStoragePlugin initializes tasks from local storage when plugin is loaded", async () => {
  global.localStorage = {
    getItem: () => JSON.stringify(data),
  };
  const store = {
    commit: (mutationName, payload) => {
      expect(mutationName).toBe("task/initializeTasks");
      expect(payload).toEqual(data);
    },
  };
  await localStoragePlugin(store);
  delete global.localStorage;
});
