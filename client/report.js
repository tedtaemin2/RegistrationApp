window.addEventListener('load', () => {
  createTable();
});

/* function to generate table from db input
consists of 1. GET request from db, 2. creating table headers, 3. creating table rows
*/
function createTable() {
  // 1. GET request from db
  fetch('/report', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((reportData) => {
      // 2. Creating table headers by taking first array and saving keys of user object
      const headings = Object.keys(reportData[0]).slice(1);
      for (let i = 0; i < headings.length; i++) {
        const columnHeader = document.createElement('th');
        columnHeader.innerHTML = headings[i].split('_').join(' ').toUpperCase();
        document.getElementById('report-row').appendChild(columnHeader);
      }

      // 3. Creating table rows
      // iterate through each object within array (eg. [{user1...},{user2...}...])
      for (let i = 0; i < reportData.length; i++) {
        const currentRow = reportData[i];
        const newRow = document.createElement('tr');
        const rowValues = Object.values(currentRow);
        // iterate through each value of object (eg. firstName, lastName, etc.)
        for (let i = 1; i < rowValues.length; i++) {
          const input = document.createElement('td');
          input.innerHTML = rowValues[i];
          newRow.appendChild(input);
        }
        document.getElementById('report-body').appendChild(newRow);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
