 
//CARGA DE LA PAGINA
$(document).ready(function() {



//REIBIR VARIABLE MENSAJE Y ALERTA

$VARIABLEURL = getQueryVariable("msg");
 

if($VARIABLEURL == "0"){ 

  MsgBox("Mensaje VM","¡ Mensaje enviado !", 1);

}else if($VARIABLEURL == "1"){

  MsgBox("Mensaje VM","¡ No se pudo enviar el mensaje !", 2);
  

}  

//============================================


 

	$(window).scroll(function() {


  	if($(document).scrollTop() > 40) {

    $('#IDNAV').addClass('bgcolortransp01'); 

    }    else {

    $('#IDNAV').removeClass('bgcolortransp01');

    }


  });


});

//TRAE VARIABLES DE LA URL
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }

       return("-1");
}


//SCROLL TO VIEW
function FNC_SCROLLTO(IDSECCION) {
  var elmnt = document.getElementById(IDSECCION);
  elmnt.scrollIntoView({block: "start", behavior: "smooth"});
}
 


//============================================
//MENSAJE BUENO - SUCCESS

function MsgBox(HEADER_TEXT,BODY_TEXT,COD) {

  //1 --> VERDE
  //2 --> AMARILLO
  //3 --> ROJO
  //4 --> CELESTE
   

  if (COD == 1) {

      new PNotify({
          title: HEADER_TEXT,
          text: BODY_TEXT,
          type: 'success',
          delay: 1500,
          addclass: "stack-bottomright h6"

      })

  }


  if (COD == 2) {


      new PNotify({
          title: HEADER_TEXT,
          text: BODY_TEXT,
          delay: 1500,
          addclass: "stack-bottomright h6"
      });

  }


  if (COD == 3) {

      new PNotify({
          title: HEADER_TEXT,
          text: BODY_TEXT,
          type: 'error',
          delay: 3000,
          addclass: "stack-bottomright h6"
      });

  }

  if (COD == 4) {


      new PNotify({
          title: HEADER_TEXT,
          text: BODY_TEXT,
          type: 'info',
          delay: 1500,
          addclass: "stack-bottomright h6"

      });

  }

}