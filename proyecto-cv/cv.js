
document.addEventListener("DOMContentLoaded", function(event) {

    document.getElementById('imprime').addEventListener('click',function(){
        window.print();
    });

    document.getElementById('cambio-color').addEventListener('click',function(){
        
        if(document.body.style.backgroundColor === 'rgb(134, 102, 112)')
            document.body.style.backgroundColor = '#fff';
        else
            document.body.style.backgroundColor = '#866670';

    });

});