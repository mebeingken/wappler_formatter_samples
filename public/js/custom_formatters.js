// JavaScript Document

dmx.Formatter('array', 'excludeFilter', function (sourceArray, excludedArray, val) {

    if (val) {
        newArray = sourceArray.filter(x => !excludedArray.includes(x['id']) || x['id'] == val);
    } else {
        newArray = sourceArray.filter(x => !excludedArray.includes(x['id']));
    }


    return newArray;
});