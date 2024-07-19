const fs = require('fs-extra');
const path = require('path');

const filePath = path.join('/home/project', 'exampleFile.txt');

async function modifyFile() {
  try {
    const fileContent = await fs.readFile(filePath, 'utf8');

    const newContent = fileContent + '\nNew line added by fs-extra';
    await fs.writeFile(filePath, newContent);

    console.log('New file content:', newContent);
  } catch (error) {
    console.error('Error while modifying the file:', error);
  }
}

modifyFile();
