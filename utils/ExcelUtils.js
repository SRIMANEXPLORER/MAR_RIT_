const xlsx = require('xlsx')

  function readFromExcel(filePath,sheetName){

    const workbook = xlsx.readFile(filePath);

    const sheet = workbook.Sheets[sheetName]

    // convert sheet into JSON

    return xlsx.utils.sheet_to_json(sheet);

}
module.exports = {readFromExcel};

