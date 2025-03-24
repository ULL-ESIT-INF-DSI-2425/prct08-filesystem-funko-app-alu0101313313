import * as fs from 'fs';

export function convertJSONtoCSV(fileJSON: string, fileCSV: string){

  fs.readFile(fileJSON, 'utf-8' , (err, data) => {
    if(err){
      throw new Error("There is an error reading the file");
    }
    
    const obj = JSON.parse(fileJSON);
    let headers = Object.keys(obj[0]);
    console.log(headers);
  
  })
}


export function main(){
  
  if(process.argv.length !== 4){
    throw new Error('No se han introducido los ficheros correctamente')
  }
  
  // let fileJSON = process.argv[2];
  // let fileCSV = process.argv[3];

  convertJSONtoCSV(process.argv[2], process.argv[3]);

}

main();

