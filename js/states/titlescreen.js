var TitleScreen = {
    create: function() {
        console.log('Title Screen');
        var background = this.game.add.sprite(0,0,'background');
        // background.scale.setTo(scaleRatio, scaleRatio);
        var playBtn = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY+375,'playBtn');
        // var playBtn = this.game.add.sprite(this.game.world.centerX,1000,'playBtn');
        // playBtn.scale.setTo(scaleRatio, scaleRatio);
        var style = {font: "35px Arial", fill: "#000"};
        this.game.add.text(this.game.world.centerX, this.game.world.centerY, 'Tank Run', style);
        playBtn.anchor.setTo(0.5);
        playBtn.inputEnabled = true;
        playBtn.events.onInputDown.add(function(){
            this.state.start('GameState');
        }, this);
    }
};