async function fetchData() {
  try {
    const response = await fetch('https://realtimemapbackend-production.up.railway.app/api/all-location/');
    const data = await response.json();

    const usernames = data.map(item => item.userName);
    const rowStyle = document.getElementById('rowStyle');

    usernames.forEach(username => {
      const button = document.createElement('button');
      button.textContent = username;
      button.classList.add('btn', 'btn-secondary');
      button.addEventListener('click', () => {
        handleButtonClick(username);
      });

      rowStyle.appendChild(button);
    });
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

function handleButtonClick(username) {
  window.location.href = `map.html?username=${username}`;
}

window.onload = fetchData;