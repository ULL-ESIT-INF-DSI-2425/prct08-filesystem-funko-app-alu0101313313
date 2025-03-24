import { describe, test, expect } from "vitest";
import { FunkoCollection } from "../src/classFunkoCollection.js";
import { Funko } from "../src/classFunko.js";
import { GenreFunko } from "../src/enumGenreFunko.js";

describe("class FunkoCollection", () => {
  const funko1 = new Funko(
    1,
    "Spiderman",
    "Homecoming",
    "Pop!",
    GenreFunko.MOVIE,
    "The Amazing Spiderman",
    12,
    true,
    ["Limited Edition"],
    190,
  );

  const funko2 = new Funko(
    2,
    "Batman",
    "The Dark Knight",
    "Pop!",
    GenreFunko.MOVIE,
    "The Dark Knight",
    12,
    true,
    ["Epic Edition"],
    90,
  );

  test("should create a new funko collection", () => {
    const collection = new FunkoCollection();
    expect(collection).toBeInstanceOf(FunkoCollection);
  });

  test("should add a funko to the collection", () => {
    const collection = new FunkoCollection();
    expect(collection.addFunko(funko1)).toBe(true);
  });

  test("should get a funko from the collection", () => {
    const collection = new FunkoCollection();
    collection.addFunko(funko1);
    expect(collection.getFunko(1)).toBe(funko1);
  });

  test("should update a funko from the collection", () => {
    const collection = new FunkoCollection();
    collection.addFunko(funko1);
    expect(collection.updateFunko(funko1)).toBe(true);
  });

  test("should remove a funko from the collection", () => {
    const collection = new FunkoCollection();
    collection.addFunko(funko1);
    expect(collection.removeFunko(1)).toBe(true);
  });

  test("should return all the funkos from the collection", () => {
    const collection = new FunkoCollection();
    collection.addFunko(funko1);
    collection.addFunko(funko2);
    let count = 0;
    collection.forEach(() => {
      count++;
    });
    expect(count).toBe(2);
  });
});
