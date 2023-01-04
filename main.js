const fs = require('fs');


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


var htmlTemplate = readHtml('./template.html');

console.log(htmlTemplate);