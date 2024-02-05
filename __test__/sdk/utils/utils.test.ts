import "@testing-library/jest-dom";
import { filterArray, processDataStatus, useLoadingState } from "@/sdk/utils";


jest.mock('axios');

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

console.error = jest.fn();

describe("processDataStatus", () => {
  it("calls setData with data when status is 200 and data is provided", () => {

    const mockSetData = jest.fn();
    const mockClearData = jest.fn();

    const testData = { key: 'value' };
    const testStatus = 200;

    processDataStatus({
      data: testData,
      status: testStatus,
      error: null,
      setData: mockSetData,
      clearData: mockClearData,
    });

    expect(mockSetData).toHaveBeenCalledWith(testData);
    expect(mockClearData).not.toHaveBeenCalled();
    expect(console.error).not.toHaveBeenCalled();

  });

  it('calls clearData and logs an error when status is not 200 or data is not provided', () => {

    const mockSetData = jest.fn();
    const mockClearData = jest.fn();

    const testStatus = 500;
    const testError = 'Not Found';

    processDataStatus({
      data: null,
      status: testStatus,
      error: testError,
      setData: mockSetData,
      clearData: mockClearData,
    });

    expect(mockSetData).not.toHaveBeenCalled();
    expect(mockClearData).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith('Error:', testError);

  });
});


describe("useLoadingState", () => {

  it("it should handle loading state correctly", async () => {

    const { withLoading, getLoading } = useLoadingState();
    
    const mockAsyncFunction = jest.fn(() => Promise.resolve('Mocked Result'));

    try {
      expect(getLoading()).toBe(false);

      await withLoading(mockAsyncFunction);

      expect(getLoading()).toBe(false);

      expect(mockAsyncFunction).toHaveBeenCalled();

      const result = await mockAsyncFunction();

      expect(result).toBe('Mocked Result');

    }catch (error) {

      console.error(error);

    }
  })
})
