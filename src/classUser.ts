import { Funko } from "./classFunko.js";
import { FunkoCollection } from "./classFunkoCollection.js";
import chalk from "chalk";

/**
 * User class
 * @param funkos FunkoCollection
 */
export class User {
  protected funkos = new FunkoCollection();

  /**
   * The constructor method of the class
   * @param name - Funko name
   */
  constructor(protected name: string) {}

  /**
   * A method to add a funko to the collection
   * @param funko - Funko to add
   * @returns true if the funko was added correctly
   */
  addFunko(funko: Funko): boolean {
    if (this.funkos.addFunko(funko)) {
      console.log(
        chalk.green(
          `Funko ${funko.name_} añadido correctamente a la colección de ${this.name}`,
        ),
      );
      return true;
    } else {
      console.log(
        chalk.red(
          `Error al añadir funko ${funko.name_} a la colección de ${this.name}`,
        ),
      );
      return false;
    }
  }

  /**
   * A method to update a funko in the collection
   * @param funko - Funko to update
   * @returns true if the funko was updated correctly
   */
  updateFunko(funko: Funko): boolean {
    if (this.funkos.updateFunko(funko)) {
      console.log(
        chalk.green(
          `Funko ${funko.name_} actualizado correctamente en la colección de ${this.name}`,
        ),
      );
      return true;
    } else {
      console.log(
        chalk.red(
          `Error al actualizar funko ${funko.name_} en la colección de ${this.name}`,
        ),
      );
      return false;
    }
  }

  /**
   * A method to remove a funko from the collection
   * @param id - Funko id to remove
   * @returns true if the funko was removed correctly
   */
  removeFunko(id: number): boolean {
    if (this.funkos.removeFunko(id)) {
      console.log(
        chalk.green(
          `Funko eliminado correctamente de la colección de ${this.name}`,
        ),
      );
      return true;
    } else {
      console.log(
        chalk.red(`Error al eliminar el funko de la colección de ${this.name}`),
      );
      return false;
    }
  }

  /**
   * A method to get a funko from the collection
   * @param id - Funko id to get
   * @returns Funko if the funko was found
   */
  getFunko(id: number): Funko | undefined {
    return this.funkos.getFunko(id);
  }

  /**
   * A method to get the collection
   * @returns listCollection
   */
  listCollection(): void {
    console.log(chalk.blue(`Colección Funko de ${this.name}:`));
    this.funkos.forEach((funko: Funko) => {
      funko.showInfo();
    });
  }

  /**
   * A method to show a funko from the collection
   * @param id - Funko id to show
   * @returns true if the funko was shown correctly
   */
  showFunko(id: number): boolean {
    const funko = this.funkos.getFunko(id);
    if (funko) {
      funko.showInfo();
    } else {
      console.log(
        chalk.red(
          `Funko con id ${id} no encontrado en la colección de ${this.name}`,
        ),
      );
      return false;
    }
    return true;
  }
}
