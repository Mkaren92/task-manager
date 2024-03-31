import FilterMixin from "@/mixins/filtering.js";
import { test, expect } from "vitest";

const tasks = [
  { id: 1, isComplete: true, priority: "high" },
  { id: 2, isComplete: false, priority: "medium" },
  { id: 3, isComplete: true, priority: "low" },
];
const filterTasksFunc = FilterMixin.methods.filterTasks;

test("filterTasks - filters tasks by completion status", () => {
  const filteredTasks = filterTasksFunc(tasks, { isComplete: true });
  expect(filteredTasks.length).toBe(2);
  expect(filteredTasks.map((task) => task.id)).toEqual([1, 3]);
});

test("filterTasks - filters tasks by priority", () => {
  const filteredTasks = filterTasksFunc(tasks, {
    priority: ["high", "medium"],
  });
  expect(filteredTasks.length).toBe(2);
  expect(filteredTasks.map((task) => task.id)).toEqual([1, 2]);
});

test("filterTasks - filters tasks by both completion status and priority", () => {
  const filteredTasks = filterTasksFunc(tasks, {
    isComplete: true,
    priority: ["high", "low"],
  });
  expect(filteredTasks.length).toBe(2);
  expect(filteredTasks.map((task) => task.id)).toEqual([1, 3]);
});
