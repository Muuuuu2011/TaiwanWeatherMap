let weatherRec1;
let finalRec1;
fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=" + 'CWB-AB82743B-F959-4FB2-A795-05DFE709A1FA')
    .then((response) => {
        return response.json();
    }).then((data) => {

      weatherRec1 = data.records.location;

      let order1 = {
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
    let orderedRec1 = [];
    weatherRec1.forEach((element) => {
        orderedRec1[order1[element.locationName]] = element;
    });

    finalRec1 = [];
    orderedRec1.forEach((element) => {
      let name = element.locationName;
      let wx = element.weatherElement[0].time[1].parameter.parameterName;
      let temperature = ((parseInt(element.weatherElement[2].time[0].parameter.parameterName) + parseInt(element.weatherElement[4].time[0].parameter.parameterName) + parseInt(element.weatherElement[2].time[1].parameter.parameterName) + parseInt(element.weatherElement[4].time[1].parameter.parameterName) + parseInt(element.weatherElement[2].time[2].parameter.parameterName) + parseInt(element.weatherElement[4].time[2].parameter.parameterName)) / 6).toFixed(1);
      let ci=element.weatherElement[3].time[1].parameter.parameterName;
      
      finalRec1.push([name,wx,temperature,ci]);
    });

    for(let i=0;i<finalRec1.length;i++){    
        document.getElementById(`c${i}`).addEventListener("mouseenter",function(){
        document.getElementById(`c${i}`).setAttribute("style","fill:#072A40");
        document.getElementById("info").style.display="block";
        document.getElementById("city_name").textContent=finalRec1[i][0];
        document.getElementById("wx").textContent=finalRec1[i][1];
        document.getElementById("temp").textContent=finalRec1[i][2]+"°C";
        document.getElementById("ci").textContent=finalRec1[i][3];
      })
      document.getElementById(`c${i}`).addEventListener("mouseleave",function(){
        document.getElementById(`c${i}`).setAttribute("style","fill:#18B7BE");
        document.getElementById("info").style.display="none";   
      })
    }

})
















