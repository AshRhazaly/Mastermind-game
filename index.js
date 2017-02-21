function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var s=document.getElementById(data);
    ev.target.appendChild(s);
    ev.target.src=s.src;
}

// function doFirst() {
//   colorpick = document.getElementById('drag1');
//   colorpick.addEventListener("dragstart", startDrag, false);
//   destination = document.getElementById('one-one');
//   destination.addEventListener("dragenter",allowDrop(ev) ,false);
//   destination.addEventListener("dragover",allowDrop(event),false);
//   destination.addEventListener("dragdrop",dropped ,false);
// }
// window.addEventListener("load",doFirst,false);
