var button=document.getElementById("enter");
 var input=document.getElementById("userinput");
 var ul=document.querySelector("ol");
 
 function inputLength(){
     return input.value.length;
 }
 document.write('');
 function createListElement(){
        var li=document.createElement("ol");
       
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value='';
    
 }

 button.addEventListener("click", function(){
     if( inputLength() >0 ){
        createListElement();
     }
 })

 
 
 input.addEventListener("keypress", function (event){
    if( inputLength() >0  && event.keyCode===13){
       createListElement();
    }
})
