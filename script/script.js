
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

  let solve=()=>{
    let result = "";
    let nums = input.textContent.split(" ");
    nums[0] = parseFloat(nums[0]);
    result = nums[0]
    for (let i = 1; i < nums.length ; i++) {
        if (typeof parseFloat(nums[i]) == "number" && nums[i-1] === "+") {
            result += parseFloat(nums[i]);
        } else if (typeof parseFloat(nums[i]) == "number" && nums[i-1] === "-") {
            result -= parseFloat(nums[i]);
        } else if (typeof parseFloat(nums[i]) == "number" && nums[i-1] === "x") {
            result *= parseFloat(nums[i]);
        } else if (typeof parseFloat(nums[i]) == "number" && nums[i-1] === "/") {
            result /= parseFloat(nums[i]);
        }
    }
    input.textContent = result;
}



    one.onclick = function(){
      input.textContent += "1";
    };

    two.onclick= function(){
      input.textContent += "2";
    };

    three.onclick= function(){
      input.textContent += "3";
    };

    four.onclick= function(){
      input.textContent += "4";
    };

    five.onclick = function(){
      input.textContent += "5";
    };

    six.onclick= function(){
      input.textContent += "6";
    };

    seven.onclick= function(){
      input.textContent += "7";
    };

    eight.onclick= function(){
      input.textContent += "8";
    };

    nine.onclick = function(){
      input.textContent += "9";
    };

    zero.onclick= function(){
      input.textContent += "0";
    };

    dot.onclick= function(){
      input.textContent += ".";
    };

    clear.onclick= function(){
      input.textContent = "";
    };

    addbtn.onclick = function(){
      input.textContent += " + ";
    };

    subtractBtn.onclick= function(){
      input.textContent += " - ";
    };

    multiplyBtn.onclick= function(){
      input.textContent += " x ";
    };

    divideBtn.onclick= function(){
      input.textContent += " / ";
    };

    solveBtn.onclick= solve;