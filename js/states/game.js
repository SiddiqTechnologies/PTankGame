var GameState = {
    create: function () {
        console.log('Game Screen');
        this.game.stage.backgroundColor = "#dddddd";
        var playBtn = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY+375,'playBtn');
        // playBtn.scale.setTo(scaleRatio, scaleRatio);
        playBtn.anchor.setTo(0.5);
        playBtn.inputEnabled = true;
        playBtn.events.onInputDown.add(function(){
            this.state.start('WinState');
        }, this);
    }
};