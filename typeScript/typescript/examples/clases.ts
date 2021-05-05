
(()=> {
    
    class Avenger {

        // name;
        // team;
        // realName;
        // canFight;
        // fightsWon;

        // constructor(name:string,team:string,realName?:string,canFight?:boolean, fightsWon:number = 0){
        //     this.name = name;
        //     this.team = team;
        //     this.realName = realName;
        //     this.canFight = canFight;
        //     this.fightsWon = fightsWon;
        // }

        constructor(
            public name:string,
            public team:string,
            public realName?:string,
            public canFight?:boolean,
            public fightsWon:number = 0
        ){
           
        }

    }
        const antman: Avenger = new Avenger('capi','capi');

    antman.team = 'Ironman';

    console.log(antman);
        
})();

