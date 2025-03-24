import fs, { read } from 'fs';

/**
 * A function to count the ocurrencies of a word in a file passes by parameters
 */
export function readOcurrency(file: string, word: string){

  fs.readFile(file, (err, data) => {
    if(err){
      throw new Error("There was a problem reading the file");
    } else if (data.toString() === "") {
      throw new Error("The file is empty");
    } else {
      let dataStr = data.toString();
      let regex = new RegExp(word, 'g');
      let matches = dataStr.match(regex);
      let ocurrencies = matches ? matches.length : 0;
      console.log(`The word "${word}" appears ${ocurrencies} times in the file.`);
    }
  })
} 

export function main(){

  if(process.argv.length < 3){
    console.log('No se han introducido suficientes argumentos');
    process.exit(1);
  }

  const file = process.argv[2];
  const word = process.argv[3];

  readOcurrency(file, word);
}

main();








