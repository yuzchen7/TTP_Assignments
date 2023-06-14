window.onload = () => {
    // Select the section with an id of container without using querySelector.
    const docIDGet = document.getElementById("container");
    console.log(docIDGet);

    // Select the section with an id of container using querySelector.
    const docIDQuery = document.querySelector("#container");
    console.log(docIDQuery);

    // Select all of the list items with a class of "second".
    const docClassGet = document.getElementsByClassName("second");
    console.log(docClassGet[0]);
    console.log(docClassGet[1]);

    // Select a list item with a class of third, but only the list item inside of the ol tag.
    const liItem = document.querySelector("ol .third");
    console.log(liItem);

    // Give the section with an id of container the text "Hello!".
    const docContainer = document.getElementById("container").appendChild(document.createTextNode("Hello!"));

    // Add the class main to the div with a class of footer.
    const elementadd = document.createElement("div");
    elementadd.setAttribute("class", "main");
    const docFooter = document.getElementsByClassName("footer");
    docFooter[0].appendChild(elementadd);
    console.log(elementadd);

    // Remove the class main on the div with a class of footer.
    docFooter[0].removeChild(elementadd);

    // Create a new li element.
    const el = document.createElement("li");

    // Give the li the text "four".
    el.textContent = "four";

    // Append the li to the ul element.
    const ul = document.querySelector("ul");
    ul.append(el);

    // Loop over all of the lis inside the ol tag and give them a background color of "green".
    const allListItem = document.querySelectorAll("ol li");
    allListItem.forEach((elem) => {
        elem.setAttribute("style", "background: green;");
    });
    console.log(allListItem);

    // Remove the div with a class of footer.
    const remove = document.querySelector(".footer");
    remove.remove();
};