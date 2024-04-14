const fs = require('fs');

// Declare newFile at the top of the file
let newFile = '';

function removeExtraSpaces(str) {
    return str.replace(/\s+/g, ' ').trim();
}

// removing Blank space using Function
function removeBlankSpace() {
    // Reading the file 
    fs.readFile("./file.txt", (err, fileData) => {
        if (err) throw err;
        console.log('Reading complete:', fileData.toString());
        
        // Corrected function call
        newFile = removeExtraSpaces(fileData.toString());
        
        fs.writeFile("./file.txt", newFile, (err) => {
            if (err) throw err;
            console.log('Writing complete.', newFile);
        });
    });
}

removeBlankSpace();
