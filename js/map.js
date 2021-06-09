let mapRec;
fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=" + 'CWB-AB82743B-F959-4FB2-A795-05DFE709A1FA')
    .then((response) => {
        return response.json();
    }).then((data) => {
        mapRec = data.records.location;
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
        mapRec.forEach((element) => {
            orderedRec[order[element.locationName]] = element;
        });
        let finalRec = {};
        orderedRec.forEach((element) => {
            let description = element.weatherElement[0].time[1].parameter.parameterName;
            finalRec[element.locationName] = description;
        });
        for (let i = 0; i < 41; i++) {
            if (document.getElementsByTagName('path')[i].getAttribute("data-name-zh") != null) {
                document.getElementsByTagName('path')[i].addEventListener('mouseover', function () {
                    let city = document.getElementsByTagName('path')[i].getAttribute("data-name-zh");
                    console.log(city);
                    document.querySelector('.city_name').textContent = city;
                    document.querySelector('.weather').textContent = finalRec[city];
                });
            }
        }
        for (let j = 0; j < 2; j++) {
            if (document.getElementsByTagName('g')[j].getAttribute("data-name-zh") != null) {
                document.getElementsByTagName('g')[j].addEventListener('mouseover', function () {
                    let city = document.getElementsByTagName('g')[j].getAttribute("data-name-zh");
                    document.querySelector('.city_name').textContent = city;
                    document.querySelector('.weather').textContent = finalRec[city];
                });
            } else if (document.getElementsByTagName('g')[j].getAttribute("data-name-zh") == null) {
                document.getElementsByTagName('g')[j].addEventListener('mouseover', function () {
                    document.querySelector('.city_name').textContent = "馬祖縣";
                    document.querySelector('.weather').textContent = finalRec.連江縣;
                });
            }
        }
    });


