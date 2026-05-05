const args = process.argv.slice(2);
console.log(args);

const mode = args.length === 1 ? "mode" : "args";
console.log(mode);

function main() {
  console.log("main");
}

main();
