import { describe, expect, it } from "vitest";
import { shuffleArray } from "@/lib/utils";

describe("shuffleArray", () => {
  it("returns a new array with same members", () => {
    const source = [1, 2, 3, 4, 5];
    const shuffled = shuffleArray(source);

    expect(shuffled).toHaveLength(source.length);
    expect(shuffled).not.toBe(source);
    expect([...shuffled].sort()).toEqual([...source].sort());
  });

  it("does not mutate the source array", () => {
    const source = ["a", "b", "c"];
    const before = [...source];
    shuffleArray(source);
    expect(source).toEqual(before);
  });
});
