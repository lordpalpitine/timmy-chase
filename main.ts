info.onCountdownEnd(function () {
    for (let index = 0; index < 10; index++) {
    	
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false, effects.splatter)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 4 4 4 . . . . . . 
    . . . . . . . 4 4 4 . . . . . . 
    . . . . . . . 4 4 4 . . . . . . 
    . . . . . . . . 4 . . . . . . . 
    . . . . . . 4 4 4 4 4 . . . . . 
    . . . . . . . . 4 . . . . . . . 
    . . . . . . . . 4 . . . . . . . 
    . . . . . . . . 4 . . . . . . . 
    . . . . . . . 4 . 4 . . . . . . 
    `, SpriteKind.Player)
let timmy = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 1 f f 1 f f . . . . 
    . . . f f f f f f f f f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . f f 2 f f f f 2 f f . . . 
    . . f f f f 2 2 2 2 f f f f . . 
    . f . f f f f f f f f f f . f . 
    . f . f f . f f f f . f f . f . 
    . f . f f f f f f f f f f . f . 
    . . . f f f f f f f f f f . . . 
    . . . f f . f f f f . f f . . . 
    . . . f . . . f f . . . f . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    `, SpriteKind.Enemy)
controller.moveSprite(mySprite)
timmy.follow(mySprite, 50)
mySprite.setStayInScreen(true)
timmy.setPosition(144, 10)
info.setScore(0)
forever(function () {
    info.changeScoreBy(1)
})
game.onUpdateInterval(500, function () {
	
})
