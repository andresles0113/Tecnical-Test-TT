process.stdin.resume();

process.stdin.setEncoding('utf8');

function whoIsOnCall(pStartDate, pDate, pPattern, pGroup) {
    if (pDate < pStartDate) return "The StartDate must be greater than Date"

    const interval = Math.floor((pDate - pStartDate) / (1000 * 60 * 60 * 24));
    const PatternLength = pPattern.length;
    const GroupLength = pGroup.length;
    let patternCount = 0;
    let patternIterator = 0;
    let groupIterator = 0;

    while (patternCount < interval - 1) {
        const nextPatternValue = patternCount + pPattern[patternIterator]
        if (nextPatternValue > interval) {
            break;
        }

        patternCount = patternCount + pPattern[patternIterator];

        if (patternIterator < PatternLength - 1) {
            patternIterator++;
        } else {
            patternIterator = 0;
        }

        if (groupIterator < GroupLength - 1) {
            groupIterator++;
        } else {
            groupIterator = 0;
        }
    }

    return pGroup[groupIterator];
}

//Main program - do no modify

let vStartDate = new Date(2021, 7, 16);

//myPattern variable is a dynamic variable. We will be testing
//different rotation patterns. Your code should be generic and should
//be able to handle any rotation pattern passed in

let myPattern = [2, 2, 3];

//myGroup variable is a dynamic variable. We will be testing
//different groups, with variable group size. Your code should be generic 
//and should be able to handle any group passed in

let myGroup = ['Max', 'Paula', 'Roger', 'Daniela'];

let vTestDateArr = [new Date(2021, 7, 16), new Date(2021, 7, 23), new Date(2021, 7, 28), new Date(2021, 8, 8), new Date(2021, 8, 12)];

for (let i = 0; i < vTestDateArr.length; i++) {
    const onCallName = whoIsOnCall(vStartDate, vTestDateArr[i], myPattern, myGroup);

    console.log(vTestDateArr[i].toLocaleDateString('en-US') + ' On call: ' + onCallName);
}