const data = []

function post(gameId) {
  const img = document.getElementById(`img-game-${gameId}`).src;
  const name = document.getElementById(`name-game-${gameId}`).innerHTML;
  const price = document.getElementById(`price-game-${gameId}`).innerHTML;
  const description = document.getElementById(`desc-game-${gameId}`).innerHTML;
  const id = Math.random().toString(32).substr(2, 9);

  data.push({ id, img, name, price, description });
  localStorage.setItem('data', JSON.stringify(data));
}

function buildCart() {
  let data = localStorage.getItem('data') || JSON.stringify([]);
  data = JSON.parse(data);
  localStorage.setItem('data', []);

  if (data.length) {
    let emptyMsg = document.getElementById('empty');
    emptyMsg.remove();

    let listDiv = document.getElementById('list-div');
    
    let listTitle = document.createElement('h6');
    listTitle.className = 'text-muted';
    listTitle.textContent = 'YOUR CART';
    
    let ul = document.createElement('ul');
    ul.className = 'list-group';

    listDiv.appendChild(listTitle);
    listDiv.appendChild(ul);

    data.forEach(element => {
      console.log('a')
      let li = document.createElement('li');
      li.className = 'list-group-item d-flex justify-content-between align-items-center';
      li.textContent = element.name;

      let img = document.createElement('img');
      img.className = 'rounded';
      img.setAttribute('src', element.img);
      img.setAttribute('width', '200px');

      li.appendChild(img);

      ul.appendChild(li);
    });
  } 
}