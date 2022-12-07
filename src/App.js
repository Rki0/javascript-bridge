const BridgeGame = require('./controller/BridgeGame');

class App {
  play() {
    const bridgeGame = new BridgeGame();
    bridgeGame.start();
  }
}

const app = new App();
app.play();

module.exports = App;
