const args = process.argv.slice(2);

const mode = args.length < 2 ? "word" : "line";
console.log(mode);

console.log(args);
