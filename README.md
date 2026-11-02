# Homework 9: JavaScript Built-In Objects

CIT 384 — JavaScript Mini Demo

## GitHub Pages Link

Live site: https://YOUR-GITHUB-USERNAME.github.io/cit384-homework9/

## Screenshot

Screenshot of the finished page: [`screenshot.png`](screenshot.png)

![Screenshot of the JavaScript Mini Demo page](screenshot.png)

## Built-In Objects and Methods Used

**`Date` object**
- `new Date()`
- `getMonth()`
- `getDate()`
- `getFullYear()`

**`Number` object**
- `Number()`
- `Number.isNaN()`
- `Number.isInteger()`
- `toFixed()`
- `toLocaleString()`

**`document` (DOM)**
- `document.getElementById()`
- `innerHTML`

## Extra Credit

I chose the CSS option: `style.css` gives each section a white card with rounded corners and a shadow.

## Reflection

<!-- TODO: Rewrite this reflection in your own words before submitting. -->

The easiest part was the date display, because the `Date` object has simple methods for getting the month, day, and year. The hardest part was keeping track of all the separate variables in the number conversion section without using arrays or loops. I learned that `getMonth()` starts counting at 0, so I had to add 1, and that I needed an `if/else` to add a leading zero so the month and day stay two digits. I learned that `Number()` returns `NaN` for text that is not a number, and that `Number.isNaN()` and `Number.isInteger()` are reliable ways to check the result. I also learned that `textContent` and `innerHTML` let JavaScript put results directly on the page instead of only in the console.

## Sources

- MDN Web Docs: [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)- Claude (Anthropic) AI assistant was used to help draft this project.
