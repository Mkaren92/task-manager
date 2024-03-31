import { test, expect } from "vitest";
import FormatMixin from "@/mixins/formatting.js";

test("formatDate - formats date correctly", () => {
  const inputDate = new Date(
    "Sat Mar 30 2024 00:00:00 GMT+0400 (Armenia Standard Time)"
  );
  const formattedDate = FormatMixin.methods.formatDate(inputDate);
  expect(formattedDate).toBe("2024-03-30");
});
