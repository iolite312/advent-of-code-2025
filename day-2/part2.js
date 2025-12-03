import { readFile } from "node:fs/promises";


const data = await readFile("input.txt", "utf-8");
const idRanges = data.split(",");
let sum = 0;
let alreadyFound = [];

for (const idRange of idRanges) {
    const [start, end] = idRange.split("-");

    for (let i = Number(start); i <= Number(end); i++) {
        const s = String(i);

        if (s.length % 2 === 0) {
            const half = s.length / 2;
            const firstHalf = s.slice(0, half);
            const secondHalf = s.slice(half);

            if (firstHalf === secondHalf) {
                if (alreadyFound.includes(i)) {
                    continue;
                }
                sum += i;
                alreadyFound.push(i);
                console.log(`Found (/2): ${i}`);
            }
        }
        if (s.length % 3 === 0) {
            const half = s.length / 3;
            const firstHalf = s.slice(0, half);
            const secondHalf = s.slice(half, half * 2);
            const thirdHalf = s.slice(half * 2);

            if (firstHalf === secondHalf && secondHalf === thirdHalf) {
                if (alreadyFound.includes(i)) {
                    continue;
                }
                sum += i;
                alreadyFound.push(i);
                console.log(`Found (/3): ${i}`);
            }
        }
        if (s.length % 5 === 0) {
            const half = s.length / 5;
            const firstHalf = s.slice(0, half);
            const secondHalf = s.slice(half, half * 2);
            const thirdHalf = s.slice(half * 2, half * 3);
            const fourthHalf = s.slice(half * 3, half * 4);
            const fifthHalf = s.slice(half * 4);

            if (firstHalf === secondHalf && secondHalf === thirdHalf && thirdHalf === fourthHalf && fourthHalf === fifthHalf) {
                if (alreadyFound.includes(i)) {
                    continue;
                }
                sum += i;
                alreadyFound.push(i);
                console.log(`Found (/5): ${i}`);
            }
        }
        if (s.length % 7 === 0) {
            const half = s.length / 7;
            const firstHalf = s.slice(0, half);
            const secondHalf = s.slice(half, half * 2);
            const thirdHalf = s.slice(half * 2, half * 3);
            const fourthHalf = s.slice(half * 3, half * 4);
            const fifthHalf = s.slice(half * 4, half * 5);
            const sixthHalf = s.slice(half * 5, half * 6);
            const seventhHalf = s.slice(half * 6);

            if (firstHalf === secondHalf && secondHalf === thirdHalf && thirdHalf === fourthHalf && fourthHalf === fifthHalf && fifthHalf === sixthHalf && sixthHalf === seventhHalf) {
                if (alreadyFound.includes(i)) {
                    continue;
                }
                alreadyFound.push(i);
                sum += i;
                console.log(`Found (/7): ${i}`);
            }
        }
    }
}

console.log(sum);