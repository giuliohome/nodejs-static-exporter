const fs = require('fs');
const fsp = require('fs/promises');
const jsonfile = require('jsonfile');
const path = './config.json';

function isEmptyObject(obj) {
  return !Object.keys(obj).length;
}

async function processJson(input, output)
{

        try {
          data = await jsonfile.readFile(input);
          console.log(`producing output html from ${data.tests.length} tests json`)
          var htmlTemplate = await fsp.readFile('./template.html', 'utf8');
          const data_str_arr = data.tests.map(
            test => `<tr>
			<td>${test.file}</td>
			<td>${test.title}</td>
			<td>${isEmptyObject(test.err) ? 'ok' : 'ko'}</td>
			<td>${test.duration}</td>
		</tr>`);
		      const data_str = data_str_arr.join('\n')
          html_out = htmlTemplate.replace('**JSON-TEST-RESULTS**', data_str)
          await fsp.writeFile(output, html_out);
        } catch(error) {
          console.error(error);
        }

}

processJson('./tests.json','./tests.html');