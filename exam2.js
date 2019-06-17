 class exam2 extends Phaser.Scene {
    constructor() {
        super({ key:"exam2"} );
    }

    create() {
        
        this.image = this.add.image(800, 300,'background'); // makes background
        this.image = this.add.image(600, 475,'boulder')
        this.image = this.add.image(950, 550,'boulder')
        this.image = this.add.image(950, 450,'boulder')
        this.image = this.add.image(950, 350,'boulder')
        this.image = this.add.image(400, 520,'platform')
        this.image = this.add.image(700, 420,'platform')
        this.image = this.add.image(1000, 270,'platform')
        this.image = this.physics.add.sprite(25, 578,'man') // is moving image

    
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

            this.input.keyboard.on('keyup', function (e) {
    if(e.key == "2"){
        this.scene.start("exam2");
    game.world.setBounds(0, 0, 0, 0);
    }
}, this);
    
    this.input.keyboard.on('keyup', function (e) {
        console.log('Character X Position: ' + this.image.x)
       if(this.image.x >= 1550){
            this.scene.start("exam1");
    }
}, this);


    
    // this.input.keyboard.on('keyup', function (e) {
//     if(e.key == "2"){
//         this.scene.start("exam2");
//     }
// }, this);
}
}

