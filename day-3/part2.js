import { readFile } from "node:fs/promises";

const data = await readFile("input.txt", "utf-8");
const banks = data.trim().split("\n");

let sum = 0;
const MAX_BANK_LENGTH = 12;

for (const bank of banks) {
    let remove = bank.length - MAX_BANK_LENGTH;
    const stack = [];

    for (const digit of bank) {
        console.log(`{${stack.join(",")}}: current digit: ${digit}`);
        while (remove > 0 && stack.length > 0 && stack[stack.length - 1] < digit) {
            console.log(`Popping ${stack[stack.length - 1]} < ${digit} (remove remaining: ${remove})`);
            stack.pop();
            remove--;
        }

        stack.push(digit);
    }
    sum += Number(stack.slice(0, MAX_BANK_LENGTH).join(""));
}

console.log(sum);
