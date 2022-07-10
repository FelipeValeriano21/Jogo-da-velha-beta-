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
const m1 =  document.getElementById ( 'm1' );
const info =  document.getElementById ( 'info' );


var jog1 = "O"; 
var jog2 = "X"; 
var cont = 0; 
var nome1 = ""; 
var nome2 = "";

m1.textContent = ("Vez do ", jog2);
    

//nome1 = prompt("Nome do jogador 1");
//nome2 = prompt("Nome do jogador 2");

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


function teste (){
 
 
    c11.textContent = jog2;
    if((  c11.textContent ==   c12.textContent) && (c11.textContent ==  c13.textContent)){

        window.alert("Ganhou")
        
    location.reload();


    }else if (( c11.textContent ==   c21.textContent) && (c11.textContent ==  c31.textContent)){

        window.alert("Ganhou")    

    }else if(( c11.textContent ==   c22.textContent) && (c11.textContent ==  c33.textContent)){

        window.alert("Ganhou na diagonal")   

    }else{

    cont = cont +1; 



    }

    if(cont==9){

        window.alert("Deu velha")

        
  info.textContent = ("FIM DE JOGO");

  m1.textContent = ("!");


  
    }


    c11.removeEventListener('click', teste,false); 

  var aux = jog1;
  jog1=jog2;
  jog2=aux;
  

  m1.textContent = ("Vez do jogador ", jog2);
    
}

function teste1 (){

    c12.textContent = jog2;
    if(( c12.textContent ==   c11.textContent) && (c12.textContent ==  c13.textContent)){

        window.alert("Ganhou")

    }else if (( c12.textContent ==   c22.textContent) && (c12.textContent ==  c32.textContent)){

        window.alert("Ganhou")    

      


    }else{

        cont = cont +1; 
    

    
        }
    
        if(cont==9){
    
            window.alert("Deu velha")

            info.textContent = ("FIM DE JOGO");
            m1.textContent = ("!");
        }

    var aux = jog1;
    jog1=jog2;
    jog2=aux;
  m1.textContent = ("Vez do ", jog2);

  c12.removeEventListener('click', teste1,false); 
}



function teste2 (){
  
    c13.textContent = jog2;

   if((  c13.textContent ==   c11.textContent) && (c13.textContent ==  c12.textContent)){

       window.alert("Ganhou")

   }else if (( c13.textContent ==   c23.textContent) && (c13.textContent ==  c33.textContent)){

       window.alert("Ganhou")    

   }else if(( c13.textContent ==   c22.textContent) && (c13.textContent ==  c31.textContent)){

       window.alert("Ganhou na diagonal")   
   }else{

    cont = cont +1; 

 

    }

    if(cont==9){

        window.alert("Deu velha")

        info.textContent = ("FIM DE JOGO");
    }




    var aux = jog1;
    jog1=jog2;
    jog2=aux;

    m1.textContent = ("Vez do ", jog2);

    c13.removeEventListener('click', teste2,false); 
   
}

function teste3 (){

    c21.textContent = jog2;

    if(( c21.textContent ==   c22.textContent) && (c21.textContent ==  c23.textContent)){

        window.alert("Ganhou")

    }else if (( c21.textContent ==   c11.textContent) && (c21.textContent ==  c31.textContent)){

        window.alert("Ganhou")    


    }else{

        cont = cont +1; 
    
      
    
        }
    
        if(cont==9){
    
            window.alert("Deu velha")

            info.textContent = ("FIM DE JOGO");
        }


    
    var aux = jog1;
    jog1=jog2;
    jog2=aux;

    m1.textContent = ("Vez do ", jog2);

    c21.removeEventListener('click', teste3,false); 
    
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
    }else{

        cont = cont +1; 
    
        }
    
        if(cont==9){
    
            window.alert("Deu velha")

            info.textContent = ("FIM DE JOGO");

        }
 

    var aux = jog1;
    jog1=jog2;
    jog2=aux;

    m1.textContent = ("Vez do ", jog2);

    c22.removeEventListener('click', teste4,false); 

}

function teste5 (){

    c23.textContent = jog2;

    if((  c23.textContent ==   c21.textContent) && (c23.textContent ==  c22.textContent)){

        window.alert("Ganhou")
 
    }else if (( c23.textContent ==   c13.textContent) && (c23.textContent ==  c33.textContent)){
 
        window.alert("Ganhou")    
 
    }else{

        cont = cont +1; 
    

    
        }
    
        if(cont==9){
    
            window.alert("Deu velha")

            info.textContent = ("FIM DE JOGO");
        }

    var aux = jog1;
    jog1=jog2;
    jog2=aux;

    m1.textContent = ("Vez do ", jog2);

    c23.removeEventListener('click', teste5,false); 

}

function teste6 (){

    c31.textContent = jog2;
    
    
   if((c31.textContent ==   c11.textContent) && (c31.textContent ==  c21.textContent)){

    window.alert("Ganhou")

}else if ((c31.textContent ==   c32.textContent) && (c31.textContent ==  c33.textContent)){

    window.alert("Ganhou")    

}else if(( c31.textContent ==   c22.textContent) && (c31.textContent ==  c13.textContent)){

    window.alert("Ganhou na diagonal")   
}else{

    cont = cont +1; 

    }

    if(cont==9){

        window.alert("Deu velha")

        info.textContent = ("FIM DE JOGO");
    }



    var aux = jog1;
    jog1=jog2;
    jog2=aux;

    m1.textContent = ("Vez do ", jog2);

    c31.removeEventListener('click', teste6,false); 

}

function teste7 (){
 
    c32.textContent = jog2;
 
    if((c32.textContent ==   c31.textContent) && (c32.textContent ==  c33.textContent)){

        window.alert("Ganhou")
    
    }else if ((c32.textContent ==   c12.textContent) && (c32.textContent ==  c22.textContent)){
    
        window.alert("Ganhou")    
    
    }else{

        cont = cont +1; 
    
    
        }
    
        if(cont==9){
    
            window.alert("Deu velha")

            info.textContent = ("FIM DE JOGO");

            
        }

    var aux = jog1;
    jog1=jog2;
    jog2=aux;

    m1.textContent = ("Vez do ", jog2);

    c32.removeEventListener('click', teste7,false); 

}

function teste8 (){

    c33.textContent = jog2;

    if((c33.textContent ==   c13.textContent) && (c33.textContent ==  c23.textContent)){

        window.alert("Ganhou")
    
    }else if ((c33.textContent ==   c32.textContent) && (c33.textContent ==  c31.textContent)){
    
        window.alert("Ganhou")    
    
    }else if(( c33.textContent ==   c22.textContent) && (c33.textContent ==  c11.textContent)){
    
        window.alert("Ganhou na diagonal")   
    }else{

        cont = cont +1; 
    
   
    
        }
    
        if(cont==9){
    
            window.alert("Deu velha")

            info.textContent = ("FIM DE JOGO");
        }

    var aux = jog1;
    jog1=jog2;
    jog2=aux;

    m1.textContent = ("Vez do ", jog2);

    c33.removeEventListener('click', teste8,false); 

}