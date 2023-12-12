class MyScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MyScene1', active: true });
    }

    preload() {
        // 画像の読み込み(使用する時の名前, パス)
       this.load.image('back', 'assets/background.png');
   }

   // シーン初期化処理
   create() {
       this.add.image(400, 225, 'back');
   }
   
    update() {
    
    }
}