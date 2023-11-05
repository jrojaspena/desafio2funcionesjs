const Color1 =document.getElementById("blue");
const Color2 =document.getElementById("red");
const Color3 =document.getElementById("green");
const Color4 =document.getElementById("yellow");


function cambiarColor1() {

     Color1.style.backgroundColor="black";   
}
Color1.addEventListener("click", cambiarColor1);


function cambiarColor2() {

    Color2.style.backgroundColor="black";  
}
Color2.addEventListener("click", cambiarColor2);


function cambiarColor3() {

    Color3.style.backgroundColor="black" ;  
}
Color3.addEventListener("click", cambiarColor3);


function cambiarColor4() {

    Color4.style.backgroundColor="black";   
}
Color4.addEventListener("click",cambiarColor4);




let keycambiacolor;
const  tecla = document.getElementById("key")

document.addEventListener('keydown', function (event) {
    if (event.key === 'a'  ) {

        keycambiacolor = "pink" ;
    
    } else if (event.key === 's' ) {

        keycambiacolor = "orange";
 
    }
else if(event.key === 'd' ) {

        keycambiacolor = "skyblue";
    
    }
    key.style.backgroundColor = keycambiacolor;

        
    })
   
 
    

let key1cambiacolor;
const tecla1= document.getElementById("key1")

document.addEventListener('keydown', function (event) {
    if (event.key === 'q'  ) {

        key1cambiacolor = "purple"
    
    } else if (event.key === 'w' ) {

        key1cambiacolor = "grey";
 
    }
else if(event.key === 'e' ) {

        key1cambiacolor = "brown";
    }
    key1.style.backgroundColor = key1cambiacolor;
        
    })

  