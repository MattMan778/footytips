export class Tip {
    season: string;
    round : number;
    game : number ;
    user : string ;
    date_time : string;
    pick : string;
    correct : string;

    constructor(
        season,
        round,
        game,
        user,
        date_time,
        pick,
        correct
    ) {
        this.season = season;
        this.round = round;
        this.game = game;
        this.user = user;
        this.date_time = date_time;
        this.pick = pick;
        this.correct = correct;
    }
} 