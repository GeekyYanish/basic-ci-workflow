const add = require("./index");

test("adds two numbers correctly", () => {
    expect(add(5, 3)).toBe(8);
});

test("adds negative numbers correctly", () => {
    expect(add(-2, -3)).toBe(-5);
});