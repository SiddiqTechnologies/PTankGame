var BootState = {
    init: function () {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },
    preload: function () {
        console.log('Boot State Started');
        this.load.image('preloadBar', 'assests/images/bar.png');
        this.load.image('logo', 'assests/images/logo.png');
    },
    create: function () {
        this.game.stage.backgroundColor = "#700000";
        game.state.start('PreLoadState');        
    }
};