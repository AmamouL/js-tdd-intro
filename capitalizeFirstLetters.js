// capitalizeFirstLetters Function
function capitalizeFirstLetters(input) {
    let output = '';
    let splitted = input.trim().split(" ");
    if (splitted[0] != "") {
        for (let i = 0; i < splitted.length; i++) {
            output += splitted[i][0].toUpperCase();
            output += splitted[i].slice(1);
            if (i != splitted.length - 1) {
                output += ' ';
            }
        }
    }
    return output;
}

module.exports = capitalizeFirstLetters;
