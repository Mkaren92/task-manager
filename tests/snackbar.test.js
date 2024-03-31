import { test, expect } from "vitest";
import SnackbarMixin from "@/mixins/snackbar.js";
const snackbarData = { text: "", snackbar: false, color: "" };

test("$snackbarSuccess - commits correct data to store for success message", () => {
  SnackbarMixin.methods.$snackbarSuccess.call(
    {
      $store: {
        commit: (_, payload) => {
          Object.assign(snackbarData, payload);
        },
      },
    },
    "Success message"
  );

  expect(snackbarData.text).toBe("Success message");
  expect(snackbarData.snackbar).toBe(true);
  expect(snackbarData.color).toBe("green");
});

test("$snackbarError - commits correct data to store for error message", () => {
  SnackbarMixin.methods.$snackbarError.call(
    {
      $store: {
        commit: (_, payload) => {
          Object.assign(snackbarData, payload);
        },
      },
    },
    "Error message"
  );

  expect(snackbarData.text).toBe("Error message");
  expect(snackbarData.snackbar).toBe(true);
  expect(snackbarData.color).toBe("red");
});
