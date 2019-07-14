
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
//textContent is used for retrieve the text b/w two elements

(TWO METHODS OF JAVASCRIPT)
//setInterval
//setTimeout


------------------------------------------------------------
/*for add more images or any file with src name*/

var cId=document.getElementById("carousel");
var img=cId.getElementsByTagName("img"))[0];

function changeImagesrc(indx){
  img.setAttribute("src","/......."+imageArray[]);

}
setInterval(function(){

})

----------------------------------------------------------
//for create table

document.write("<table border='1'>");
for(i=0; i<10; i++){
    document.write("<tr>");
    for(j=0; j<10; j++){
        document.write("<td>");
        document.write("yes");
        document.write("</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

---------------------------------------------------------------------

ASSIGNMENT2

/*create function that updates slide numbers (current as well as total)-textContent;
create event for stop;
create function for previous and next;
*/

----------------------------------------------------------------

/* we use  two equal to(==)for check value is equal or not */

/*  we use  three equal to(===)for check the type of data or value
    nd also check value is equal or not */
 -------------------------------------------------------
 /*mustache templates*/
    
</body>
</html>