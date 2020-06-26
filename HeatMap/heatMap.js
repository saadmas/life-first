//const getCovidData = require('../CovidDataFetch/covidDataFetch.js');

updateHeatMap();

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
        case (ratio >= 0.35):
            return "#800000";
        case (ratio >= 0.3):
            return "#B30000";
        case (ratio >= 0.25):
            return "#D21616";
        case (ratio >= 0.2):
            return "#E84040";
        case (ratio >= 0.15):
            return "#E14848";
        case (ratio >= 0.1):
            return "#FF6666";
        default:
            return "#FF9999";
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
    $("#PK-BA").mousemove((e) => displayProvinceTooltip('Balochistan', 9475, e));
    $("#PK-GB").mousemove((e) => displayProvinceTooltip('Gilgit-Baltistan', 1288, e));
    $("#PK-IS").mousemove((e) => displayProvinceTooltip('Islamabad', 10912, e));
    $("#PK-JK").mousemove((e) => displayProvinceTooltip('Azad Kashmir', 845, e));
    $("#PK-KP").mousemove((e) => displayProvinceTooltip('Khyber Pakhtunkhwa	', 21997, e));
    $("#PK-PB").mousemove((e) => displayProvinceTooltip('Punjab', 66943, e));
    $("#PK-SD").mousemove((e) => displayProvinceTooltip('Sindh', 69628, e));
    $("#PK-TA").mousemove((e) => displayProvinceTooltip('Khyber Pakhtunkhwa', 21997, e));
}

function addMouseOuts() {
    $("#PK-BA").mouseout(hideTooltip);
    $("#PK-GB").mouseout(hideTooltip);
    $("#PK-IS").mouseout(hideTooltip);
    $("#PK-JK").mouseout(hideTooltip);
    $("#PK-KP").mouseout(hideTooltip);
    $("#PK-PB").mouseout(hideTooltip);
    $("#PK-SD").mouseout(hideTooltip);
    $("#PK-TA").mouseout(hideTooltip);
}

function hideTooltip(e) {
    $(".province-tooltip").hide();
}

function displayProvinceTooltip(province, cases, e) {
    $('.province-tooltip-name').text(province);
    $('.province-tooltip-cases').text(`${getNumberWithCommas(cases)} cases`);

    $(".province-tooltip").css({
        top: (e.pageY - 80) + "px",
        left: (e.pageX - 30) + "px"
    });

    $(".province-tooltip").show();
}

function getNumberWithCommas(num) {
    if (!num) {
        return '0';
    }

    if (num.toString().length < 5) {
        return num.toString();

    }

    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
