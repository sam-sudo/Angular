
(function () {
    
    function activar(quien: string,
                     objeto: string = 'señal',
                     momento?: string) {
        
                        if(momento){
                            console.log(`${ quien } activó la ${objeto} ${momento}`);
                        }else{
                            console.log(`${ quien } activó la ${objeto}`);
                        }

        
    }

    activar('sam','alarma');

})();

