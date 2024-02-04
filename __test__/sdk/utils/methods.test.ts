//Used to define a test case
test("example test", () => {
  // Test logic goes here
});

//An alias for test
it("is an alias for test", () => {
  // Test logic goes here
});

// Used to group related test cases.
describe("grouping tests", () => {
  test("test in group", () => {
    // Test logic goes here
  });
});

//expect: used to make assertions in your tests
test("example test", () => {
  //   expect(2 + 2).toBe(4);
  //   expect("hello").toEqual("hello");
  //   expect(true).toBeTruthy();
  //   expect(undefined).toBeUndefined();
});

//matchers: Jest provides a variety of matchers for making specific types of assertions.
// expect(value).toBe(expected); // Strict equality
// expect(value).toEqual(expected); // Deep equality
// expect(value).toBeTruthy(); // Check if truthy
// expect(value).toBeFalsy(); // Check if falsy
// expect(value).not.toBe(expected); // Check inequality
// expect(value).toBeGreaterThan(expected);

//mock functions: Create and use mock functions for testing.
// const mockFunction = jest.fn();
// mockFunction('param');
// expect(mockFunction).toHaveBeenCalledWith('param');

//async testing: Jest provides ways to handle asynchronous code using async/await, Promise, or done callback.
// test("async test", async () => {
//   const result = await asyncFunction();
//   expect(result).toBe(expected);
// });

//Snapshot Testing: Capture snapshots of components to track changes over time.
// test("snapshot test", () => {
//   const tree = renderer.create(<Component />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

//mock modules: Mock external modules or dependencies.
// jest.mock('axios');
// const axios = require('axios');

// axios.get.mockResolvedValue({ data: 'mocked data' });

//Setup and Teardown: Use beforeEach, afterEach, beforeAll, and afterAll for setup and teardown logic.
beforeEach(() => {
  // Setup logic before each test
});

afterEach(() => {
  // Teardown logic after each test
});

beforeAll(() => {
  // Setup logic before all tests
});

afterAll(() => {
  // Teardown logic after all tests
});
