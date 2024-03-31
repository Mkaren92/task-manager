import { test, expect } from "vitest";
import SortingMixin from "@/mixins/sorting.js";

const tasks = [
  { id: 1, priority: "low", duedate: "2024-03-29" },
  { id: 2, priority: "medium", duedate: "2024-04-01" },
  { id: 3, priority: "high", duedate: "2024-03-31" },
  { id: 4, priority: "low", duedate: "2024-04-31" },
  { id: 5, priority: "high", duedate: "2024-04-15" },
];
const sortTasksFunc = SortingMixin.methods.sortTasks;

test("sortTasks - sorts tasks by priority in ascending order", () => {
  const sortedTasks = sortTasksFunc(tasks, "priority-asc");
  expect(sortedTasks).toEqual([
    { id: 4, priority: "low", duedate: "2024-04-31" },
    { id: 1, priority: "low", duedate: "2024-03-29" },
    { id: 2, priority: "medium", duedate: "2024-04-01" },
    { id: 5, priority: "high", duedate: "2024-04-15" },
    { id: 3, priority: "high", duedate: "2024-03-31" },
  ]);
});

test("sortTasks - sorts tasks by priority in descending order", () => {
  const sortedTasks = sortTasksFunc(tasks, "priority-desc");
  expect(sortedTasks).toEqual([
    { id: 5, priority: "high", duedate: "2024-04-15" },
    { id: 3, priority: "high", duedate: "2024-03-31" },
    { id: 2, priority: "medium", duedate: "2024-04-01" },
    { id: 4, priority: "low", duedate: "2024-04-31" },
    { id: 1, priority: "low", duedate: "2024-03-29" },
  ]);
});

test("sortTasks - sorts tasks by due date in ascending order", () => {
  const sortedTasks = sortTasksFunc(tasks, "duedate-asc");
  expect(sortedTasks).toEqual([
    { id: 1, priority: "low", duedate: "2024-03-29" },
    { id: 3, priority: "high", duedate: "2024-03-31" },
    { id: 2, priority: "medium", duedate: "2024-04-01" },
    { id: 5, priority: "high", duedate: "2024-04-15" },
    { id: 4, priority: "low", duedate: "2024-04-31" },
  ]);
});

test("sortTasks - sorts tasks by due date in descending order", () => {
  const sortedTasks = sortTasksFunc(tasks, "duedate-desc");
  expect(sortedTasks).toEqual([
    { id: 4, priority: "low", duedate: "2024-04-31" },
    { id: 5, priority: "high", duedate: "2024-04-15" },
    { id: 2, priority: "medium", duedate: "2024-04-01" },
    { id: 3, priority: "high", duedate: "2024-03-31" },
    { id: 1, priority: "low", duedate: "2024-03-29" },
  ]);
});

test("sortTasks - sorts tasks by task ID in descending order by default", () => {
  const sortedTasks = sortTasksFunc(tasks);
  expect(sortedTasks).toEqual([
    { id: 5, priority: "high", duedate: "2024-04-15" },
    { id: 4, priority: "low", duedate: "2024-04-31" },
    { id: 3, priority: "high", duedate: "2024-03-31" },
    { id: 2, priority: "medium", duedate: "2024-04-01" },
    { id: 1, priority: "low", duedate: "2024-03-29" },
  ]);
});
