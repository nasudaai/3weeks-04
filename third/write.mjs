import { writeFileSync } from 'node:fs';
console.log(writeFileSync);

const memo = "memo";

writeFileSync("out/memo.md", "memo");

