var config = {
    type:Phaser.AUTO,
    width:1600, // game width
    height:600, // game height
    active: true,
    physics: {
        default:'arcade',
        arcade: {
            debug: false,
            gravity: {x : 30}, // the game gravity
            gravity: {y : 100},
            checkCollision: { // check collision
                up: true,
                down: true,
                left: true,
                right: true,
                spike1: true,
                block6: true,
                height300: true
            },
        }
    },
    scene: [exam1, exam2, exam3 ]
};

// update:function(){
//     game.physics.arcade.overlap('man','block1',collisionHandler,null,this);
// }

// this.sprite.setVelocity(100, 200).setBounce(1, 1).setCollideWorldBounds(true);
var game = new Phaser.Game(config);
var man;
var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var spike1;
var spike2;
var spike3;
var height300 = 300;
var boulder1;
var boulder2;
var boulder3;
var boulder4;
var land;
var land2;
var land3;
var land4;
var platform;

function myFunction(){
    window.location.reload();
} 












// AYE JOE TRY ADDING let TO BOULDER TO REUSE IT OVER AND OVER AGAIN !!!!!!!!!!!!