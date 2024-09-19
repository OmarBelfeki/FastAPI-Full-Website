function fetchData() {
    fetch('/api/data')
        .then(response => response.json())
        .then(data => {
            document.getElementById('api-data').textContent = data.data;
        })
        .catch(error => console.error('Error fetching data:', error));
}
