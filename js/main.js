// var game = new Phaser.Game(768, 1366, Phaser.AUTO);
var game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.CANVAS, 'gameArea');
var scaleRatio = window.devicePixelRatio / 3;
console.log('The Scale Ratio: ',scaleRatio);

game.state.add('BootState', BootState);
game.state.add('PreLoadState', PreLoadState);
game.state.add('TitleScreen', TitleScreen);
game.state.add('GameState', GameState);
game.state.add('WinState', WinState);
game.state.start('BootState');