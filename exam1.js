class exam1 extends Phaser.Scene {
    constructor(game, x, y) {  
        super({ key: "exam1" });
    var man;
    var block1;
    }
    
    
    preload(){
        this.load.image('background','assets/techno.jpg'); // loads background
        this.load.image('cloud','assets/cloud.png');
        this.load.image('block1','assets/BlueBlockFX1.png');
        this.load.image('block2','assets/BlueBlockFX2.png');
        this.load.image('block3','assets/BlueBlockFX3.png');
        this.load.image('block4','assets/BlueBlockFX4.png');
        this.load.image('block5','assets/BlueBlockFX4.png');
        this.load.image('block6','assets/BlueBlockFX6.png');
        this.load.image('block7','assets/BlueBlockFX7.png');
        this.load.image('platform','assets/platform.png');
        this.load.image('boulder', 'assets/boulder.png');
        this.load.image('boulder1', 'assets/boulder1.png');
        this.load.image('boulder2', 'assets/boulder2.png');
        this.load.image('boulder3', 'assets/boulder3.png');
        this.load.image('boulder4', 'assets/boulder4.png');
        this.load.image('spike1','assets/spike1.png');
        this.load.image('spike2','assets/spike2.png');
        this.load.image('spike3','assets/spike3.png');
        this.load.image('land','assets/land.png');
        this.load.image('land2','assets/land2.png');
        this.load.image('land3','assets/land3.png');
        this.load.image('land4','assets/land4.png');
        this.load.image('man','assets/hero.png'); // loads sprite
    }


    create() {
     
        this.image = this.add.image(800, 300,'background').setBounds; // makes background
        this.add.image(800, 600, 'cloud');
        block1 = this.physics.add.image(800,585,'block1');
        block2 = this.physics.add.image(425,585,'block2');
        block3 = this.physics.add.image(250,585,'block3');
        block4 = this.physics.add.image(1450,585,'block4');
        block5 = this.physics.add.image(1450,500,'block5');
        block6 = this.physics.add.image(600,450,'block6');
        spike1 = this.physics.add.image(275,590,'spike1');
        spike2 = this.physics.add.image(445,590,'spike2');
        spike3 = this.physics.add.image(1000,590,'spike3');
        man = this.physics.add.sprite(25, 575,'man');
        
        // man.setCollideWorldBounds;300(true);
        man.setCollideWorldBounds(true); // check the man bounds/make sure it doesnt goo off the screen
        
        
       this.physics.add.collider(block1, man, hitMan, null, this);
       // this.physics.add.overlap(man, block1, null) 
       function hitMan (block1, man)
       {
       man.disableBody(true, true);
       }  
       this.physics.add.collider(block2, man, hitMan, null, this);
       // this.physics.add.overlap(man, block1, null) 
       function hitMan (block2, man)
       {
       man.disableBody(true, true);
       }  
       this.physics.add.collider(block3, man, hitMan, null, this);
       // this.physics.add.overlap(man, block1, null) 
       function hitMan (block3, man)
       {
       man.disableBody(true, true);
       }  
       this.physics.add.collider(block4, man, hitMan, null, this);
       // this.physics.add.overlap(man, block1, null) 
       function hitMan (block4, man)
       {
       man.disableBody(true, true);
       }  
       this.physics.add.collider(block5, man, hitMan, null, this);
       // this.physics.add.overlap(man, block1, null) 
       function hitMan (block5, man)
       {
       man.disableBody(true, true);
       }  
       this.physics.add.collider(block6, man, hitMan, null, this);
       // this.physics.add.overlap(man, block1, null) 
       function hitMan (block6, man)
       {
       man.disableBody(true, true);
       }
       this.physics.add.collider(spike1, man, hitMan, null, this);
       // this.physics.add.overlap(man, block1, null) 
       function hitMan (spike1, man)
       {
       man.disableBody(true, true);
       }    
       this.physics.add.collider(spike2, man, hitMan, null, this);
       // this.physics.add.overlap(man, block1, null) 
       function hitMan (spike2, man)
       {
       man.disableBody(true, true);
       }  
       this.physics.add.collider(spike3, man, hitMan, null, this);
       // this.physics.add.overlap(man, block1, null) 
       function hitMan (spike3, man)
       {
       man.disableBody(true, true);
       }  
       
       block1.body.allowGravity = false;
       block2.body.allowGravity = false;
       block3.body.allowGravity = false;
       block4.body.allowGravity = false;
       block5.body.allowGravity = false;
       block6.body.allowGravity = false;
       spike1.body.allowGravity = false;
       spike2.body.allowGravity = false;
       spike3.body.allowGravity = false;


        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

        

      
         
        // cloud.body.immovable = true
     
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
        
            // game.physics.arcade.overlap('man','block1',collisionHandler,null,this);


            this.input.keyboard.on('keyup', function (e) {
    if(e.key == "2"){ // 2 key loads the second page (exam2)
        this.scene.start("exam2");
    }
}, this);
    
    this.input.keyboard.on('keyup', function (e) {
        console.log('Character X Position: ' + man.x)
       if(man.x >= 1550){             // on width 1550
            this.scene.start("exam2"); // load page 2 (exam2)
            // Phaser.game.setBounds(0, 0, 1600, 600);
            man.position = {
            // x : Width,
            // y : Height
            
        }
        if(man.position.x <= 0) this.sprite.position = 0 
    }
    // game.physics.arcade.collide(sprite,block1)
}, this);


function update() {
// var platform = 'cloud'
// var block1 = 'block1'
// var spike1 = 'spike1'
// var block6 = 'block6'
// platform = this.physics.add.staticGroup();assddsdw
// block1 = this.physics.add.group();
// this.physics.add.collider(man, block1)
// this.physics.add.collider('man','block1')
// this.physics.add.collider(man, spike1)
// this.physics.add.collider('man','spike1')

}
    } this;
}

// trying to get the blocks to collide with the 'man'/sprite
//     update(delta) {
//         if (this.block1OnMan) {
//             this.block1.x = this.man.x - (this.block1.width / 2)
//         }

//         this,game.physics.arcade.collide(
//             this.block1,
//             this.man,
//             this.block1HitMAn,
//             null,
//             this
//           )
// }


//     game.physics.startSystem(Phaser.Physics.NINJA);
//     game.physics.ninja.gravity = 1;
//     game.physics.ninja.setBoundsToWorld();
// }