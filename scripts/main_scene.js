class MyScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MyScene1', active: true });
    }

    preload() {
        // 画像の読み込み(使用する時の名前, パス)
       this.load.image('back', 'assets/background.png');
       this.load.image('taro', 'assets/taro.png');
       this.load.image('hanako', 'assets/hanako.png');
   }

   // シーン初期化処理
   create() {
       this.add.image(400, 225, 'back');
       const taro = this.physics.add.sprite(50, 50, 'taro');
       const hanako = this.physics.add.sprite(750, 400, 'hanako');
       this.taro = taro;
       this.hanako = hanako;

   }
   
    update() {
    
    }
}