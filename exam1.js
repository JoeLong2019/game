class exam1 extends Phaser.Scene {
    constructor() {
        super({ key: "exam1" });
    }

    preload(){
        this.load.image('background','assets/techno.jpg'); // loads background
        this.load.image('man','assets/man.jpg'); // loads sprite
    }

    create() {
        this.image = this.add.image(300, 300,'background'); // makes background
        this.image = this.add.image(150, 480,'man') // makes sprite
    
        this.input.keyboard.on('keyup_D', function (event) { // on key D move 10 px to the right
            this.image. x += 10;
        }, this);

        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    }

    update(delta){
        if (this.key_A.isDown) 
            this.image.x +=10; // slides/smooth movement

            this.input.keyboard.on('keyup', function (e) {
    if(e.key == "2"){
        this.scene.start("exam2");
    }
}, this);
    
    this.input.keyboard.on('keyup', function (e) {
    if(image.x == width1500){
        width1501 = "exam2"
        this.scene.start("exam2");
    }
}, this);
}
}