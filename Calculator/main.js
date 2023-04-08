let buttons = document.querySelector(".buttons");
let btns = buttons.querySelectorAll("span");
let value = document.getElementById('value');


btns.forEach(function(span) {
    span.addEventListener("click", function() {
        if(this.innerHTML == '=') {
            value.innerHTML = eval(value.innerHTML);
           }
           else {
            if(this.innerHTML == 'Clear') {
                value.innerHTML = ""
            }
            else {
                value.innerHTML += this.innerHTML;
            }
           }
    });
  });