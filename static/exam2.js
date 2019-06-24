 class exam2 extends Phaser.Scene {
    constructor() {
        super({ key:"exam2"} );
    }

    create() {
        
        this.image = this.add.image(800, 300,'background'); // makes background
        // this.image = this.add.image(600, 475,'boulder')
        this.image = this.add.image(350, 600,'boulder1')
        this.image = this.add.image(550, 400,'boulder2')
        this.image = this.add.image(750, 400,'boulder3')
        this.image = this.add.image(950, 200,'boulder4')
        platform = this.physics.add.image(-30, 220,'platform')
        land = this.physics.add.image(250,600,'land')
        man = this.physics.add.sprite(5, 225,'man')
        
        
        man.setCollideWorldBounds(true); // check the man bounds/make sure it doesnt go off the screen
        land.setCollideWorldBounds(true);

    
        // this.input.keyboard.on('keyup_D', function (event) { // on key D move 10 px to the right
        //     man. x += 5;
        // }, this);

        // this.input.keyboard.on('keyup_W', function (event) { // on key W move 10 px to the right
        //     man. y += -5;
        // }, this);

        // this.input.keyboard.on('keyup_S', function (event) { // on key S move 10 px to the right
        //     man. y += 5;
        // }, this);

        // this.input.keyboard.on('keyup_A', function (event) { // on key A move 10 px to the right
        //     man. x += 5;
        // }, this);

        land.body.allowGravity = false;
        platform.body.allowGravity = false;

        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    }

    update(delta){
        if (this.key_D.isDown) 
            man.x +=5; // slides/smooth movement

            if (this.key_W.isDown) 
            man.y +=-5; // slides/smooth movement

            if (this.key_S.isDown) 
            man.y +=5; // slides/smooth movement

            if (this.key_A.isDown) 
            man.x +=-5; // slides/smooth movement

            this.input.keyboard.on('keyup', function (e) {
    if(e.key == "3"){
        this.scene.start("exam3");
    }
}, this);
    
    this.input.keyboard.on('keyup', function (e) {
        console.log('Character X Position: ' + man.x)
       if(man.x >= 1550){
            this.scene.start("exam3");
    }
}, this);

}
}
    
    // this.input.keyboard.on('keyup', function (e) {
//     if(e.key == "2"){
//         this.scene.start("exam2");
//     }
// }, this);


