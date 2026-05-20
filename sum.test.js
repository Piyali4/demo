import sum from "./sum.js";

describe("sum", () => {
    it("should return the sum of two numbers", () => {
        expect(sum(1, 2)).toBe(3);
    });

    test("sum of -1 and +2 should be 3", () => {
        expect(sum(-1, 2)).toBe(1);
    });
});



