function createTable() {
  const reportBody = document.getElementById('reportBody');

  fetch('/report', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((reportData) => {
      const headings = Object.keys(reportData[0]).slice(1);

      for (let i = 0; i < headings.length; i++) {
        const columnHeader = document.createElement('th');
        columnHeader.innerHTML = headings[i].split('_').join(' ').toUpperCase();
        document.getElementById('reportRow').appendChild(columnHeader);
      }

      for (let i = 0; i < reportData.length; i++) {
        const currentRow = reportData[i];
        // const {
        //   first_name, last_name, address_1, address_2, city, state, zip_code, country, time_stamp,
        // } = currentRow;
        const newRow = document.createElement('tr');
        for (const column in currentRow) {
          if (column === 'registration_id') continue;
          const input = document.createElement('td');
          input.innerHTML = currentRow[column];
          newRow.appendChild(input);
        }
        document.getElementById('reportBody').appendChild(newRow);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  // for(let i = 0; i < reportData.length; i++){

  // }
}

createTable();
