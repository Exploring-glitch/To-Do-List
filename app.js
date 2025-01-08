/* 1) console.log(document); //to select the entire thing on screen 

   2) const inputele= document.querySelector("input"); //reference to the "input"
      console.log(inputele);

    3) const inputele1= document.querySelector("input"); //reference to the "input"
      console.log(inputele1.value); //logs content typed inside the input box

    4) const h1ele= document.querySelector("h1"); //reference to the "H1"
      console.log(h1ele.innerHTML); //logs content inside the h1

    5) <button onclick="clickfunc()">Add Task</button> //clickfunc() is called whenever button is clicked 

        function clickfunc(){ //defying the clickfunc()
        const inputele= document.querySelector("input");
        console.log(inputele.value); //logs the input value on the console window when Add Task button is clicked
        }
    
*/

/* let i=1;
function callback(){
    console.log(i);
    i++;   
}
setInterval(callback,1000); */

/* let i=1;
function callback(){
  if(i<10){console.log(i); }
  i++; 
}
setInterval(callback,1000); */


//UPDATING ELEMENTS
/* let i=1;
function callback(){
if(i<10){
    document.querySelector("#element4").innerHTML= i;
    console.log(i); }
    i++; 
}
setInterval(callback,1000); */



  /* const n= document.createElement("h1"); //TO ADD ELEMENT (APPEND)
    n.innerHTML="5.Work"
    const p= document.querySelector("#newdivhere");
    p.appendChild(n); */

  /*  function f(index){ //REMOVE CHILD 
      console.log("button clicked");
      const element= document.getElementById(index);
      document.querySelector("#newdivhere").removeChild(element);
  } */


//<button class="bg-gray-500 text-white pr-2 pl-2 rounded-sm" onclick="todelete(4)">Delete</button>







/* let counter=1;
    function clickfunc(){

        const inputele= document.querySelector("input").value;

        const newele = document.createElement("div");

        newele.setAttribute("id",counter);

        newele.innerHTML= "<div>"+inputele+"</div><button onclick='f(" + counter + ")'class='bg-gray-500 text-white pr-2 pl-2 rounded-sm hover:bg-black'>Delete</button>";
        document.querySelector("#newdivhere").appendChild(newele);
        
        counter++;

    }

    function f(index){
        console.log("button clicked");
        const element= document.getElementById(index);
        document.querySelector("#newdivhere").removeChild(element);
    }






    let counter=1;
    function clickfunc(){

        const inputele= document.querySelector("input").value;

        const newhead= document.createElement("h1");
        const newbtn= document.createElement("button");
        newhead.innerHTML= inputele;
        newbtn.innerHTML="Delete";

        const newele= document.createElement("div");
        newele.appendChild(newhead);
        newele.appendChild(newbtn);

        newele.setAttribute("id",counter);

        document.querySelector("#newdivhere").appendChild(newele);
        
        counter++;
    }
    
 */


  // the thing which is dynamic that is, keeps changing is the state 