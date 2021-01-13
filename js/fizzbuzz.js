document.getElementById("fizzbuzzBtn").addEventListener("click", function(){
 let num1 = document.getElementById("input1").value;
 let num2 = document.getElementById("input2").value;

 let output = "";
 for(let i = 1; i <= 100; i++ ){
  if(i % num1 == 0 && i % num2 == 0){
   output += "FizzBuzz, ";
  }
  else if(i % num2 == 0){
   output += "<span class='buzz'>Buzz</span>, ";
  }
  else if(i % num1 == 0){
   output += "<span class='fizz'>Fizz</span>, ";
  }
  else{
   output += `${i}, `;
  }
 }
 document.getElementById("fizzbuzzOutput").innerHTML = output;
});

document.getElementById("clearBtn").addEventListener("click", function(){
 document.getElementById("input1").value = "";
 document.getElementById("input2").value = "";
 document.getElementById("fizzbuzzOutput").innerText = "";
})
