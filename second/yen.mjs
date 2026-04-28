import { writeFileSync } from 'node:fs';

const args = process.argv.slice(2);

const data = {
  yen: args[0],
  correctKeyStrokes: args[1],
  keysPerSecond: args[2],
  missTypes: args[3],
  cource: args[4],
  date: new Date().toLocaleString()
}



//const type = typeof args[0];
//console.log(type);


const dataArray = args.join(" ")
const line = dataArray + "\n";
writeFileSync("out/yen.txt", line );
