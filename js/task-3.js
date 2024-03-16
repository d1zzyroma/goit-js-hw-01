// function getElementWidth(content, padding, border){
//     let element = content + (padding*2) + (border*2)
//     console.log(element)
// }

// console.log(getElementWidth(Number.parseInt("50px"), Number.parseInt("8px"), Number.parseInt("4px")));
// console.log(getElementWidth(Number.parseInt("60px"), Number.parseInt("12px"), Number.parseFloat("8.5px")));
// console.log(getElementWidth(Number.parseInt("200px"), Number.parseInt("0px"), Number.parseInt("0px"))); 


function getElementWidth(content, padding, border){
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding);
    const borderWidth = parseFloat(border);

    const totalWidth = contentWidth + paddingWidth*2 + borderWidth*2;
    return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200