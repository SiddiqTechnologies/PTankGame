var game = new Phaser.Game(1366, 768, Phaser.AUTO);
game.state.add('BootState', BootState);
game.state.add('PreLoadState', PreLoadState);
game.state.start('BootState');