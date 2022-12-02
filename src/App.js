const Game = require('./controller/Game');

class App {
  play() {
    const game = new Game();
    game.start();
  }
}

const app = new App();
app.play();

module.exports = App;
