import ExcelJS from 'exceljs';

type ExcelRow = Record<string, any>;

async function readExcel(filePath: string,sheetName: string): Promise<ExcelRow[]> {
  const workbook = new ExcelJS.Workbook();

  await workbook.xlsx.readFile(filePath);

  const worksheet = workbook.getWorksheet(sheetName);

  if (!worksheet) {
    throw new Error(`Sheet not found: ${sheetName}`);
  }

  const data: ExcelRow[] = [];
  const headers: string[] = [];

  worksheet.getRow(1).eachCell((cell) => {
    headers.push(String(cell.value));
  });

  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) {
      return;
    }

    const rowData: ExcelRow = {};

    row.eachCell((cell, colNumber) => {
      rowData[headers[colNumber - 1]] = cell.value;
    });

    data.push(rowData);
  });

  return data;
}

async function getRowData(filePath: string,sheetName: string,rowNumber: number): Promise<ExcelRow | undefined> {
  const data = await readExcel(filePath, sheetName);
  return data[rowNumber - 2];
}

async function getCellData(filePath: string,sheetName: string,rowNumber: number,columnName: string): Promise<any> {
  const data = await readExcel(filePath, sheetName);
  return data[rowNumber - 2]?.[columnName];
}

export {
  readExcel,
  getRowData,
  getCellData
};