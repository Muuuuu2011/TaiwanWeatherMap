let items=[];
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
function renderRaining(page){
	// console.log(records["location"])
	// console.log(records["location"].length)
	// console.log(records["location"][0]["parameter"][0]["parameterValue"])
	// console.log(records["location"][0]["weatherElement"][0]["elementValue"])
	
	//計數區:參考城市代碼
	kee_count=0
	kee_value=0
	tph_count=0
	tph_value=0
	tpe_count=0
	tpe_value=0
	tyc_count=0
	tyc_value=0
	hsh_count=0
	hsh_value=0
	hsc_count=0
	hsc_value=0
	mal_count=0
	mal_value=0
	txg_count=0
	txg_value=0
	cwh_count=0
	cwh_value=0
	nto_count=0
	nto_value=0
	ylh_count=0
	ylh_value=0
	chy_count=0
	chy_value=0
	cyi_count=0
	cyi_value=0
	tnn_count=0
	tnn_value=0
	khh_count=0
	khh_value=0
	iuh_count=0
	iuh_value=0
	iln_count=0
	iln_value=0
	hwa_count=0
	hwa_value=0
	ttt_count=0
	ttt_value=0
	kmn_count=0
	kmn_value=0
	lnn_count=0
	lnn_value=0
	peh_count=0
	peh_value=0
	//計算地區平均雨量
	for(i=0;i<records["location"].length;i++){
		let parameterName = records["location"][i]["parameter"][0]["parameterValue"]
		// let elementValue = records["location"][i]["weatherElement"][0]["elementValue"]
		counts[parameterName]=counts[parameterName]?counts[parameterName]+1:1;
		// values[parameterName]=values[parameterName]?values[parameterName]+records["location"][i]["weatherElement"][0]["elementValue"]:1;
		if (counts[parameterName]==counts[parameterName]){
			values[parameterName]+=parseFloat(records["location"][i]["weatherElement"][0]["elementValue"]);
		}


		if(records["location"][i]["parameter"][0]["parameterValue"]=="基隆市"){
			kee_value+=parseFloat(records["location"][i]["weatherElement"][0]["elementValue"])
			kee_count+=1
			
		}else if(records["location"][i]["parameter"][0]["parameterValue"]=="新北市"){
			tph_value+=parseFloat(records["location"][i]["weatherElement"][0]["elementValue"])
			tph_count+=1
		
		}else if(records["location"][i]["parameter"][0]["parameterValue"]=="臺北市"){
			tpe_value+=parseFloat(records["location"][i]["weatherElement"][0]["elementValue"])
			tpe_count+=1
			
		}else if(records["location"][i]["parameter"][0]["parameterValue"]=="桃園市"){
			tyc_value+=parseFloat(records["location"][i]["weatherElement"][0]["elementValue"])
			tyc_count+=1
			
		}else if(records["location"][i]["parameter"][0]["parameterValue"]=="新竹縣"){
			hsh_value+=parseFloat(records["location"][i]["weatherElement"][0]["elementValue"])
			hsh_count+=1
			
		}else if(records["location"][i]["parameter"][0]["parameterValue"]=="新竹市"){
			hsc_value+=parseFloat(records["location"][i]["weatherElement"][0]["elementValue"])
			hsc_count+=1
			
		}else if(records["location"][i]["parameter"][0]["parameterValue"]=="苗栗縣"){
			mal_value+=parseFloat(records["location"][i]["weatherElement"][0]["elementValue"])
			mal_count+=1
			
		}else if(records["location"][i]["parameter"][0]["parameterValue"]=="臺中市"){
			txg_value+=parseFloat(records["location"][i]["weatherElement"][0]["elementValue"])
			txg_count+=1
			
		}else if(records["location"][i]["parameter"][0]["parameterValue"]=="彰化縣"){
			cwh_value+=parseFloat(records["location"][i]["weatherElement"][0]["elementValue"])
			cwh_count+=1
			
		}else if(records["location"][i]["parameter"][0]["parameterValue"]=="南投縣"){
			nto_value+=parseFloat(records["location"][i]["weatherElement"][0]["elementValue"])
			nto_count+=1
			
		}else if(records["location"][i]["parameter"][0]["parameterValue"]=="雲林縣"){
			ylh_value+=parseFloat(records["location"][i]["weatherElement"][0]["elementValue"])
			ylh_count+=1
			
		}else if(records["location"][i]["parameter"][0]["parameterValue"]=="嘉義縣"){
			chy_value+=parseFloat(records["location"][i]["weatherElement"][0]["elementValue"])
			chy_count+=1
			
		}else if(records["location"][i]["parameter"][0]["parameterValue"]=="嘉義市"){
			cyi_value+=parseFloat(records["location"][i]["weatherElement"][0]["elementValue"])
			cyi_count+=1
			
		}else if(records["location"][i]["parameter"][0]["parameterValue"]=="臺南市"){
			tnn_value+=parseFloat(records["location"][i]["weatherElement"][0]["elementValue"])
			tnn_count+=1
			
		}else if(records["location"][i]["parameter"][0]["parameterValue"]=="高雄市"){
			khh_value+=parseFloat(records["location"][i]["weatherElement"][0]["elementValue"])
			khh_count+=1
			
		}else if(records["location"][i]["parameter"][0]["parameterValue"]=="屏東縣"){
			iuh_value+=parseFloat(records["location"][i]["weatherElement"][0]["elementValue"])
			iuh_count+=1
			
		}else if(records["location"][i]["parameter"][0]["parameterValue"]=="宜蘭縣"){
			iln_value+=parseFloat(records["location"][i]["weatherElement"][0]["elementValue"])
			iln_count+=1
			
		}else if(records["location"][i]["parameter"][0]["parameterValue"]=="花蓮縣"){
			hwa_value+=parseFloat(records["location"][i]["weatherElement"][0]["elementValue"])
			hwa_count+=1
			
		}else if(records["location"][i]["parameter"][0]["parameterValue"]=="臺東縣"){
			ttt_value+=parseFloat(records["location"][i]["weatherElement"][0]["elementValue"])
			ttt_count+=1
			
		}else if(records["location"][i]["parameter"][0]["parameterValue"]=="澎湖縣"){
			peh_value+=parseFloat(records["location"][i]["weatherElement"][0]["elementValue"])
			peh_count+=1
			
		}else if(records["location"][i]["parameter"][0]["parameterValue"]=="金門縣"){
			kmn_value+=parseFloat(records["location"][i]["weatherElement"][0]["elementValue"])
			kmn_count+=1
			
		}else if(records["location"][i]["parameter"][0]["parameterValue"]=="連江縣"){
			lnn_value+=parseFloat(records["location"][i]["weatherElement"][0]["elementValue"])
			lnn_count+=1
			
		}else{
			continue;
		}
	}
	console.log(counts)
	console.log(values)
	console.log(kee_value,kee_count)
	kee_raining=kee_value/kee_count
	items.push(kee_raining)
	tph_raining=tph_value/tph_count
	console.log(tph_count,tph_value)
	items.push(tph_raining)
	tpe_raining=tpe_value/tpe_count
	items.push(tpe_raining)
	tyc_raining=tyc_value/tyc_count
	items.push(tyc_raining)
	hsh_raining=hsh_value/hsh_count
	items.push(hsh_raining)
	hsc_raining=hsc_value/hsc_count
	items.push(hsc_raining)
	mal_raining=mal_value/mal_count
	items.push(mal_raining)
	txg_raining=txg_value/txg_count
	items.push(txg_raining)
	cwh_raining=cwh_value/cwh_count
	items.push(cwh_raining)
	nto_raining=nto_value/nto_count
	items.push(nto_raining)
	ylh_raining=ylh_value/ylh_count
	items.push(ylh_raining)
	chy_raining=chy_value/chy_count
	items.push(chy_raining)
	cyi_raining=cyi_value/cyi_count
	items.push(cyi_raining)
	tnn_raining=tnn_value/tnn_count
	items.push(tnn_raining)
	khh_raining=khh_value/khh_count
	items.push(khh_raining)
	iuh_raining=iuh_value/iuh_count
	items.push(iuh_raining)
	iln_raining=iln_value/iln_count
	items.push(iln_raining)
	hwa_raining=hwa_value/hwa_count
	items.push(hwa_raining)
	ttt_raining=ttt_value/ttt_count
	items.push(ttt_raining)
	peh_raining=peh_value/peh_count
	items.push(peh_raining)
	kmn_raining=kmn_value/kmn_count
	items.push(kmn_raining)
	lnn_raining=lnn_value/lnn_count
	items.push(lnn_raining)

	let weather_btn=document.getElementsByClassName("button")[2]
	weather_btn.addEventListener("click",function(){

		for(i=0;i<items.length;i++){
			if(items[i]<=0){
				document.getElementById("city_"+i).src="./image/humidity_4.png";
				items[i]=0;
				document.getElementById("text_"+i).textContent=items[i].toFixed(2);
			}else if(items[i]<=50){
				document.getElementById("city_"+i).src="./image/humidity_3.png";
				document.getElementById("text_"+i).textContent=items[i].toFixed(2);
			}else if(items[i]<=100){
				document.getElementById("city_"+i).src="./image/humidity_2.png";
				document.getElementById("text_"+i).textContent=items[i].toFixed(2);
			}else if(items[i]>100){
				document.getElementById("city_"+i).src="./image/humidity_1.png";
				document.getElementById("text_"+i).textContent=items[i].toFixed(2);
			}

		}
		

	})
}

