const bot1 = document.getElementById ( 'bot1' );
const bot2 = document.getElementById ( 'bot2' );
const c11 =  document.getElementById ( '1' );
const c12 =  document.getElementById ( '2' );
const c13 =  document.getElementById ( '3' );
const c21 =  document.getElementById ( '4' );
const c22 =  document.getElementById ( '5' );
const c23 =  document.getElementById ( '6' );
const c31 =  document.getElementById ( '7' );
const c32 =  document.getElementById ( '8' );
const c33 =  document.getElementById ( '9' );


var jog1 = "O"; 
var jog2 = "X"; 
var cont1 = 0;
var cont2 = 0; 


c11.addEventListener('click', teste); 
c12.addEventListener('click', teste1); 
c13.addEventListener('click', teste2); 
c21.addEventListener( 'click', teste3); 
c22.addEventListener( 'click', teste4); 
c23.addEventListener( 'click', teste5); 
c31.addEventListener( 'click', teste6); 
c32.addEventListener( 'click', teste7); 
c33.addEventListener( 'click', teste8); 


bot1.addEventListener( 'click', fechar ); 
bot2.addEventListener( 'click', reinicia ); 


function fechar (){
    window.close();
}

function reinicia (){

    location.reload();
    
}

var cont =0;
function teste (){
 
 
    c11.textContent = jog2;
    if((  c11.textContent ==   c12.textContent) && (c11.textContent ==  c13.textContent)){

        window.alert("Ganhou")

    }else if (( c11.textContent ==   c21.textContent) && (c11.textContent ==  c31.textContent)){

        window.alert("Ganhou")    

    }else if(( c11.textContent ==   c22.textContent) && (c11.textContent ==  c33.textContent)){

        window.alert("Ganhou na diagonal")   

    }

  var aux = jog1;
  jog1=jog2;
  jog2=aux;
    
}

function teste1 (){

    c12.textContent = jog2;
    if(( c12.textContent ==   c11.textContent) && (c12.textContent ==  c13.textContent)){

        window.alert("Ganhou")

    }else if (( c12.textContent ==   c22.textContent) && (c12.textContent ==  c32.textContent)){

        window.alert("Ganhou")    


    }

    var aux = jog1;
    jog1=jog2;
    jog2=aux;

}



function teste2 (){
  
    c13.textContent = jog2;

   if((  c13.textContent ==   c11.textContent) && (c13.textContent ==  c12.textContent)){

       window.alert("Ganhou")

   }else if (( c13.textContent ==   c23.textContent) && (c13.textContent ==  c33.textContent)){

       window.alert("Ganhou")    

   }else if(( c13.textContent ==   c22.textContent) && (c13.textContent ==  c31.textContent)){

       window.alert("Ganhou na diagonal")   
   }



 
    cont = cont + 1;
    var aux = jog1;
    jog1=jog2;
    jog2=aux;


   
}

function teste3 (){

    c21.textContent = jog2;

    if(( c21.textContent ==   c22.textContent) && (c21.textContent ==  c23.textContent)){

        window.alert("Ganhou")

    }else if (( c21.textContent ==   c11.textContent) && (c21.textContent ==  c31.textContent)){

        window.alert("Ganhou")    


    }


    
    var aux = jog1;
    jog1=jog2;
    jog2=aux;


    
}

function teste4 (){
    c22.textContent = jog2;

    if((  c22.textContent ==   c12.textContent) && (c22.textContent ==  c32.textContent)){

        window.alert("Ganhou")
 
    }else if (( c22.textContent ==   c21.textContent) && (c22.textContent ==  c23.textContent)){
 
        window.alert("Ganhou")    
 
    }else if(( c22.textContent ==   c11.textContent) && (c22.textContent ==  c33.textContent)){
 
        window.alert("Ganhou na diagonal")   
    }else if((c22.textContent ==   c13.textContent) && (c22.textContent ==  c31.textContent)){
 
        window.alert("Ganhou na diagonal")   
    }
 

    var aux = jog1;
    jog1=jog2;
    jog2=aux;

}

function teste5 (){

    c23.textContent = jog2;

    if((  c23.textContent ==   c21.textContent) && (c23.textContent ==  c22.textContent)){

        window.alert("Ganhou")
 
    }else if (( c23.textContent ==   c13.textContent) && (c23.textContent ==  c33.textContent)){
 
        window.alert("Ganhou")    
 
    }

    var aux = jog1;
    jog1=jog2;
    jog2=aux;

}

function teste6 (){

    c31.textContent = jog2;
    
    
   if((c31.textContent ==   c11.textContent) && (c31.textContent ==  c21.textContent)){

    window.alert("Ganhou")

}else if ((c31.textContent ==   c32.textContent) && (c31.textContent ==  c33.textContent)){

    window.alert("Ganhou")    

}else if(( c31.textContent ==   c22.textContent) && (c31.textContent ==  c13.textContent)){

    window.alert("Ganhou na diagonal")   
}



    var aux = jog1;
    jog1=jog2;
    jog2=aux;

}

function teste7 (){
 
    c32.textContent = jog2;
 
    if((c32.textContent ==   c31.textContent) && (c32.textContent ==  c33.textContent)){

        window.alert("Ganhou")
    
    }else if ((c32.textContent ==   c12.textContent) && (c32.textContent ==  c22.textContent)){
    
        window.alert("Ganhou")    
    
    }

    var aux = jog1;
    jog1=jog2;
    jog2=aux;

}

function teste8 (){

    c33.textContent = jog2;

    if((c33.textContent ==   c13.textContent) && (c33.textContent ==  c23.textContent)){

        window.alert("Ganhou")
    
    }else if ((c33.textContent ==   c32.textContent) && (c33.textContent ==  c31.textContent)){
    
        window.alert("Ganhou")    
    
    }else if(( c33.textContent ==   c22.textContent) && (c33.textContent ==  c11.textContent)){
    
        window.alert("Ganhou na diagonal")   
    }

    var aux = jog1;
    jog1=jog2;
    jog2=aux;

}