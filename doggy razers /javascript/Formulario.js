class Formulario{
constructor(){
    this.input=createInput("nombre de el jugador ")
    this.Button =createButton("correr")
    this.Title=createElement("h1")
    this.esperar=createElement("h2")
}

hide(){
    this.input.hide()
    this.Button.hide()
    this.Title.hide()
    this.esperar.hide()

}
display(){
    this.Title.html("Doggy Razers")
    this.Title.position(300,20)
    this.input.position(200,20)
    this.Button.position(100,10)

    this.Button.mousePressed(()=>{
        this.input.hide()
        this.Button.hide()
        
        player1.name=this.input.value()
        playerCount+=1
        player1.index=playerCount
        player1.update()
        player1.updateCount(playerCount)
        this.esperar.html("esperando a que otros jugadores se unan" )
        this.esperar.position(100,200)
        
    })

    imagen(perritoEsperaImg, 200,200,50,50)



}





}
