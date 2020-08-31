let buttons = document.getElementsByClassName("button");
let divScope = document.getElementsByClassName("divs");
divScope
let i = 0;
buttons[0].addEventListener('click', function () {
        let div = document.createElement("div");
        i = i + 1; 
        div.innerText = "added " + i;
        div.addEventListener('click', function () {
            console.log(event.button);
            this.parentElement.removeChild(this);   
        })
        div.addEventListener('contextmenu', function (e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            console.log(event.button);
            this.parentElement.removeChild(this);
        })
        divScope[0].appendChild(div);
    }, false);