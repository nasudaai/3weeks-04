const args = process.argv.slice(2);
console.log(args);

const data = {
  yen: args[0],
}

console.log(data);

console.log(args[0]);
console.log(data.yen);

const type = typeof args[0];
console.log(type);
