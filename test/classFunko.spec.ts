import { describe, expect, test } from "vitest";
import { Funko } from "../src/classFunko.js";
import { GenreFunko } from "../src/enumGenreFunko.js";

describe("class Funko tests", () => {
  const funko1 = new Funko(
    1,
    "Jon Snow",
    "Winter is coming",
    "Pop!",
    GenreFunko.SERIES,
    "Game of Thrones",
    20,
    true,
    ["Limited Edition"],
    120,
  );

  const funko2 = new Funko(
    1,
    "Daenertys Targaryen",
    "Winter is coming",
    "Pop!",
    GenreFunko.SERIES,
    "Game of Thrones",
    10,
    false,
    [],
    70,
  );

  const funko3 = new Funko(
    1,
    "Jon Snow",
    "Winter is coming",
    "Pop!",
    GenreFunko.SERIES,
    "Game of Thrones",
    30,
    true,
    [],
    30,
  );

  const funko4 = new Funko(
    1,
    "Tyrion Lannister",
    "Winter is coming",
    "Pop!",
    GenreFunko.SERIES,
    "Game of Thrones",
    40,
    false,
    ["Bloody Edition"],
    15,
  );

  test("should have create a Funko", () => {
    expect(funko1).toBeDefined();
    expect(funko1).toBeInstanceOf(Funko);
    expect(funko1.id_).toBe(1);
    expect(funko1.name_).toBe("Jon Snow");
    expect(funko1.description_).toBe("Winter is coming");
    expect(funko1.category_).toBe("Pop!");
    expect(funko1.genre_).toBe(GenreFunko.SERIES);
    expect(funko1.franchise_).toBe("Game of Thrones");
    expect(funko1.numberID_).toBe(20);
    expect(funko1.exclusive_).toBe(true);
    expect(funko1.specialCharacteristics_).toEqual(["Limited Edition"]);
    expect(funko1.price_).toBe(120);
  });

  test("should have a method to check very high shop price", () => {
    expect(funko1.getMarketValue()).toBe("Very High");
  });

  test("should have a method to check high shop price", () => {
    expect(funko2.getMarketValue()).toBe("High");
  });

  test("should have a method to check medium shop price", () => {
    expect(funko3.getMarketValue()).toBe("Medium");
  });

  test("should have a method to check low shop price", () => {
    expect(funko4.getMarketValue()).toBe("Low");
  });

  test("should have a method to show the funko information", () => {
    expect(funko1.showInfo()).toBe(true);
  });
});
