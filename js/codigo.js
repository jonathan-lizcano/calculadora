
let p = {

    teclas: document.querySelectorAll("#calculadora ul li"),
    accion: null,
    digito: null,
    cantidadSignos: 0,
    cantidadDecimal : false,
    resultado : false,
    operaciones: document.querySelector('#operaciones')
}

let m = {

    inicio: function(){

        for( let i = 0; i < p.teclas.length; i++){
            p.teclas[i].addEventListener( 'click', m.imprimirTecla);
        }
    },

    teclado: function(){

        document.addEventListener("keydown", m.oprimir);
    },

    oprimir: function(tecla){
        console.log(tecla.keyCode);

        if(tecla.keyCode == 96 || tecla.keyCode == 48){

            p.accion = 'numero';
            p.digito = 0;

        }

        if(tecla.keyCode == 97 || tecla.keyCode == 49){

            p.accion = 'numero';
            p.digito = 1;

        }

        if(tecla.keyCode == 98 || tecla.keyCode == 50){

            p.accion = 'numero';
            p.digito = 2;

        }

        if(tecla.keyCode == 99 || tecla.keyCode == 51){

            p.accion = 'numero';
            p.digito = 3;

        }

        if(tecla.keyCode == 100 || tecla.keyCode == 52){

            p.accion = 'numero';
            p.digito = 4;

        }

        if(tecla.keyCode == 101 || tecla.keyCode == 53){

            p.accion = 'numero';
            p.digito = 5;

        }

        if(tecla.keyCode == 102 || tecla.keyCode == 54){

            p.accion = 'numero';
            p.digito = 6;

        }

        if(tecla.keyCode == 103 || tecla.keyCode == 55){

            p.accion = 'numero';
            p.digito = 7;

        }

        if(tecla.keyCode == 104 || tecla.keyCode == 56){

            p.accion = 'numero';
            p.digito = 8;

        }

        if(tecla.keyCode == 105 || tecla.keyCode == 57){

            p.accion = 'numero';
            p.digito = 9;

        }

        if(tecla.keyCode == 187 || tecla.keyCode == 107){

            p.accion = 'signo';
            p.digito = '+';

        }

        if(tecla.keyCode == 109 || tecla.keyCode == 189){

            p.accion = 'signo';
            p.digito = '-';

        }

        if(tecla.keyCode == 106 || tecla.keyCode == 88){

            p.accion = 'signo';
            p.digito = '*';

        }

        if(tecla.keyCode == 111){

            p.accion = 'signo';
            p.digito = '/';

        }

        if(tecla.keyCode == 110 || tecla.keyCode == 190){

            p.accion = 'decimal';
            p.digito = '.';

        }


        if(tecla.keyCode == 13){

            p.operaciones.innerHTML = eval(p.operaciones.innerHTML);
            p.accion = 'igual';
            p.digito = '';

        }

        if(tecla.keyCode == 8){

            m.limpiar();
            p.accion = '';
            p.digito = '';

        }

        m.calculadora(p.accion, p.digito)
    },

    imprimirTecla: function(tecla){

        p.accion = tecla.target.getAttribute('class');
        p.digito = tecla.target.innerHTML;
        
        m.calculadora(p.accion, p.digito)
    },

    calculadora: function(accion, digito){

        switch(accion){

            case 'numero':
                p.cantidadSignos = 0;

                if(p.operaciones.innerHTML == 0){

                    p.operaciones.innerHTML = digito;
                }else{

                    if(p.resultado){
                        
                        p.resultado = false;
                        p.operaciones.innerHTML = digito;
                    }else{

                        p.operaciones.innerHTML += digito;
                    }
                }
                
            break;
            
            case 'signo':

                p.cantidadSignos++
                if(p.cantidadSignos == 1){

                    if(p.operaciones.innerHTML == 0){

                        p.operaciones.innerHTML == 0
                    }else{

                        p.operaciones.innerHTML += digito;
                        p.cantidadDecimal = false;
                        p.resultado = false;
                    }

                }
            break;
            
            case 'decimal':

                if(!p.cantidadDecimal){

                    p.operaciones.innerHTML += digito;
                    p.cantidadDecimal = true;
                    p.resultado = false;
                }
            break;

            case 'igual':

                p.operaciones.innerHTML = eval(p.operaciones.innerHTML);
                p.resultado = true;
                console.log('resultado',p.resultado);
            break;
        }
    },

    limpiar: function(){

        p.operaciones.innerHTML = 0;
    }

}
m.inicio();
m.teclado();