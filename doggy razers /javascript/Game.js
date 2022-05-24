class Game{
    constructor(){
    }

    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data){gameState = data.val()})

    }

    update(state){
        database.ref("/").update({gameState: state})
    }

    async start(){
        if(gameState ===0){
            player1 = new Players()
            var playerCountRef = await database.ref("jugadorCount").once("value")
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player1.getCount();
            }
        
            form1 = new Formulario()
            form1.display()
        }
        carSpritev1=createSprite(100,200,50,50)
        carSpritev2=createSprite(200,200,50,50)
        carSpritev3=createSprite(300,200,50,50)
        carSpritev4=createSprite(400,200,50,50)
        cars=[carSpritev1, carSpritev2, carSpritev3, carSpritev4]
    

    }

    play(){
        form1.hide()
        textSize(30)
        text("Starting", width/2, height/8)
        //Players.getPlayerInfo();

        if(allplayers!==undefined){
            var index = 0; //CAMBIO
            var display_position=150

            for(var plr in allplayers){
                index = index +1; //cambio
               // if(plr==="player"+ player1.index)
                if(index === player1.index){
                    fill("red")
                }
               // else
                  //  fill("black")
                display_position+=20
                textSize(20)
                text(allplayers[plr].name + ": " + allplayers[plr].distance, width/2, display_position)
            }
        }
    if(keyIsDown(UP_ARROW) && player1.index!==null){
        player1.distance+=50
        player1.update();





    }
  drawSprites()


}



    
}