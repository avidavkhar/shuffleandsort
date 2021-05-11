window.onload = function () {
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // create and append list items
    for (i = 0; i < array.length; i++) {
        var li = document.createElement("li");
        var text = document.createTextNode(array[i]);
        li.appendChild(text);
        li.classList.add("li-" + array[i]);
        document.getElementById("shuffleAndSort").appendChild(li);
    }

    var list = document.getElementById("shuffleAndSort");

    function shuffle(items) {
        var cached = items, temp, i = cached.length, rand;
        while (i > 0) {
            rand = Math.floor(i * Math.random());
            i--;
            temp = cached[rand];
            cached[rand] = cached[i];
            cached[i] = temp;
        }
        return cached;
    }


/*     function shuffle(arra1) {
        var ctr = arra1.length, temp, index;
    
    // While there are elements in the array
        while (ctr > 0) {
    // Pick a random index
            index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
            ctr--;
    // And swap the last element with it
            temp = arra1[ctr];
            arra1[ctr] = arra1[index];
            arra1[index] = temp;
        }
        return arra1;
    } */


    // method used to shuffle nodes
    function shuffleNodes() {
        var nodes = list.children, i = 0;
        nodes = Array.prototype.slice.call(nodes);
        nodes = shuffle(nodes);
        while (i < nodes.length) {
            list.appendChild(nodes[i]);
            ++i;
        }
    }

    // method used to sort nodes
    function sortNodes() {
        for (i = 0; i < list.children.length; i++) {
            var j = i + 1;
            list.children[i].innerHTML = j;
            list.children[i].className = "li-" + j;
        }
    }

    document.getElementById("shuffle").onclick = shuffleNodes;
    document.getElementById("sort").onclick = sortNodes;
} 