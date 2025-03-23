import chalk from "chalk";
import { typeFunko } from "./typeFunko.js";
import { GenreFunko } from "./enumGenreFunko.js";

export class Funko {

  accessor id_: number;
  accessor name_: string;
  accessor description_: string;
  accessor category_: typeFunko;
  accessor genre_: GenreFunko;
  accessor franchise_: string;
  accessor numberID_: number;
  accessor exclusive_: boolean;
  accessor specialCharacteristics_: string[];
  accessor price_: number;
  
  constructor(
    id: number,
    name: string,
    description: string,
    category: typeFunko,
    genre: GenreFunko,
    franchise: string,
    numberID: number,
    exclusive: boolean,
    specialCharacteristics: string[],
    price: number
  ) {
    this.id_ = id;
    this.name_ = name;
    this.description_ = description;
    this.category_ = category;
    this.genre_ = genre;
    this.franchise_ = franchise;
    this.numberID_ = numberID;
    this.exclusive_ = exclusive;
    this.specialCharacteristics_ = specialCharacteristics;
    this.price_ = price;
  }

  getMarketValue(): string {
    if (this.price_ > 100) {
      return "Very High";
    } else if (this.price_ > 50) {
      return "High";
    } else if (this.price_ > 25) {
      return "Medium";
    } else {
      return "Low";
    }
  }
  /**
   * Método que muestra la información del Funko
   */
  showInfo() {
    console.log(chalk.green("ID: " + this.id_));
    console.log(chalk.green("Name: " + this.name_));
    console.log(chalk.green("Description: " + this.description_));
    console.log(chalk.green("Type: " + this.category_));
    console.log(chalk.green("Genre: " + this.genre_));
    console.log(chalk.green("Franchise: " + this.franchise_));
    console.log(chalk.green("Number: " + this.numberID_));
    console.log(chalk.green("Exclusive: " + this.exclusive_));
    console.log(chalk.green("Special Characteristics: "));
    this.specialCharacteristics_.forEach((specialCharacteristic) => {
      console.log(chalk.green("\t- " + specialCharacteristic));
    });
    switch (this.getMarketValue()) {
      case "Very High":
        console.log(chalk.green("Market Value: " + chalk.green(this.getMarketValue())));
        break;
      case "High":
        console.log(
          chalk.green("Market Value: " + chalk.yellow(this.getMarketValue()))
        );
        break;
      case "Medium":
        console.log(chalk.green("Market Value: " + chalk.cyan(this.getMarketValue())));
        break;
      case "Low":
        console.log(chalk.green("Market Value: " + chalk.red(this.getMarketValue())));
        break;
    }
    return true;
  }
}
