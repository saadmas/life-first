//const getCovidData = require('../CovidDataFetch/covidDataFetch.js');

// async function getPakData() {
//      const pakCovidData = await getCovidData.fetchCovidData();
//      return pakCovidData;
// }


// Actual function that will calculate ratio and get color for each
//province using live data

// async function getColorByLocation(location) {
//     const covidData = await getPakData();
//     const locationCases = parseInt(covidData["total"][location]["cases"].replace(",", ""));
//     const pakTotalCases = parseInt(covidData["total"]["pakistan"]["cases"].replace(",", ""));
//     const ratio = locationCases/pakTotalCases;
//     const color = colorShade(ratio);
//     return color;
// }


//Temporary function used to get color using current data
function getColorByLocation(currentLocationData) {
    const ratio = currentLocationData/181088;
    const color = colorShade(ratio);
    return color;
}

function colorShade(ratio) {
    switch(true) {
        case (ratio >= 0.3):
            return "#ff0000";
        case (ratio >= 0.2):
            return "#ff4d4d";
        case (ratio >= 0.1):
            return "#ff8080";
        default:
            return "#ffb3b3";
    }
}


//Temporary function to update heat map based on current data
function updateHeatMap() {
    $(document).ready(function() {
        $("#PK-BA").css("fill", getColorByLocation(9475));
        $("#PK-GB").css("fill", getColorByLocation(1288));
        $("#PK-IS").css("fill", getColorByLocation(10912));
        $("#PK-JK").css("fill", getColorByLocation(845));
        $("#PK-KP").css("fill", getColorByLocation(21997));
        $("#PK-PB").css("fill", getColorByLocation(66943));
        $("#PK-SD").css("fill", getColorByLocation(69628));
        $("#PK-TA").css("fill", getColorByLocation(21997));
    });
}


//Actual function that will update heat map based on live data

// async function updateHeatMap() {
//     $(document).ready(function() {
//         $("#PK-BA").css("fill", await getColorByLocation("balochistan"));
//         $("#PK-GB").css("fill", await getColorByLocation("gilgit"));
//         $("#PK-IS").css("fill", await getColorByLocation("islamabad"));
//         $("#PK-JK").css("fill", await getColorByLocation("kashmir"));
//         $("#PK-KP").css("fill", await getColorByLocation("kp"));
//         $("#PK-PB").css("fill", await getColorByLocation("punjab"));
//         $("#PK-SD").css("fill", await getColorByLocation("sindh"));
//         $("#PK-TA").css("fill", await getColorByLocation("kp"));
//     });
// }

updateHeatMap();