import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { getAcronymFromString } from "../string.ts";

describe("getAcronymFromString", () => {
  it("should return an acronym from a string", () => {
    assert.equal(getAcronymFromString("hello world"), "HW");
    assert.equal(getAcronymFromString("hello"), "H");
    assert.equal(getAcronymFromString("hello world!"), "HW");
    assert.equal(getAcronymFromString("hello world! 123"), "HW1");
  });

  it("should return 'NA' if the string is empty", () => {
    assert.equal(getAcronymFromString(""), "NA");
  });
});
