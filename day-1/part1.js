import { readFile } from "node:fs/promises";

let index = 50;
let zeroCount = 0;

async function main() {
    const data = await readFile("input.txt", "utf-8");
    const rotations = data.split("\n");

    for (let i = 0; i < rotations.length; i++) {
        if (rotations[i].startsWith("R")) {
            let rotationCount = parseInt(rotations[i].slice(1));

            for (let j = 0; j < rotationCount; j++) {
                if (index == 99) {
                    index = 0;
                } else {
                    index++;
                }
            }
        } else if (rotations[i].startsWith("L")) {
            let rotationCount = parseInt(rotations[i].slice(1));

            for (let j = 0; j < rotationCount; j++) {
                if (index == 0) {
                    index = 99;
                } else {
                    index--;
                }
            }
        } else {
            console.log(`Unknown rotation: ${rotations[i]}`);
        }

        console.log(`${rotations[i]}: ended up at ${index}`);

        if (index == 0) {
            zeroCount++;
        }

        if (index < 0 || index > 99) {
            console.log(`Invalid index: ${index}`);
        }
    }
    console.log(`Zero count: ${zeroCount}`);
}

main();
