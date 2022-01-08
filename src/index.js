module.exports = function reverse (n) {
    let strIn = '';
    let strOut = '';
    if (n > 0) {
        strIn += n;
    } else {
        strIn += -n;
    }; 
    for (let i = strIn.length-1; i >= 0; i --) {
        strOut += strIn[i];
    }
    return + strOut
}
