'use strict';
// const wynik = document.querySelector('#wynik');
const form = $('form');

form.on('submit',function(e){
    e.preventDefault();
    introduceYourself();
})

function introduceYourself (){
    const inputs = $('input');
    $('#wynik').hide(250).empty();


    for (let i = 0; i<inputs.length-1; i++){
        inputs[i].placeholder = "";
        if($(inputs[i]).val() === "" || inputs[i].placeholder === "Podaj dane"){
            inputs[i].placeholder = "Podaj dane";
        } else {
            switch (i){
                case 0:
                $('#wynik').html(`${wynik.innerHTML}Twoje imię to: <b> ${inputs[i].value}</b><br>`).show(250);
                $(inputs[i]).val("");
                break;
                case 1: 
                $('#wynik').html(`${wynik.innerHTML}Twoje nazwisko to: <b> ${inputs[i].value}</b><br>`).show(250);
                $(inputs[i]).val("");
                break;
            }
        }
    }
}
