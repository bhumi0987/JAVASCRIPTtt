export const calculateInterest = (p, r, t) => (p * r * t) / 100;
export const showResult = (value) => {
    const result = document.getElementById("result");
    result.innerHTML = `Simple Interest: ${value}`;
};
import { calculateInterest } from "./interest.js";
import { showResult } from "./display.js";

const p = document.getElementById("p");
const r = document.getElementById("r");
const t = document.getElementById("t");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const interest = calculateInterest(Number(p.value), Number(r.value), Number(t.value));
    showResult(interest);
});
