let suscripciones={
    free:"Solo puedes tomar los cursos gratuitos",
    basic:"Solo tienen acceso a algunos cursos",
    expert:"Tenes acceso a algunos cusrsos por un annio",
    expertDUO:"Tienes acceso tu y tu amigo a todos los cursos por un annio"
}

function tipoCurso(sus){
   if(suscripciones[sus]){
    console.log(suscripciones[sus]);
   }

}