import { writeFileSync } from 'node:fs';

const args = process.argv.slice(2);
console.log(args);

const data = {
  yen: args[0],
  correctKeyStrokes: args[1],
}

console.log(data);

console.log(args[0]);
console.log(data.yen, data.correctKeyStrokes);


const type = typeof args[0];
console.log(type);


const dataArray = args.join(" ")
const line = dataArray + "\n";
writeFileSync("out/yen.txt", line );
