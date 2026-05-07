const args = process.argv.slice(2);
console.log(args);

const mode = args.length === 1 ? "mode" : "args";
console.log(mode);

const data = {};

if ( mode === "obj" ) {
  obj[args[1]] = "value";
  console.log(obj);
}

function main() {
  console.log("main");
}

main();
