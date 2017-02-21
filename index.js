function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);

}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var nodeCopy = document.getElementById(data).cloneNode(true);
    nodeCopy.id = "newId";
    ev.target.appendChild(nodeCopy);
    ev.target.src=nodeCopy.src;

}

// function drop(ev) {
//   ev.preventDefault();
//   var data=ev.dataTransfer.getData("text/html");
//   /* If you use DOM manipulation functions, their default behaviour it not to
//      copy but to alter and move elements. By appending a ".cloneNode(true)",
//      you will not move the original element, but create a copy. */
//   var nodeCopy = document.getElementById(data).cloneNode(true);
//   nodeCopy.id = "newId"; /* We cannot use the same ID */
//   ev.target.appendChild(nodeCopy);
// }
