const fs = require('fs');

function buildHtml(req) {
  var header = '';
  var body = '';

  // concatenate header string
  // concatenate body string

  return '<!DOCTYPE html>'
       + '<html><head>' + header + '</head><body>' + body + '</body></html>';
};

// var html = buildHtml();


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