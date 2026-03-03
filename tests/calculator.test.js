const { add, subtract, multiply, divide } = require("../src/calculator");

describe("add()", () => {
    test("additionne deux entiers positifs", () => {
        expect(add(2, 3)).toBe(5);
    });
    test("additionne deux entiers négatifs", () => {
        expect(add(-1, -1)).toBe(-2);
    });
    test("additionne zéro", () => {
        expect(add(0, 5)).toBe(5);
    });
});

describe("divide()", () => {
    test("divise deux entiers", () => {
        expect(divide(10, 2)).toBe(5);
    });
    test("lève une erreur si division par zéro", () => {
        expect(() => divide(10, 0)).toThrow("Division par zéro impossible");
    });
});