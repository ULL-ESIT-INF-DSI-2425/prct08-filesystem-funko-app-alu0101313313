import { Funko } from "./classFunko.js";
import { FunkoCollection } from "./classFunkoCollection.js";
import chalk from "chalk";

export class User {
  protected funkos = new FunkoCollection();
  constructor(protected name: string) {}

  addFunko(funko: Funko): boolean {
    if(this.funkos.addFunko(funko)){
      console.log(chalk.green(`Funko ${funko.name_} añadido correctamente a la colección de ${this.name}`));
      return true;
    } else {
      console.log(chalk.red(`Error al añadir funko ${funko.name_} a la colección de ${this.name}`));
      return false;
    }
  }

  updateFunko(funko: Funko): boolean {
    if(this.funkos.updateFunko(funko)){
      console.log(chalk.green(`Funko ${funko.name_} actualizado correctamente en la colección de ${this.name}`));
      return true;
    } else {
      console.log(chalk.red(`Error al actualizar funko ${funko.name_} en la colección de ${this.name}`));
      return false;
    }
  }

  removeFunko(id: number): boolean {
    if(this.funkos.removeFunko(id)){  
      console.log(chalk.green(`Funko eliminado correctamente de la colección de ${this.name}`));
      return true;
    } else {
      console.log(chalk.red(`Error al eliminar el funko de la colección de ${this.name}`));
      return false;
    }
  }

  getFunko(id: number): Funko | undefined {
    return this.funkos.getFunko(id);
  }

  listCollection(): void {
    console.log(chalk.blue(`Colección Funko de ${this.name}:`));
    this.funkos.forEach((funko: Funko) => {
      funko.showInfo();
    });
  }

  showFunko(id: number): boolean {
    const funko = this.funkos.getFunko(id);
    if(funko){
      funko.showInfo();
    } else {
      console.log(chalk.red(`Funko con id ${id} no encontrado en la colección de ${this.name}`));
      return false;
    }
    return true;
  }
}