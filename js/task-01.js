const list = document.querySelector("#categories")
console.dir(`Number of categories: ${list.children.length}`);

[...list.children].forEach((el) => { console.dir(`Category: ${el.querySelector("h2").textContent}`); console.dir(`Elements: ${el.querySelectorAll("li").length}`)}
    );
