const Game = require('./Game');

class App {
  play() {
    new Game();
  }
}

const app = new App();
app.play();

module.exports = App;
