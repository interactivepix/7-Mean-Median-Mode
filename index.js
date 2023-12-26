function meanMedianMode(array) {
    return {
        mean: getMean(array),
        median: getMedian(array),
        mode: getMode(array)
    };
}

function getMean(array) {
    var sum = 0;

    array.forEach(num => {
        sum += num;
    });

    var mean = sum / array.length;
    return mean;
}

function getMedian(array) {
    array.sort(function(a, b) {return a - b});
    var median;

    if (array.length % 2 !== 0) {
        median = array[Math.floor(array.length / 2)];
    } else {
        var mid1 = array[(array.length / 2) - 1];
        var mid2 = array[array.length / 2];
        median = (mid1 + mid2) / 2;
    }

    return median;
}

function getMode(array) {
    var modeObj = {};

    array.forEach(num => {
        if (!modeObj[num]) modeObj[num] = 0;
        modeObj[num]++;
    });

    var maxFrecuency = 0;
    var modes = [];
    for (var num in modeObj) {
        if(modeObj[num] > maxFrecuency) {
            modes = [num];
            maxFrecuency = modeObj[num];
        }
        else if (modeObj[num] === maxFrecuency) modes.push(num);
    }

    if (modes.length === Object.keys(modeObj).length) modes = [];

    return modes;
}

console.log(meanMedianMode([1, 2, 3, 4, 5, 4, 6, 1])); 

//works in Chrome Console = Result:

//meanMedianMode([1, 2, 3, 4, 5, 4, 6, 1]); 
// {mean: 3.25, median: 3.5, mode: Array(2)}
// mean
// : 
// 3.25
// median
// : 
// 3.5
// mode
// : 
// (2) ['1', '4']
// [[Prototype]]
// : 
// Object