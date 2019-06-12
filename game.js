var config = {
    type:Phaser.AUTO,
    width:1600,
    height:600,
    physics: {
        default:'arcade',
        arcade: {
            gravity: {y : 200}
        }
    },
    scene: [exam1, exam2 ]
};

var game = new Phaser.Game(config);