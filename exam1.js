class exam1 extends Phaser.Scene {
    constructor() {
        super({key:"exam1"});
    }

    preload() {
        this.load.image('ball','assets.image.png');
    }

    create() {
        this.image = this.add.image(400,300,'ball');
    }
}