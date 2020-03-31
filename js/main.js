// ARRAY CON LISTA COGNOMI
var cognomi = ['Bianchi' , 'Rossi', 'Duzioni', 'Balsano' , 'Verdi']

// Chidere cognome all'utente
var user = prompt('Inserisci qui il tuo cognome');
// Iniserire cognome utente nella lista Array
 cognomi.push(user);
 var alfabeto = cognomi.sort();
 
//  console.log('lista ordinata in ordine alfabetico', alfabeto);
// REFERENZE 
var lista = document.getElementById('lista');
console.log(lista);
 
 for (var i = 0; i < cognomi.length; i++) {
     var elementoLista = cognomi[i];
    
     var precedente = lista.innerHTML;
     
    
  
     var nuovo = '<li>' + elementoLista + '</li>';
     lista.innerHTML = precedente + nuovo;
    
     var posizione = cognomi.indexOf(user) + 1;
     console.log('La tua posizione nella lista è ', posizione);


     document.getElementById('posizione').innerHTML = posizione
    

     
    
 }
 
 
 
 
 

