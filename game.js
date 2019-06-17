var config = {
    type:Phaser.AUTO,
    width:1600,
    height:600,
    active: true,
    physics: {
        default:'arcade',
        arcade: {
            debug: false,
            gravity: {x : 15}, // the game gravity
            setGameBounds : {0 : 0},
        }
    },
    scene: [exam1, exam2 ]
};

// this.sprite.setVelocity(100, 200).setBounce(1, 1).setCollideWorldBounds(true);
var game = new Phaser.Game(config);
