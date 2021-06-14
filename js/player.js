class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = 0;
          // create the property for the score and intialize with zero
          this.score = 0;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }
 getFruitAtEnd() {
    database.ref('FruitAtEnd').on("value", (data)=>{
    this.score = data.val;
    })
}
    static updateFruitAtEnd(score){
        database.ref('/').update({
            FruitAtEnd : score
        })
    }
}
