import "@testing-library/jest-dom";
import { filterArray } from "@/sdk/utils";

describe("filterArray", () => {
  test("removes duplicate values from the array", () => {
    const inputArray = [1, 2, 3, 2, 4, 5, 6, 1];
    const result = filterArray(inputArray);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("returns empty array for undefined input", () => {
    const result = filterArray(undefined);
    expect(result).toEqual([]);
  });

  test("returns empty array for empty input array", () => {
    const result = filterArray([]);
    expect(result).toEqual([]);
  });
});
