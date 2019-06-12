 class exam2 extends Phaser.Scene {
    constructor() {
        super({ key:"exam2"} );
    }

    create() {
        this.image = this.add.image(150, 480,'man')
    
        this.input.keyboard.on('keyup_D', function (event) {
            this.image. x += 10;
        }, this);

        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    }

    update(delta){
        if (this.key_A.isDown)
            this.image.x +=14; 
    
    // this.input.keyboard.on('keyup', function (e) {
//     if(e.key == "2"){
//         this.scene.start("exam2");
//     }
// }, this);
}
}

