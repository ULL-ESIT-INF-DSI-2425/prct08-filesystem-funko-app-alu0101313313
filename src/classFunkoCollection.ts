import { Funko } from "./classFunko.js";

/**
 * Class representing a collection of Funko Pops.
 * @param collection_ - A map of Funko Pops in the collection.
 */
export class FunkoCollection {
  protected collection_: Map<number, Funko>;

  /**
   * The constructor for the FunkoCollection class.
   */
  constructor() {
    this.collection_ = new Map<number, Funko>();
  }

  /**
   * A method that returns the number of Funko Pops in the collection.
   * @param funko - The Funko Pop to add to the collection.
   * @returns true if the Funko Pop was added to the collection.
   */
  addFunko(funko: Funko): boolean {
    if (this.collection_.has(funko.id_)) {
      throw new Error("Funko already exists in collection");
    } else {
      this.collection_.set(funko.id_, funko);
      console.log(`Funko ${funko.name_} added to collection`);
      return true;
    }
  }

  /**
   * A method that removes a Funko Pop from the collection.
   * @param id - The ID of the Funko Pop to remove from the collection.
   * @returns true if the Funko Pop was removed from the collection.
   */
  removeFunko(id: number): boolean {
    return this.collection_.delete(id);
  }

  /**
   * A method that updates a Funko Pop in the collection.
   * @param funko - The Funko Pop to update in the collection.
   * @returns true if the Funko Pop was updated in the collection.
   */
  updateFunko(funko: Funko): boolean {
    if (this.collection_.has(funko.id_)) {
      this.collection_.set(funko.id_, funko);
      console.log(`Funko ${funko} updated in collection`);
      return true;
    } else {
      throw new Error("Funko does not exist in collection");
    }
  }

  /**
   * A method that returns a Funko Pop from the collection.
   * @param id - The ID of the Funko Pop to get from the collection.
   * @returns The Funko Pop with the given ID.
   */
  getFunko(id: number): Funko | undefined {
    return this.collection_.get(id);
  }

  /**
   * A method that returns the number of Funko Pops in the collection.
   * @returns The number of Funko Pops in the collection.
   */
  forEach(callback: (funko: Funko) => void): void {
    this.collection_.forEach((funko) => {
      callback(funko);
    });
  }
}
