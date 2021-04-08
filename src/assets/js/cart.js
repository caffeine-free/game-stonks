data = []

function post(gameId) {
  const img = document.getElementById(`img-game-${gameId}`).src;
  const name = document.getElementById(`name-game-${gameId}`).value;
  const price = document.getElementById(`price-game-${gameId}`).value;
  const description = document.getElementById(`desc-game-${gameId}`).value;
  const id = Math.random().toString(32).substr(2, 9);

  data.push({ id, img, name, price, description });
}

function buildCart() {
  throw 'NotImplementedError';
}