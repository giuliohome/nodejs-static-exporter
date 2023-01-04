const fs = require('fs');
const fsp = require('fs/promises');
const jsonfile = require('jsonfile');
const path = './config.json';

function readHtml(file)
{
  try {
    const data = fs.readFileSync(file, 'utf8');
    return data;
  } catch (err) {
    console.error(err);
    return null
  }
}

async function processJson(input, output)
{

        try {
          data = await jsonfile.readFile(input);
          console.log(`producing output html from ${data.tests.length} tests json`)
          var htmlTemplate = readHtml('./template.html');
          data_str = JSON.stringify(data); // TO-DO producing html
          html_out = htmlTemplate.replace('**JSON-TEST-RESULTS**', data_str)
          await fsp.writeFile(output, html_out);
        } catch(error) {
          console.error(error);
        }

}

processJson('./input.json','./output.html');