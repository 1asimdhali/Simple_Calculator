var display = document.getElementById('display');
var buttons = document.querySelectorAll('.buttons button');

for(var i = 0; i < buttons.length; i++) {
    var btn = buttons[i];
    btn.addEventListener('click', function(djasim) {
        var text = djasim.target.innerText;
        
        if (text === '=') {
            var result = eval(display.value);
            display.value = result;
        }
        else if (text === 'AC') {
            display.value = '';
        }
        else {
            // display.value = display.value + text;
            display.value += text;
            
        }
    });
}

