var BootState = {
    init: function () {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },
    preload: function () {
        console.log('Boot State Started');
        this.load.image('preloadBar', 'assests/images/bar.png');
        this.load.image('logo', 'assests/images/tank.png');
        this.load.image('background', 'assests/images/background.png');
    },
    create: function () {
        this.game.stage.backgroundColor = "#47d147";
        game.state.start('PreLoadState');        
    }
};