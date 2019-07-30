 class exam2 extends Phaser.Scene {
    constructor() {
        super({ key:"exam2"} );
    }

    create() {
        
        this.image = this.add.image(800, 300,'background'); // makes background
        // this.image = this.add.image(600, 475,'boulder')
        boulder1 = this.physics.add.image(350, 650,'boulder1')
        boulder2 = this.physics.add.image(550, 525,'boulder2')
        boulder3 = this.physics.add.image(750, 400,'boulder3')
        boulder4 = this.physics.add.image(950, 400,'boulder4')
        land2 = this.physics.add.image(505, 350,'land2')
        land3 = this.physics.add.image(710, 210,'land3')
        land4 = this.physics.add.image(935, 210,'land4')
        platform = this.physics.add.image(-30, 220,'platform')
        land = this.physics.add.image(295,600,'land')
        man = this.physics.add.sprite(5, 195,'man')
        
        
        man.setCollideWorldBounds(true); // check the man bounds/make sure it doesnt go off the screen
        land.setCollideWorldBounds(true);
        land2.setCollideWorldBounds(true);
        land3.setCollideWorldBounds(true);
        land4.setCollideWorldBounds(true);
        

        
        this.physics.add.collider(boulder1, man, hitMan, null, this);
       // this.physics.add.overlap(man, block1, null) 
       function hitMan (boulder1, man)
       {
       man.disableBody(true, true);
       }  
       this.physics.add.collider(boulder2, man, hitMan, null, this);
       // this.physics.add.overlap(man, block1, null) 
       function hitMan (boulder2, man)
       {
       man.disableBody(true, true);
       }  
       this.physics.add.collider(boulder3, man, hitMan, null, this);
       // this.physics.add.overlap(man, block1, null) 
       function hitMan (boulder3, man)
       {
       man.disableBody(true, true);
       }  
       this.physics.add.collider(boulder4, man, hitMan, null, this);
       // this.physics.add.overlap(man, block1, null) 
       function hitMan (boulder4, man)
       {
       man.disableBody(true, true);
       }  
       this.physics.add.collider(platform, man, hitMan, null, this);
       // this.physics.add.overlap(man, block1, null) 
       function hitMan (platform, man)
       {
       platform.body.immovable = true; platform.body.moves = false;
       }  

       

    
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
        land2.body.allowGravity = false;
        land3.body.allowGravity = false;
        land4.body.allowGravity = false;
        boulder1.body.allowGravity = false;
        boulder2.body.allowGravity = false;
        boulder3.body.allowGravity = false;
        boulder4.body.allowGravity = false;
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
    }}

