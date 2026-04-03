import { test, expect } from "@playwright/test";
import { airportCityCode } from "../helpers/airportHelper";

test.describe("airportCityCode", () => {
  test("returns city for ORD", () => {
    expect(airportCityCode("ORD")).toBe("Chicago");
  });

  test("returns city for JFK", () => {
    expect(airportCityCode("JFK")).toBe("New York");
  });

  test("returns city for MIA", () => {
    expect(airportCityCode("MIA")).toBe("Miami");
  });

  test("returns city for LAX", () => {
    expect(airportCityCode("LAX")).toBe("Los Angeles");
  });

  test("is case-insensitive", () => {
    expect(airportCityCode("ord")).toBe("Chicago");
  });

  test("returns undefined for unknown code", () => {
    expect(airportCityCode("XYZ")).toBeUndefined();
  });

  test("returns undefined for empty string", () => {
    expect(airportCityCode("")).toBeUndefined();
  });

  test("handles codes with surrounding whitespace as unknown", () => {
    expect(airportCityCode(" ORD ")).toBeUndefined();
  });
});
