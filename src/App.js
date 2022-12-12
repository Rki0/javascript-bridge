const Game = require('./controller/Game');

class App {
  play() {
    const game = new Game();
  }
}

const app = new App();
app.play();

module.exports = App;
