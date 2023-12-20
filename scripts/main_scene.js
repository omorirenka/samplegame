class MyScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MyScene1', active: true });
    }

    preload() {
        // 画像の読み込み(使用する時の名前, パス)
       this.load.image('back', 'assets/background.png');
       this.load.image('taro', 'assets/taro.png');
       this.load.image('hanako', 'assets/hanako.png');
       this.load.image('apple', 'assets/apple.png');
       this.load.image('orange', 'assets/orange.png');
   }

   // シーン初期化処理
   create() {
       this.add.image(400, 225, 'back');
       const taro = this.physics.add.sprite(50, 50, 'taro');
       const hanako = this.physics.add.sprite(750, 400, 'hanako');
       this.taro = taro;
       this.hanako = hanako;

       for(let i = 1;i<=5;i++){
        let applex = Phaser.Math.Between(25, 775);
        let appley = Phaser.Math.Between(25, 425);
        let orangex = Phaser.Math.Between(25, 775);
        let orangey = Phaser.Math.Between(25, 425);
        this.add.image(applex, appley , 'apple');
        this.add.image(orangex, orangey , 'orange');
       }

   }
   
    update(time, delta) {
        let cursors = this.input.keyboard.createCursorKeys();
        if(cursors.up.isDown){
            this.taro.setVelocityY(-40);
            this.hanako.setVelocityY(40);
        } else if(cursors.down.isDown){
            this.taro.setVelocityY(40);
            this.hanako.setVelocityY(-40);
        }else if(cursors.left.isDown){
            this.taro.setVelocityX(-40);
            this.hanako.setVelocityX(40);
        }else if(cursors.right.isDown){
            this.taro.setVelocityX(40);
            this.hanako.setVelocityX(-40);
        }else{
            this.taro.setVelocityX(0);
            this.taro.setVelocityY(0);
            this.hanako.setVelocityX(0);
            this.hanako.setVelocityY(0);
        }
    }
}