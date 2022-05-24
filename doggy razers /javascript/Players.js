
class Players{
    constructor(){
        this.index=null
        this.distance=0
        this.name=null  
    }

    getCount(){    
        var playerCountRef= database.ref("playerCount");
        playerCountRef.on("value",function(data){playerCount=data.val()})
    }

        updateCount(count){
            database.ref("/").update({playerCount: count})
        }

    update(){
        var playerIndex="jugador "+this.index
        database.ref(playerIndex).set({nombre:this.name})
    }

}


