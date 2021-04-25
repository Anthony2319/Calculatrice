(function() {
    window.onload = function() {
      let math;
      let buttons = Array.prototype.slice.call(document.querySelectorAll('button'));
  
      let calcul = function(event){
        let value = event.currentTarget.textContent;
        let screen = document.querySelector('.screen')
        if(value === '='){
          math = eval(math);
          screen.innerHTML = math;
          return;
        }
        else if(value === 'clear'){
          math = null;
          screen.innerHTML = '';
          return;
        }
        else if(value === '+' || value === '/' || value === '*' || value === '-'){
          math += value;
          screen.innerHTML = math;
          return
        }
        else {
          math = screen.innerHTML + value;
          screen.innerHTML += value;
          return;
        }
      }
  
      buttons.forEach(function(button) {
        button.addEventListener('click', calcul);
      })
    }
  }())