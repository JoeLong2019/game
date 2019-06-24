class exam3 extends Phaser.Scene {
    constructor() {
        super({ key:"exam3"} );
    }


create() {
     
    this.image = this.add.image(800, 300,'background') //.setBounds; // makes background
    this.image = this.add.image(800, 600, 'cloud')
    block1 = this.physics.add.image(700,275,'block1')
    block2 = this.physics.add.image(425,275,'block2')
    block3 = this.physics.add.image(250,275,'block3')
    block1 = this.physics.add.image(500,275,'block1')
    block2 = this.physics.add.image(425,195,'block2')
    block6 = this.physics.add.image(600,300,'block6')
    block7 = this.physics.add.image(600,340,'block7')
    block4 = this.physics.add.image(1450,275,'block4')
    block3 = this.physics.add.image(1250,220,'block3')
    spike1 = this.physics.add.image(275,275,'spike1')
    spike2 = this.physics.add.image(445,275,'spike2')
    spike3 = this.physics.add.image(1000,275,'spike3')
    spike1 = this.physics.add.image(100,275,'spike1')
    spike2 = this.physics.add.image(600,275,'spike2')
    spike3 = this.physics.add.image(800,275,'spike3')
    man = this.physics.add.sprite(25, 270,'man')
    
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
       this.physics.add.collider(block7, man, hitMan, null, this);
       // this.physics.add.overlap(man, block1, null) 
       function hitMan (block7, man)
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
       block6.body.allowGravity = false;
       block7.body.allowGravity = false;
       spike1.body.allowGravity = false;
       spike2.body.allowGravity = false;
       spike3.body.allowGravity = false;

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
    
        // game.physics.arcade.overlap('man','block1',collisionHandler,null,this);


        this.input.keyboard.on('keyup', function (e) {
if(e.key == "1"){ // 1 key loads the second page (exam1)
    this.scene.start("exam1");
}
}, this);

this.input.keyboard.on('keyup', function (e) {
    console.log('Character X Position: ' + man.x)
   if(man.x >= 1550){             // on pixle 1550
        this.scene.start("exam1"); // load page 2 (exam2)
        // Phaser.game.setBounds(0, 0, 1600, 600);
        man.position = {
        // x : Width,
        // y : Height
        
    }
    if(man.position.x <= 0) this.sprite.position = 0 
}
}, this);


function create() {
var platform = 'cloud'
var block1 = 'block1'
var spike1 = 'spike1'
platform = this.physics.add.staticGroup();
this.physics.add.collider(platform,'cloud')
block1 = this.physics.add.group();
this.physics.add.collider(man, block1)
this.physics.add.collider('man','block1')
this.physics.add.collider(man, spike1)
this.physics.add.collider('man','spike1')

}
} this;
}
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