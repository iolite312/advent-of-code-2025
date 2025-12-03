import { readFile } from "node:fs/promises";


const data = await readFile("input.txt", "utf-8");
const idRanges = data.split(",");
let sum = 0;

for (const idRange of idRanges) {
    const [start, end] = idRange.split("-");

    for (let i = Number(start); i <= Number(end); i++) {
        const s = String(i);

        if (s.length % 2 === 0) {
            const half = s.length / 2;
            const firstHalf = s.slice(0, half);
            const secondHalf = s.slice(half);

            if (firstHalf === secondHalf) {
                sum += i;
                console.log(`Found: ${i}`);
            }
        }
    }
}

console.log(sum);