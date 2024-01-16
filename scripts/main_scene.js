class MyScene extends Phaser.Scene {
    // count = 0
    constructor() {
        super({ key: 'MyScene1', active: true });
        this.count = 0; //取得したフルーツの数を数える
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

       let staticGroup = this.physics.add.staticGroup();
       for(let i = 1;i<=5;i++){
        let applex = Phaser.Math.Between(25, 775);
        let appley = Phaser.Math.Between(25, 425);
        let orangex = Phaser.Math.Between(25, 775);
        let orangey = Phaser.Math.Between(25, 425);
        // this.add.image(applex, appley , 'apple');
        // this.add.image(orangex, orangey , 'orange');
        staticGroup.create(applex, appley , 'apple');
        staticGroup.create(orangex, orangey , 'orange');
       }

    //    this.physics.add.overlap(taro, staticGroup, collectCoin, null, this);
    //    function collectCoin(p,coin){
    //     this.add.text(D_WIDTH*1/3,D_HEIGHT*1/2, 'Game Over', { fontSize: '32px', fill: '#FFF' });
    //     this.physics.pause();
    //    }
        this.fruitsText = this.add.text(D_WIDTH*1/3,10, 'とったフルーツの数'+this.count, { fontSize: '20px', fill: '#FFF' });
        this.physics.add.overlap(hanako, staticGroup, collectCoin, null, this);
        function collectCoin(p,fruit){
            this.count+=1;
            fruit.disableBody(true, true);
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
        this.fruitsText.setText('とったフルーツの数' + this.count);
        // フルーツを10個取ったらゲームを止める
        if(this.count >= 10){
            this.add.text(D_WIDTH*1/3,D_HEIGHT*1/2, 'Clear', { fontSize: '32px', fill: '#FFF' });
            this.physics.pause();
        }
    }
}