function hazardWarningCreator(typeOfWarning){
let warningCounter = 0;

return function(location){
    let numTime;
    warningCounter++;
    if(warningCounter === 1){
        numTime = 'time';
    } else {
       numTime = 'times';
    }
    console.log(`"DANGER! There is a ${typeOfWarning} hazard at ${location}!"`);
    console.log(`"The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${numTime} today!"`);
    
}
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const rainWarning = hazardWarningCreator('Flooding in low areas');
const snowWarning = hazardWarningCreator('Blizzard conditions');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
rainWarning('Main St and Pacific Ave');
snowWarning('Main St and Pacific Ave');

