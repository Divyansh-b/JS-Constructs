let n = parseInt(process.argv[2], 10);
let harmonic= 0;

for (let i = 1; i <= n; i++) {
    harmonic+= 1 / i;
}

console.log(harmonic);
