var submit = document.getElementById('submit');

submit.addEventListener('click', function(){

    document.getElementById('ticket').className = 'show';

    // ---------------  inputs --------------//

    var name = document.getElementById('name').value;

    var km= document.getElementById('km').value;

    var age = document.getElementById('age').value;

    // ------------- validation -------------//

    var submitOK = true;

    if (name == '' ) {
        alert("Name must be added");
        submitOK = false;
        document.getElementById('ticket').className = 'hidden';
    }

    if (isNaN(km) || km < 1 || km == '' ) {
        alert("Km must be added");
        submitOK = false;
        document.getElementById('ticket').className = 'hidden';
    }
      
    if (submitOK == false) {
        return false;
    } 
    
    // --------- elaboration data -----------//

    var promotion = 'Nessuna promozione';

    var price = km * 0.21;

    if (age == 'minorenne') {
        price -=  price * 0,2;
        promotion = 'Sconto minorenne';
        
    } else if(age == 'over65'){
        price -=  price * 0,4;
        promotion = 'Sconto over-65';
    }

    var carriage = Math.floor(Math.random() * 9 ) + 1;

    var cpCode = Math.floor(Math.random() * 10000 ) + 90000;
    
    // ---------------  outputs --------------//

    document.getElementById('ticketname').innerHTML = name;

    document.getElementById('promotion').innerHTML = promotion;

    document.getElementById('carriage').innerHTML = carriage;

    document.getElementById('cpCode').innerHTML = cpCode;

    document.getElementById('price').innerHTML = price.toFixed(2) + ' &euro;';

})


var clean = document.getElementById('clean');

clean.addEventListener('click', function(){

    document.getElementById('ticket').className = 'hidden';

    document.getElementById('name').value = '';

    document.getElementById('km').value = '';

    document.getElementById('age').value = '';
    
})

