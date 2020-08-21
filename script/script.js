let plus=(str)=>{
    let a = str.split("");
    b = parseInt(a[0])
    d = parseInt(a[1])
    if (a[2] = " + ") {
      a = b + d;
      return a;
    }
    return a;
  }
  
  const input = document.getElementById("screen")
  const numbers = document.getElementsByClassName("num-btn");

  const one = document.getElementById("one");
  const two = document.getElementById("two");
  const three = document.getElementById("three");
  const four = document.getElementById("four");
  const five = document.getElementById("five");
  const six = document.getElementById("six");
  const seven = document.getElementById("seven");
  const eight = document.getElementById("eight");
  const nine = document.getElementById("nine");
  const zero = document.getElementById("zero");
  const dot = document.getElementById("dot");
  const clear = document.getElementById("clear");
  const addbtn = document.getElementById("addition-button");
  const subtractBtn = document.getElementById("subtraction-button")
  const multiplyBtn = document.getElementById("multiplication-button");
  const divideBtn= document.getElementById("division-button");
  const solveBtn = document.getElementById("solve-button")

    one.onclick = function(){
      input.value += 1;
    };

    two.onclick= function(){
      input.value += 2;
    };

    three.onclick= function(){
      input.value += 3;
    };

    four.onclick= function(){
      input.value += 4;
    };

    five.onclick = function(){
      input.value += 5;
    };

    six.onclick= function(){
      input.value += 6;
    };

    seven.onclick= function(){
      input.value += 7;
    };

    eight.onclick= function(){
      input.value += 8;
    };

    nine.onclick = function(){
      input.value += 9;
    };

    zero.onclick= function(){
      input.value += 0;
    };

    dot.onclick= function(){
      input.value += .0;
    };

    clear.onclick= function(){
      input.value = "";
    };

    five.onclick = function(){
      input.value += 5;
    };

    six.onclick= function(){
      input.value += 6;
    };

    seven.onclick= function(){
      input.value += 7;
    };

    eight.onclick= function(){
      input.value += 8;
    };