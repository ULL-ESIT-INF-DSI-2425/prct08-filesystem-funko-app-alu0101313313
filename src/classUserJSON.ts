import { User } from "./classUser.js";
import { Funko } from "./classFunko.js";
import fs from "fs";

/**
 * Class that represents a User that stores the information of the Funkos in JSON files
 */
export class UserJSON extends User {
  /**
   * The constructor of the class UserJSON
   * @param name - The name of the User
   * @returns An instance of the class UserJSON
   */
  constructor(name: string) {
    super(name);
    if (!fs.existsSync(`./users/${name.toLowerCase()}`)) {
      console.log("Creating directory:" + name);
      fs.mkdirSync(`./users/${name.toLowerCase()}`);
    }
    const files = fs.readdirSync(`./users/${name.toLowerCase()}`);
    files.forEach((file) => {
      const data = fs.readFileSync(`./users/${name.toLowerCase()}/${file}`);
      const funko = JSON.parse(data.toString());
      this.funkos.addFunko(
        new Funko(
          funko.id,
          funko.name,
          funko.description,
          funko.category,
          funko.genre,
          funko.franchise,
          funko.numberID,
          funko.exclusive,
          funko.specialCharacteristic,
          funko.price,
        ),
      );
    });
  }

  /**
   * The method that adds a Funko to the collection of the User
   * @param funko - The Funko to be added
   * @returns true if the Funko was added correctly
   */
  addFunko(funko: Funko): boolean {
    const result = super.addFunko(funko);
    if (result) {
      fs.writeFile(
        `./users/${this.name.toLowerCase()}/${funko.id_}.json`,
        JSON.stringify(funko),
        (err) => {
          if (err) throw err;
        },
      );
    }
    return true;
  }

  /**
   * The method that removes a Funko from the collection of the User
   * @param id - The id of the Funko to be removed
   * @returns true if the Funko was removed correctly
   */
  removeFunko(id: number): boolean {
    const result = super.removeFunko(id);
    if (result) {
      fs.unlink(`./users/${this.name.toLowerCase()}/${id}.json`, (err) => {
        if (err) throw err;
      });
    }
    return result;
  }

  /**
   * The method that updates the information of a Funko in the collection of the User
   * @param funko - The Funko to be updated
   * @returns true if the Funko was updated correctly
   */
  updateFunko(funko: Funko): boolean {
    const result = super.updateFunko(funko);
    if (result) {
      fs.writeFileSync(
        `./users/${this.name.toLowerCase()}/${funko.id_}.json`,
        JSON.stringify(funko),
      );
    }
    return result;
  }

  /**
   * The method that lists the Funkos in the collection of the User
   * @returns true if the Funkos were listed correctly
   */
  listFunkos(): boolean {
    super.listCollection();
    return true;
  }

  /**
   * The method that shows the information of a Funko in the collection of the User
   * @param id - The id of the Funko to be shown
   * @returns true if the Funko was shown correctly
   */
  showFunko(id: number): boolean {
    super.showFunko(id);
    return true;
  }
}
