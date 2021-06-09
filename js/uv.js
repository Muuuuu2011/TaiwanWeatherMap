let rainPercentRec;
function renderRainPercent() {
    fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=" + 'CWB-AB82743B-F959-4FB2-A795-05DFE709A1FA')
        .then((response) => {
            return response.json();
        }).then((data) => {
            rainPercentRec = data.records.location;
            console.log( rainPercentRec)
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
            rainPercentRec.forEach((element) => {
                orderedRec[order[element.locationName]] = element;
                console.log(orderedRec[order[element.locationName]])
            });
            console.log(orderedRec);
            let finalRec = [];
            orderedRec.forEach((element) => {
                let percent = (parseInt(element.weatherElement[1].time[0].parameter.parameterName) + parseInt(element.weatherElement[1].time[1].parameter.parameterName) + parseInt(element.weatherElement[1].time[2].parameter.parameterName)) / 3;
                finalRec.push([element.locationName, percent.toFixed(0)]);
            });
            console.log(finalRec);
            for (let i = 0; i < 22; i++) {
                document.getElementById("text_" + i.toString()).textContent = finalRec[i][1] + "%";
                let rainStatus = parseInt(finalRec[i][1]);
                if (rainStatus >= 0 && rainStatus < 25) {
                    document.getElementById("city_" + i.toString()).src = "image/raining_1.png";
                } else if (rainStatus >= 25 && rainStatus < 50) {
                    document.getElementById("city_" + i.toString()).src = "image/raining_2.png";
                } else if (rainStatus >= 50 && rainStatus < 75) {
                    document.getElementById("city_" + i.toString()).src = "image/raining_3.png";
                } else if (rainStatus >= 75 && rainStatus <= 100) {
                    document.getElementById("city_" + i.toString()).src = "image/raining_4.png";
                }
            }
        });
}
document.querySelector('.percent-btn').addEventListener('click', renderRainPercent)
