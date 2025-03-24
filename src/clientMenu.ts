import { UserJSON } from "./classUserJSON.js";
import { Funko } from "./classFunko.js";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { typeFunko } from "./typeFunko.js";
import { GenreFunko } from "./enumGenreFunko.js";

yargs(hideBin(process.argv))
  .command(
    "add",
    "Adds a funko",
    {
      user: {
        description: "Username",
        type: "string",
        demandOption: true,
      },
      id: {
        description: "Funko ID",
        type: "number",
        demandOption: true,
      },
      name: {
        description: "Funko Name",
        type: "string",
        demandOption: true,
      },
      desc: {
        description: "Funko Description",
        type: "string",
        demandOption: true,
      },
      type: {
        description: "Funko Type",
        type: "string",
        demandOption: true,
      },
      genre: {
        description: "Funko Genre",
        type: "string",
        demandOption: true,
      },
      franchise: {
        description: "Funko Franchise",
        type: "string",
        demandOption: true,
      },
      numberID: {
        description: "Funko Number",
        type: "number",
        demandOption: true,
      },
      exclusive: {
        description: "Funko Exclusive",
        type: "boolean",
        demandOption: true,
      },
      special_char: {
        description: "Funko Special Characteristics",
        type: "string",
        demandOption: true,
      },
      price: {
        description: "Funko Price",
        type: "number",
        demandOption: true,
      },
    },
    (argv) => {
      const user = new UserJSON(argv.user);
      const funko = new Funko(
        argv.id,
        argv.name,
        argv.desc,
        argv.category as typeFunko,
        argv.genre as GenreFunko,
        argv.franchise,
        argv.numberID,
        argv.exclusive,
        argv.special_char.split(","),
        argv.price,
      );
      user.addFunko(funko);
    },
  )
  .help().argv;

yargs(hideBin(process.argv))
  .command(
    "delete",
    "Deletes a funko",
    {
      user: {
        description: "Username",
        type: "string",
        demandOption: true,
      },
      id: {
        description: "Funko ID",
        type: "number",
        demandOption: true,
      },
    },
    (argv) => {
      const user = new UserJSON(argv.user);
      user.removeFunko(argv.id);
    },
  )
  .help().argv;

yargs(hideBin(process.argv))
  .command(
    "list",
    "List funkos",
    {
      user: {
        description: "Username",
        type: "string",
        demandOption: true,
      },
    },
    (argv) => {
      const user = new UserJSON(argv.user);
      user.listFunkos();
    },
  )
  .help().argv;

yargs(hideBin(process.argv))
  .command(
    "show",
    "Shows a funko",
    {
      user: {
        description: "Username",
        type: "string",
        demandOption: true,
      },
      id: {
        description: "Funko ID",
        type: "number",
        demandOption: true,
      },
    },
    (argv) => {
      const user = new UserJSON(argv.user);
      user.showFunko(argv.id);
    },
  )
  .help().argv;

yargs(hideBin(process.argv))
  .command(
    "update",
    "Updates a funko",
    {
      user: {
        description: "Username",
        type: "string",
        demandOption: true,
      },
      id: {
        description: "Funko ID",
        type: "number",
        demandOption: true,
      },
      name: {
        description: "Funko Name",
        type: "string",
        demandOption: true,
      },
      desc: {
        description: "Funko Description",
        type: "string",
        demandOption: true,
      },
      type: {
        description: "Funko Type",
        type: "string",
        demandOption: true,
      },
      genre: {
        description: "Funko Genre",
        type: "string",
        demandOption: true,
      },
      franchise: {
        description: "Funko Franchise",
        type: "string",
        demandOption: true,
      },
      numberID: {
        description: "Funko Number",
        type: "number",
        demandOption: true,
      },
      exclusive: {
        description: "Funko Exclusive",
        type: "boolean",
        demandOption: true,
      },
      special_char: {
        description: "Funko Special Characteristics",
        type: "string",
        demandOption: true,
      },
      price: {
        description: "Funko Price",
        type: "number",
        demandOption: true,
      },
    },
    (argv) => {
      const user = new UserJSON(argv.user);
      const funko = new Funko(
        argv.id,
        argv.name,
        argv.desc,
        argv.category as typeFunko,
        argv.genre as GenreFunko,
        argv.franchise,
        argv.numberID,
        argv.exclusive,
        argv.special_char.split(","),
        argv.price,
      );
      user.updateFunko(funko);
    },
  )
  .help().argv;
