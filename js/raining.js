let counts={
	'基隆市': 0,
	'宜蘭縣': 0,
	'臺北市': 0,
	'新北市': 0,
	'桃園市': 0,
	'新竹縣': 0,
	'新竹市': 0,
	'苗栗縣': 0,
	'臺中市': 0,
	'彰化縣': 0,
	'南投縣': 0,
	'雲林縣': 0,
	'嘉義縣': 0,
	'嘉義市': 0,
	'臺南市': 0,
	'高雄市': 0,
	'屏東縣': 0,
	'臺東縣': 0,
	'花蓮縣': 0,
	'金門縣': 0,
	'澎湖縣': 0,
	'連江縣': 0
};
let values={
	'基隆市': 0,
	'宜蘭縣': 0,
	'臺北市': 0,
	'新北市': 0,
	'桃園市': 0,
	'新竹縣': 0,
	'新竹市': 0,
	'苗栗縣': 0,
	'臺中市': 0,
	'彰化縣': 0,
	'南投縣': 0,
	'雲林縣': 0,
	'嘉義縣': 0,
	'嘉義市': 0,
	'臺南市': 0,
	'高雄市': 0,
	'屏東縣': 0,
	'臺東縣': 0,
	'花蓮縣': 0,
	'金門縣': 0,
	'澎湖縣': 0,
	'連江縣': 0
};
fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0002-001?Authorization=CWB-DD6B41F4-A301-465B-AB22-A9F285B320AA&elementName=HOUR_24&parameterName=CITY").then((response)=>{
	return response.json();
}).then((data)=>{
	records=data.records;
	renderRaining(0);
});
function renderRaining(){

	//計算地區出現的次數放入一個物件，數值加總放入另一個物件
	for(i=0;i<records["location"].length;i++){
		let parameterName = records["location"][i]["parameter"][0]["parameterValue"]
		counts[parameterName]=counts[parameterName]?counts[parameterName]+1:1;
		if (counts[parameterName]==counts[parameterName]){
			values[parameterName]+=parseFloat(records["location"][i]["weatherElement"][0]["elementValue"]);
		}
	}
	//利用for-in迴圈計算平均值放入雨量陣列
	let rainings=[]
	for (var item in counts){
		// console.log(item)
		let average = (values[item]/counts[item])
		rainings.push(average)
	}
	
	//點擊累積雨量按鈕時，將雨量陣列迴圈帶入表格中並四捨五入到第二位，根據平均值範圍帶入指定img
	let weather_btn=document.getElementsByClassName("button")[2]
	weather_btn.addEventListener("click",function(){
		for(i=0;i<rainings.length;i++){
			if(rainings[i]<=0){
				document.getElementById("city_"+i).src="./image/humidity_4.png";
				rainings[i]=0;
				document.getElementById("text_"+i).textContent=rainings[i].toFixed(2);
			}else if(rainings[i]<=50){
				document.getElementById("city_"+i).src="./image/humidity_3.png";
				document.getElementById("text_"+i).textContent=rainings[i].toFixed(2);
			}else if(rainings[i]<=100){
				document.getElementById("city_"+i).src="./image/humidity_2.png";
				document.getElementById("text_"+i).textContent=rainings[i].toFixed(2);
			}else if(rainings[i]>100){
				document.getElementById("city_"+i).src="./image/humidity_1.png";
				document.getElementById("text_"+i).textContent=rainings[i].toFixed(2);
			}

		}
		

	})
}

