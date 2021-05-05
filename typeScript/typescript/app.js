"use strict";
(() => {
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
        constructor(name, team, realName, canFight, fightsWon = 0) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            this.canFight = canFight;
            this.fightsWon = fightsWon;
        }
    }
    const antman = new Avenger('capi', 'capi');
    antman.team = 'Ironman';
    console.log(antman);
})();
