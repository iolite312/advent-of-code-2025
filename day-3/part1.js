import { readFile } from "node:fs/promises";

const data = await readFile("input.txt", "utf-8");
const banks = data.split("\n");

let sum = 0;

for (const bank of banks) {
    let highestJoltage = 0;
    for (let i = 0; i < bank.length; i++) {
        for (let j = i + 1; j < bank.length; j++) {
            let joltage = Number(`${bank[i]}${bank[j]}`);
            if (joltage > highestJoltage) {
                highestJoltage = joltage;
            }
        }
    }
    sum += highestJoltage;
}

console.log(sum);