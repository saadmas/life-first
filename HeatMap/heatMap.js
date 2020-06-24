//const getCovidData = require('../CovidDataFetch/covidDataFetch.js');

var tempX = 0;
var tempY = 0;

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
    const ratio = currentLocationData / 181088;
    const color = colorShade(ratio);
    return color;
}

function colorShade(ratio) {
    switch (true) {
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
    $(document).ready(onReady);
}


function onReady() {
    fillProvinceColors();
    addMouseOvers();
    addMouseOuts();
}

function fillProvinceColors() {
    $("#PK-BA").css("fill", getColorByLocation(9475));
    $("#PK-GB").css("fill", getColorByLocation(1288));
    $("#PK-IS").css("fill", getColorByLocation(10912));
    $("#PK-JK").css("fill", getColorByLocation(845));
    $("#PK-KP").css("fill", getColorByLocation(21997));
    $("#PK-PB").css("fill", getColorByLocation(66943));
    $("#PK-SD").css("fill", getColorByLocation(69628));
    $("#PK-TA").css("fill", getColorByLocation(21997));
}

function addMouseOvers() {
    $("#PK-BA").mouseover((e) => displayProvinceStates('Balochistan', 9475, e));
    $("#PK-GB").mouseover((e) => displayProvinceStates('Gilgit-Baltistan', 1288, e));
    $("#PK-IS").mouseover((e) => displayProvinceStates('Islamabad', 10912, e));
    $("#PK-JK").mouseover((e) => displayProvinceStates('Azad Kashmir', 845, e));
    $("#PK-KP").mouseover((e) => displayProvinceStates('Khyber Pakhtunkhwa	', 21997, e));
    $("#PK-PB").mouseover((e) => displayProvinceStates('Punjab', 66943, e));
    $("#PK-SD").mouseover((e) => displayProvinceStates('Sindh', 69628, e));
    $("#PK-TA").mouseover((e) => displayProvinceStates('Federally Administered Tribal Areas', 21997, e));
}

function addMouseOuts() {
    // $("#PK-BA").mouseover(hideTooltip);
    // $("#PK-GB").mouseover(hideTooltip);
    // $("#PK-IS").mouseover(hideTooltip);
    // $("#PK-JK").mouseover(hideTooltip);
    // $("#PK-KP").mouseover(hideTooltip);
    // $("#PK-PB").mouseover(hideTooltip);
    // $("#PK-SD").mouseover(hideTooltip);
    // $("#PK-TA").mouseover(hideTooltip);
}

function hideTooltip() {
    $("#province-stats").hide();
}

function displayProvinceStates(province, cases, e) {
    document.getElementById('province-stats').firstChild.data = `${province}: ${cases} cases`;

    $("#province-stats").css({
        top: (e.pageY) + "px",
        left: (e.pageX) + "px"
    });
    $("#province-stats").show();
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