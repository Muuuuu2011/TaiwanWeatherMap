let weatherRec;
function renderWeather() {
    fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=" + 'CWB-AB82743B-F959-4FB2-A795-05DFE709A1FA')
        .then((response) => {
            return response.json();
        }).then((data) => {
            weatherRec = data.records.location;
            let order = {
                '基隆市': 0,
                '宜蘭縣': 1,
                '臺北市': 2,
                '新北市': 3,
                '桃園市': 4,
                '新竹縣': 5,
                '新竹市': 6,
                '苗栗縣': 7,
                '臺中市': 8,
                '彰化縣': 9,
                '南投縣': 10,
                '雲林縣': 11,
                '嘉義縣': 12,
                '嘉義市': 13,
                '臺南市': 14,
                '高雄市': 15,
                '屏東縣': 16,
                '臺東縣': 17,
                '花蓮縣': 18,
                '金門縣': 19,
                '澎湖縣': 20,
                '連江縣': 21
            };
            let orderedRec = [];
            weatherRec.forEach((element) => {
                orderedRec[order[element.locationName]] = element;
            });
            console.log(orderedRec);
            let finalRec = [];
            orderedRec.forEach((element) => {
                let temperature = (parseInt(element.weatherElement[2].time[0].parameter.parameterName) + parseInt(element.weatherElement[4].time[0].parameter.parameterName) + parseInt(element.weatherElement[2].time[1].parameter.parameterName) + parseInt(element.weatherElement[4].time[1].parameter.parameterName) + parseInt(element.weatherElement[2].time[2].parameter.parameterName) + parseInt(element.weatherElement[4].time[2].parameter.parameterName)) / 6;
                let wx = element.weatherElement[0].time[1].parameter.parameterValue;
                finalRec.push([element.locationName, temperature.toFixed(1), wx]);
            });
            console.log(finalRec);

            for (let i = 0; i < 23; i++) {
                document.getElementById("text_" + (i + 1).toString()).textContent = finalRec[i][1] + "°C";
                let wxStatus = parseInt(finalRec[i][2]);
                if (wxStatus == 1) {
                    document.getElementById("city_" + (i + 1).toString()).src = "image/sunny.png";
                } else if (wxStatus == 2 || wxStatus == 3) {
                    document.getElementById("city_" + (i + 1).toString()).src = "image/sunCloud.png";
                } else if (wxStatus >= 4 && wxStatus < 8) {
                    document.getElementById("city_" + (i + 1).toString()).src = "image/cloudy.png";
                } else if (wxStatus >= 8 && wxStatus < 42) {
                    document.getElementById("city_" + (i + 1).toString()).src = "image/rainy.png";
                } else if (wxStatus == 42) {
                    document.getElementById("city_" + (i + 1).toString()).src = "image/snow.png";
                }
            }
        });
}
document.querySelector('.weather-btn').addEventListener('click', renderWeather)

