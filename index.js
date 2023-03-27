const https = require('https');
const fs = require('fs');

const url = 'https://s3.amazonaws.com/gupy5/production/companies/41683/emails/1679437007669/8408fe80-c80f-11ed-80da-7d3cd1fee4b4/log.txt';

https.get(url, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
    data = data.replace(/'/g, '"');
  });

  res.on('end', () => {
    const logs = data.split('\n').filter(line => line !== '');

    const filteredLogs = logs.filter(log => true);

    const groupedLogs = {};

    filteredLogs.forEach(log => {
      const { path, statusCode } = JSON.parse(log);
      if (!groupedLogs[path]) {
        groupedLogs[path] = {
          countSuccess: 0,
          countError: 0,
        };
      }
      if (statusCode >= 200 && statusCode < 400) {
        groupedLogs[path].countSuccess++;
      } else if (statusCode >= 400 && statusCode < 600) {
        groupedLogs[path].countError++;
      }
    });

    // Converte o objeto JavaScript em uma matriz de objetos com os dados desejados
    const jsonOutput = Object.keys(groupedLogs).map(key => ({
      path: key,
      countSuccess: groupedLogs[key].countSuccess,
      countError: groupedLogs[key].countError,
    }));

    // Escreve a string JSON no arquivo 'output.json'
    fs.writeFile('output.json', JSON.stringify(jsonOutput, null, 2), err => {
      if (err) {
        console.error(err);
      } else {
        console.log('Output salvo em "output.json"');
      }
    });
  });

}).on('error', (err) => {
  console.error(err);
});
