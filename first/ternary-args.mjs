const args = process.argv.slice(2);

const mode = args[0];
const argOne = args.length > 1 ? "argument" : "mode";
console.log(argOne);
console.log(args);
console.log("test");

function main() {
  process.stdout.write("write");
}

main();
