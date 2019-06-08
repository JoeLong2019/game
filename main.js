var game = new Phaser.Game(640, 360, Phaser.AUTO);// this game will have one state

var GameState = {
    perload: function(){// load the game assets before the game starts
        this.load.image('background')

    },
    create: function(){// execute after everything loads
        this.backgroung = this.game.add.sprite(0, 0, 'background');
    },
    update: function(){// ececuted multiple time per second

    }
};

game.state.add('GameState', GameState);
game.state.start('GameState');