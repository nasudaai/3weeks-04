const args = process.argv.slice(2);
//console.log(args);

const mode = (args.length > 1 && args[0] === 'obj') ? "obj" : "args";
console.log(mode);

const data = {};

if ( mode === "obj" ) {
  for (let i = 1; i < args.length; i++) {

    data[args[i]] = "value";
    }

    console.log(data);

  }  else if (mode === "args") {
    
    console.log(args);
  }


function main() {
  console.log("main");
}

main();
