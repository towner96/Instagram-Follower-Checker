const spans = document.querySelectorAll('a > div > div > span');
let spanTexts = [];

spans.forEach(span => {
    spanTexts.push(span.textContent); // Collects the text content of each <span>
});

console.log(spanTexts);
