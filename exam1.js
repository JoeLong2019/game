class exam1 extends Phaser.Scene {
    constructor() {  
        super({ key: "exam1" });
    }
    
    preload(){
        this.load.image('background','assets/techno.jpg'); // loads background
        this.load.image('cloud','assets/cloud.png')
        this.load.image('block1','assets/BlueBlockFX1.png')
        this.load.image('block2','assets/BlueBlockFX2.png')
        this.load.image('block3','assets/BlueBlockFX3.png')
        this.load.image('block4','assets/BlueBlockFX4.png')
        this.load.image('block5','assets/BlueBlockFX5.png')
        this.load.image('platform','assets/platform.png')
        this.load.image('boulder', 'assets/boulder.png')
        this.load.image('spike1','assets/spike1.png')
        this.load.image('spike2','assets/spike2.png')
        this.load.image('spike3','assets/spike3.png')
        this.load.image('man','assets/hero.png'); // loads sprite
    }

    create() {
     
        this.image = this.add.image(800, 300,'background').setBounds; // makes background
        this.image = this.add.image(800, 600, 'cloud')
        this.image = this.add.image(700,585,'block1')
        this.image = this.add.image(425,585,'block2')
        this.image = this.add.image(250,585,'block3')
        this.image = this.add.image(1450,585,'block4')
        this.image = this.add.image(1450,500,'block5')
        this.image = this.add.image(275,590,'spike1')
        this.image = this.add.image(445,590,'spike2')
        this.image = this.add.image(1000,590,'spike3')
        this.image = this.physics.add.sprite(25, 575,'man')
        
     
        this.input.keyboard.on('keyup_D', function (event) { // on key D move 10 px to the right
            this.image. x += 5;
        }, this);

        this.input.keyboard.on('keyup_W', function (event) { // on key W move 10 px to the right
            this.image. y += -5;
        }, this);

        this.input.keyboard.on('keyup_S', function (event) { // on key S move 10 px to the right
            this.image. y += 5;
        }, this);

        this.input.keyboard.on('keyup_A', function (event) { // on key A move 10 px to the right
            this.image. x += 5;
        }, this);

        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        
        
    }

    update(delta){
        if (this.key_D.isDown) 
        
            this.image.x +=5; // slides/smooth movement

            if (this.key_W.isDown) 
            this.image.y +=-5; // slides/smooth movement

            if (this.key_S.isDown) 
            this.image.y +=5; // slides/smooth movement

            if (this.key_A.isDown) 
            this.image.x +=-5; // slides/smooth movement
        
            // game.physics.arcade.overlap('man','block1',collisionHandler,null,this);


            this.input.keyboard.on('keyup', function (e) {
    if(e.key == "2"){
        this.scene.start("exam2");
    }
}, this);
    
    this.input.keyboard.on('keyup', function (e) {
        console.log('Character X Position: ' + this.image.x)
       if(this.image.x >= 1550){
            this.scene.start("exam2");
            // Phaser.game.setBounds(0, 0, 1600, 600);
            this.image.position = {
            x : gameWidth,
            y : gameHeight
            
        }
        if(this.image.position.x <= 0) this.sprite.position = 0 
    }
}, this);


// function create() {

//     game.physics.startSystem(Phaser.Physics.NINJA);
//     game.physics.ninja.gravity = 1;
//     game.physics.ninja.setBoundsToWorld();
// }
}
}