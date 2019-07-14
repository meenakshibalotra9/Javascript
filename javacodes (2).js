<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
  -----------------------------------------------------------
    <script>
        foo();
function foo(){
  console.log('bar');
}
        </script>
-----------------------------------------------------------
<script>
//baz();

var baz = function() {
  console.log('bar2');
};
</script>
-----------------------------------------------------------

<script>
var a;
console.log(a + 2);

var n = null;
console.log(n * 32);
</script>
-----------------------------------------------------------

constant numbers = [1, 2, 3];
numbers.push (4);
console.log(numbers);


-----------------------------------------------------------

var btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number - 1));
  }

btn.onclick = function(){
  var rndcol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255)+')';
 document.body.style.backgroundColor = rndcol;
}

-----------------------------------------------------------

console.log(7 ==='7')
console.log(7 == '7')


-----------------------------------------------------------

console.log(NaN == NULL)
console.log(NaN == Undefined)
console.log(NaN == NaN)

-----------------------------------------------------------

let Rectangle = class {
  constructor(height,width){
    this.height = height;
    this.width = width;
  }
};
console.log(rectangle.name);

-----------------------------------------------------------

let Rectangle = class {
  constructor(height,width){
    this.height = height;
    this.width = width;
  }
get area() {
  return this.calcArea();
}
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10,10);

console.log(square.area);

-----------------------------------------------------------


switch(Number(weekday)){
  case 0:
      console.log("Its a casual wear day")
      break;
      case 1:
      console.log("Its a formal wear day")
      break;
      case 2:
      console.log("Its a office formal day")
      break;
      case 3:
      console.log("Its a formal wear day")
      break;            
};
})

-----------------------------------------------------------



</body>
</html>