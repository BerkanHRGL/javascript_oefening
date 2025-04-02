async function getData() {
    const url = "generated.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        const container = document.getElementById('data-container');
        
        container.innerHTML = `
            <ul>
                ${json.map(item => `<li>${JSON.stringify(item)}</li>`).join('')}
            </ul>
        `;
        
        console.log(json);
    } catch (error) {
        console.error(error.message);
        const container = document.getElementById('data-container');
        container.innerHTML = `Error: ${error.message}`;
    }
}

getData();