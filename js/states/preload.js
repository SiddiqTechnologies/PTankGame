var PreLoadState = {
    preload: function () {
        console.log('Preload Started');
        this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        this.logo.scale.setTo(scaleRatio, scaleRatio);
        this.logo.anchor.setTo(0.5);
        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY+200, 'preloadBar');
        this.preloadBar.scale.setTo(scaleRatio, scaleRatio);
        this.preloadBar.anchor.setTo(0.5);
        this.load.setPreloadSprite(this.preloadBar);
        
        //Load All Images Here
        this.load.image('playBtn', 'assests/images/play.png');
    },
    create: function () {
        game.state.start('TitleScreen'); 
    }
};