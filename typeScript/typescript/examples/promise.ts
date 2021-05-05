
(()=> {
    
    const retirarDinero = ( dineroRetirar: number):Promise<number> =>{

        var dineroActual = 1000;

        return new Promise( (res, err) => {

            if(dineroRetirar > dineroActual){
                err('Saldo insuficiente');
            }else{
                dineroActual -= dineroRetirar;
                res(dineroActual);
            }

        });


    }


    retirarDinero(500)
            .then(dineroActual => console.log(`Operación aceptada, su slado actual es ${dineroActual}`))
            .catch(console.warn);
            
    
    

})();

