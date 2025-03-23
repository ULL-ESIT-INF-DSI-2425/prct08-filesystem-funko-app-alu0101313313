import { User } from "./classUser.js";
import { Funko } from "./classFunko.js";
import fs from "fs";

export class UserJSON extends User {
  constructor(name: string){
    super(name);
    if(!fs.existsSync(`./users/${name.toLowerCase()}`)){
      console.log('Creating directory:' + name);
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
          funko.price)
      );
    });
  }

  addFunko(funko: Funko): boolean {
    const result = super.addFunko(funko)
    if(result){
      fs.writeFile(
        `./users/${this.name.toLowerCase()}/${funko.id_}.json`, 
        JSON.stringify(funko), 
        (err) => {
          if(err) 
            throw err;
        });
    }
    return true;
  }

  removeFunko(id: number): boolean {
    const result = super.removeFunko(id);
    if(result){
      fs.unlink(`./users/${this.name.toLowerCase()}/${id}.json`, 
      (err) => {
        if(err) 
          throw err;
      });
    }
    return result;
  }

  updateFunko(funko: Funko): boolean {
    const result = super.updateFunko(funko);
    if(result){
      fs.writeFileSync(
        `./users/${this.name.toLowerCase()}/${funko.id_}.json`, 
        JSON.stringify(funko)
      );
    }
    return result;
  }

  listFunkos(): boolean {
    super.listCollection();
    return true;
  }

  showFunko(id: number): boolean {
    super.showFunko(id);
    return true;
  }
}