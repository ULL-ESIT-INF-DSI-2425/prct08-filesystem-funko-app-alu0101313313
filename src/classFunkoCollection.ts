import { Funko } from "./classFunko.js";

export class FunkoCollection {

  protected collection_: Map<number, Funko>;

  constructor() {
    this.collection_ = new Map<number, Funko>();
  }

  addFunko(funko: Funko): boolean {
    if (this.collection_.has(funko.id_)) {
      throw new Error("Funko already exists in collection");
    } else {
      this.collection_.set(funko.id_, funko);
      console.log(`Funko ${funko.name_} added to collection`);
      return true;
    }
  }

  removeFunko(id: number): boolean {
    return this.collection_.delete(id);
  }

  updateFunko(funko: Funko): boolean {
    if (this.collection_.has(funko.id_)) {
      this.collection_.set(funko.id_, funko);
      console.log(`Funko ${funko} updated in collection`);
      return true;
    } else {
      throw new Error("Funko does not exist in collection");
    }
  }

  getFunko(id: number): Funko | undefined {
    return this.collection_.get(id);
  }

  forEach(callback: (funko: Funko) => void): void {
    this.collection_.forEach((funko) => {
      callback(funko);
    });
  }

}