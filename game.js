var config = {
    type:Phaser.AUTO,
    Width:800,
    height:600,
    Physics: {
        default: 'arcade',
        arcade: {
            gravity: {y : 200}
        }
    },
    scene: [ exam1 ]
};

var game = new Phaser.Game(config);