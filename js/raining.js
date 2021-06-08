let records=null;
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
	kee_raining=kee_value/kee_count
	console.log("基隆"+kee_raining)
	tph_raining=tph_value/tph_count
	console.log("新北"+tph_raining)
	tpe_raining=tpe_value/tpe_count
	console.log("台北"+tpe_raining)
	tyc_raining=tyc_value/tyc_count
	console.log("桃園"+tyc_raining)
	hsh_raining=hsh_value/hsh_count
	console.log("新竹縣"+hsh_raining)
	hsc_raining=hsc_value/hsc_count
	console.log("新竹市"+hsc_raining)
	mal_raining=mal_value/mal_count
	console.log("苗栗"+mal_raining)
	txg_raining=txg_value/txg_count
	console.log("台中"+txg_raining)
	cwh_raining=cwh_value/cwh_count
	console.log("彰化"+cwh_raining)
	nto_raining=nto_value/nto_count
	console.log("南投"+nto_raining)
	ylh_raining=ylh_value/ylh_count
	console.log("雲林"+ylh_raining)
	chy_raining=chy_value/chy_count
	console.log("嘉義縣"+chy_raining)
	cyi_raining=cyi_value/cyi_count
	console.log("嘉義市"+cyi_raining)
	tnn_raining=tnn_value/tnn_count
	console.log("台南"+tnn_raining)
	khh_raining=khh_value/khh_count
	console.log("高雄"+khh_raining)
	iuh_raining=iuh_value/iuh_count
	console.log("屏東"+iuh_raining)
	iln_raining=iln_value/iln_count
	console.log("宜蘭"+iln_raining)
	hwa_raining=hwa_value/hwa_count
	console.log("花蓮"+hwa_raining)
	ttt_raining=ttt_value/ttt_count
	console.log("台東"+ttt_raining)
	peh_raining=peh_value/peh_count
	console.log("澎湖"+peh_raining)
	kmn_raining=kmn_value/kmn_count
	console.log("金門"+kmn_raining)
	lnn_raining=lnn_value/lnn_count
	console.log("連江"+lnn_raining)

	let weather_btn=document.getElementsByClassName("button")[2]
	weather_btn.addEventListener("click",function(){
		//判斷數值區間並帶入該縣市欄位
		if(kee_raining <= 0){
			let img =document.getElementById("city_1");
			img.src="./image/raining_1.png";
			kee_raining=0;
			document.getElementById("text_1").textContent=kee_raining.toFixed(2)
		}else if(kee_raining<=30){
			let img =document.getElementById("city_1");
			img.src="./image/raining_2.png";
			document.getElementById("text_1").textContent=kee_raining.toFixed(2)
		}else if(kee_raining<=100){
			let img =document.getElementById("city_1");
			img.src="./image/raining_3.png";
			document.getElementById("text_1").textContent=kee_raining.toFixed(2)
		}else{
			let img =document.getElementById("city_1");
			img.src="./image/raining_4.png";
			document.getElementById("text_1").textContent=kee_raining.toFixed(2)
		}

		if(tph_raining <= 0){
			let img =document.getElementById("city_4");
			img.src="./image/raining_1.png";
			tph_raining=0;
			document.getElementById("text_4").textContent=tph_raining.toFixed(2)
		}else if(tph_raining<=30){
			let img =document.getElementById("city_4");
			img.src="./image/raining_2.png";
			document.getElementById("text_4").textContent=tph_raining.toFixed(2)
		}else if(tph_raining<=100){
			let img =document.getElementById("city_4");
			img.src="./image/raining_3.png";
			document.getElementById("text_4").textContent=tph_raining.toFixed(2)
		}else{
			let img =document.getElementById("city_4");
			img.src="./image/raining_4.png";
			document.getElementById("text_4").textContent=tph_raining.toFixed(2)
		}

		if(tpe_raining <= 0){
			let img =document.getElementById("city_3");
			img.src="./image/raining_1.png";
			tpe_raining=0;
			document.getElementById("text_3").textContent=tpe_raining.toFixed(2)
		}else if(tpe_raining<=30){
			let img =document.getElementById("city_3");
			img.src="./image/raining_2.png";
			document.getElementById("text_3").textContent=tpe_raining.toFixed(2)
		}else if(tpe_raining<=100){
			let img =document.getElementById("city_3");
			img.src="./image/raining_3.png";
			document.getElementById("text_3").textContent=tpe_raining.toFixed(2)
		}else{
			let img =document.getElementById("city_3");
			img.src="./image/raining_4.png";
			document.getElementById("text_3").textContent=tpe_raining.toFixed(2)
		}
		
		if(tyc_raining <= 0){
			let img =document.getElementById("city_5");
			img.src="./image/raining_1.png";
			tyc_raining=0;
			document.getElementById("text_5").textContent=tyc_raining.toFixed(2)
		}else if(tyc_raining<=30){
			let img =document.getElementById("city_5");
			img.src="./image/raining_2.png";
			document.getElementById("text_5").textContent=tyc_raining.toFixed(2)
		}else if(tyc_raining<=100){
			let img =document.getElementById("city_5");
			img.src="./image/raining_3.png";
			document.getElementById("text_5").textContent=tyc_raining.toFixed(2)
		}else{
			let img =document.getElementById("city_5");
			img.src="./image/raining_4.png";
			document.getElementById("text_5").textContent=tyc_raining.toFixed(2)
		}

		if(hsh_raining <= 0){
			let img =document.getElementById("city_6");
			img.src="./image/raining_1.png";
			hsh_raining=0;
			document.getElementById("text_6").textContent=hsh_raining.toFixed(2)
		}else if(hsh_raining<=30){
			let img =document.getElementById("city_6");
			img.src="./image/raining_2.png";
			document.getElementById("text_6").textContent=hsh_raining.toFixed(2)
		}else if(hsh_raining<=100){
			let img =document.getElementById("city_6");
			img.src="./image/raining_3.png";
			document.getElementById("text_6").textContent=hsh_raining.toFixed(2)
		}else{
			let img =document.getElementById("city_6");
			img.src="./image/raining_4.png";
			document.getElementById("text_6").textContent=hsh_raining.toFixed(2)
		}

		if(hsc_raining <= 0){
			let img =document.getElementById("city_7");
			img.src="./image/raining_1.png";
			hsc_raining=0;
			document.getElementById("text_7").textContent=hsc_raining.toFixed(2)
		}else if(hsc_raining<=30){
			let img =document.getElementById("city_7");
			img.src="./image/raining_2.png";
			document.getElementById("text_7").textContent=hsc_raining.toFixed(2)
		}else if(hsc_raining<=100){
			let img =document.getElementById("city_7");
			img.src="./image/raining_3.png";
			document.getElementById("text_7").textContent=hsc_raining.toFixed(2)
		}else{
			let img =document.getElementById("city_7");
			img.src="./image/raining_4.png";
			document.getElementById("text_7").textContent=hsc_raining.toFixed(2)
		}

		if(mal_raining <= 0){
			let img =document.getElementById("city_8");
			img.src="./image/raining_1.png";
			mal_raining=0;
			document.getElementById("text_8").textContent=mal_raining.toFixed(2)
		}else if(mal_raining<=30){
			let img =document.getElementById("city_8");
			img.src="./image/raining_2.png";
			document.getElementById("text_8").textContent=mal_raining.toFixed(2)
		}else if(mal_raining<=100){
			let img =document.getElementById("city_8");
			img.src="./image/raining_3.png";
			document.getElementById("text_8").textContent=mal_raining.toFixed(2)
		}else{
			let img =document.getElementById("city_8");
			img.src="./image/raining_4.png";
			document.getElementById("text_8").textContent=mal_raining.toFixed(2)
		}

		if(txg_raining <= 0){
			let img =document.getElementById("city_9");
			img.src="./image/raining_1.png";
			txg_raining=0;
			document.getElementById("text_9").textContent=txg_raining.toFixed(2)
		}else if(txg_raining<=30){
			let img =document.getElementById("city_9");
			img.src="./image/raining_2.png";
			document.getElementById("text_9").textContent=txg_raining.toFixed(2)
		}else if(txg_raining<=100){
			let img =document.getElementById("city_9");
			img.src="./image/raining_3.png";
			document.getElementById("text_9").textContent=txg_raining.toFixed(2)
		}else{
			let img =document.getElementById("city_9");
			img.src="./image/raining_4.png";
			document.getElementById("text_9").textContent=txg_raining.toFixed(2)
		}

		if(cwh_raining <= 0){
			let img =document.getElementById("city_10");
			img.src="./image/raining_1.png";
			cwh_raining=0;
			document.getElementById("text_10").textContent=cwh_raining.toFixed(2)
		}else if(cwh_raining<=30){
			let img =document.getElementById("city_10");
			img.src="./image/raining_2.png";
			document.getElementById("text_10").textContent=cwh_raining.toFixed(2)
		}else if(cwh_raining<=100){
			let img =document.getElementById("city_10");
			img.src="./image/raining_3.png";
			document.getElementById("text_10").textContent=cwh_raining.toFixed(2)
		}else{
			let img =document.getElementById("city_10");
			img.src="./image/raining_4.png";
			document.getElementById("text_10").textContent=cwh_raining.toFixed(2)
		}

		if(nto_raining <= 0){
			let img =document.getElementById("city_11");
			img.src="./image/raining_1.png";
			nto_raining=0;
			document.getElementById("text_11").textContent=nto_raining.toFixed(2)
		}else if(nto_raining<=30){
			let img =document.getElementById("city_11");
			img.src="./image/raining_2.png";
			document.getElementById("text_11").textContent=nto_raining.toFixed(2)
		}else if(nto_raining<=100){
			let img =document.getElementById("city_11");
			img.src="./image/raining_3.png";
			document.getElementById("text_11").textContent=nto_raining.toFixed(2)
		}else{
			let img =document.getElementById("city_11");
			img.src="./image/raining_4.png";
			document.getElementById("text_11").textContent=nto_raining.toFixed(2)
		}

		if(ylh_raining <= 0){
			let img =document.getElementById("city_12");
			img.src="./image/raining_1.png";
			ylh_raining=0;
			document.getElementById("text_12").textContent=ylh_raining.toFixed(2)
		}else if(ylh_raining<=30){
			let img =document.getElementById("city_12");
			img.src="./image/raining_2.png";
			document.getElementById("text_12").textContent=ylh_raining.toFixed(2)
		}else if(ylh_raining<=100){
			let img =document.getElementById("city_12");
			img.src="./image/raining_3.png";
			document.getElementById("text_12").textContent=ylh_raining.toFixed(2)
		}else{
			let img =document.getElementById("city_12");
			img.src="./image/raining_4.png";
			document.getElementById("text_12").textContent=ylh_raining.toFixed(2)
		}

		if(chy_raining <= 0){
			let img =document.getElementById("city_13");
			img.src="./image/raining_1.png";
			chy_raining=0;
			document.getElementById("text_13").textContent=chy_raining.toFixed(2)
		}else if(chy_raining<=30){
			let img =document.getElementById("city_13");
			img.src="./image/raining_2.png";
			document.getElementById("text_13").textContent=chy_raining.toFixed(2)
		}else if(chy_raining<=100){
			let img =document.getElementById("city_13");
			img.src="./image/raining_3.png";
			document.getElementById("text_13").textContent=chy_raining.toFixed(2)
		}else{
			let img =document.getElementById("city_13");
			img.src="./image/raining_4.png";
			document.getElementById("text_13").textContent=chy_raining.toFixed(2)
		}

		if(cyi_raining <= 0){
			let img =document.getElementById("city_14");
			img.src="./image/raining_1.png";
			cyi_raining=0;
			document.getElementById("text_14").textContent=cyi_raining.toFixed(2)
		}else if(cyi_raining<=30){
			let img =document.getElementById("city_14");
			img.src="./image/raining_2.png";
			document.getElementById("text_14").textContent=cyi_raining.toFixed(2)
		}else if(cyi_raining<=100){
			let img =document.getElementById("city_14");
			img.src="./image/raining_3.png";
			document.getElementById("text_14").textContent=cyi_raining.toFixed(2)
		}else{
			let img =document.getElementById("city_14");
			img.src="./image/raining_4.png";
			document.getElementById("text_14").textContent=cyi_raining.toFixed(2)
		}

		if(tnn_raining <= 0){
			let img =document.getElementById("city_15");
			img.src="./image/raining_1.png";
			tnn_raining=0;
			document.getElementById("text_15").textContent=tnn_raining.toFixed(2)
		}else if(tnn_raining<=30){
			let img =document.getElementById("city_15");
			img.src="./image/raining_2.png";
			document.getElementById("text_15").textContent=tnn_raining.toFixed(2)
		}else if(tnn_raining<=100){
			let img =document.getElementById("city_15");
			img.src="./image/raining_3.png";
			document.getElementById("text_15").textContent=tnn_raining.toFixed(2)
		}else{
			let img =document.getElementById("city_15");
			img.src="./image/raining_4.png";
			document.getElementById("text_15").textContent=tnn_raining.toFixed(2)
		}

		if(khh_raining <= 0){
			let img =document.getElementById("city_16");
			img.src="./image/raining_1.png";
			khh_raining=0;
			document.getElementById("text_16").textContent=khh_raining.toFixed(2)
		}else if(khh_raining<=30){
			let img =document.getElementById("city_16");
			img.src="./image/raining_2.png";
			document.getElementById("text_16").textContent=khh_raining.toFixed(2)
		}else if(khh_raining<=100){
			let img =document.getElementById("city_16");
			img.src="./image/raining_3.png";
			document.getElementById("text_16").textContent=khh_raining.toFixed(2)
		}else{
			let img =document.getElementById("city_16");
			img.src="./image/raining_4.png";
			document.getElementById("text_16").textContent=khh_raining.toFixed(2)
		}

		if(iuh_raining <= 0){
			let img =document.getElementById("city_17");
			img.src="./image/raining_1.png";
			iuh_raining=0;
			document.getElementById("text_17").textContent=iuh_raining.toFixed(2)
		}else if(iuh_raining<=30){
			let img =document.getElementById("city_17");
			img.src="./image/raining_2.png";
			document.getElementById("text_17").textContent=iuh_raining.toFixed(2)
		}else if(iuh_raining<=100){
			let img =document.getElementById("city_17");
			img.src="./image/raining_3.png";
			document.getElementById("text_17").textContent=iuh_raining.toFixed(2)
		}else{
			let img =document.getElementById("city_17");
			img.src="./image/raining_4.png";
			document.getElementById("text_17").textContent=iuh_raining.toFixed(2)
		}

		if(iln_raining <= 0){
			let img =document.getElementById("city_2");
			img.src="./image/raining_1.png";
			iln_raining=0;
			document.getElementById("text_2").textContent=iln_raining.toFixed(2)
		}else if(iln_raining<=30){
			let img =document.getElementById("city_2");
			img.src="./image/raining_2.png";
			document.getElementById("text_2").textContent=iln_raining.toFixed(2)
		}else if(iln_raining<=100){
			let img =document.getElementById("city_2");
			img.src="./image/raining_3.png";
			document.getElementById("text_2").textContent=iln_raining.toFixed(2)
		}else{
			let img =document.getElementById("city_2");
			img.src="./image/raining_4.png";
			document.getElementById("text_2").textContent=iln_raining.toFixed(2)
		}

		if(ttt_raining <= 0){
			let img =document.getElementById("city_18");
			img.src="./image/raining_1.png";
			ttt_raining=0;
			document.getElementById("text_18").textContent=ttt_raining.toFixed(2)
		}else if(ttt_raining<=30){
			let img =document.getElementById("city_18");
			img.src="./image/raining_2.png";
			document.getElementById("text_18").textContent=ttt_raining.toFixed(2)
		}else if(ttt_raining<=100){
			let img =document.getElementById("city_18");
			img.src="./image/raining_3.png";
			document.getElementById("text_18").textContent=ttt_raining.toFixed(2)
		}else{
			let img =document.getElementById("city_18");
			img.src="./image/raining_4.png";
			document.getElementById("text_18").textContent=ttt_raining.toFixed(2)
		}

		if(hwa_raining <= 0){
			let img =document.getElementById("city_19");
			img.src="./image/raining_1.png";
			hwa_raining=0;
			document.getElementById("text_19").textContent=hwa_raining.toFixed(2)
		}else if(hwa_raining<=30){
			let img =document.getElementById("city_19");
			img.src="./image/raining_2.png";
			document.getElementById("text_19").textContent=hwa_raining.toFixed(2)
		}else if(hwa_raining<=100){
			let img =document.getElementById("city_19");
			img.src="./image/raining_3.png";
			document.getElementById("text_19").textContent=hwa_raining.toFixed(2)
		}else{
			let img =document.getElementById("city_19");
			img.src="./image/raining_4.png";
			document.getElementById("text_19").textContent=hwa_raining.toFixed(2)
		}

		if(kmn_raining <= 0){
			let img =document.getElementById("city_20");
			img.src="./image/raining_1.png";
			kmn_raining=0;
			document.getElementById("text_20").textContent=kmn_raining.toFixed(2)
		}else if(kmn_raining<=30){
			let img =document.getElementById("city_20");
			img.src="./image/raining_2.png";
			document.getElementById("text_20").textContent=kmn_raining.toFixed(2)
		}else if(kmn_raining<=100){
			let img =document.getElementById("city_20");
			img.src="./image/raining_3.png";
			document.getElementById("text_20").textContent=kmn_raining.toFixed(2)
		}else{
			let img =document.getElementById("city_20");
			img.src="./image/raining_4.png";
			document.getElementById("text_20").textContent=kmn_raining.toFixed(2)
		}

		if(peh_raining <= 0){
			let img =document.getElementById("city_21");
			img.src="./image/raining_1.png";
			peh_raining=0;
			document.getElementById("text_21").textContent=peh_raining.toFixed(2)
		}else if(peh_raining<=30){
			let img =document.getElementById("city_21");
			img.src="./image/raining_2.png";
			document.getElementById("text_21").textContent=peh_raining.toFixed(2)
		}else if(peh_raining<=100){
			let img =document.getElementById("city_21");
			img.src="./image/raining_3.png";
			document.getElementById("text_21").textContent=peh_raining.toFixed(2)
		}else{
			let img =document.getElementById("city_21");
			img.src="./image/raining_4.png";
			document.getElementById("text_21").textContent=peh_raining.toFixed(2)
		}

		if(lnn_raining <= 0){
			let img =document.getElementById("city_22");
			img.src="./image/raining_1.png";
			lnn_raining=0;
			document.getElementById("text_22").textContent=lnn_raining.toFixed(2)
		}else if(lnn_raining<=30){
			let img =document.getElementById("city_22");
			img.src="./image/raining_2.png";
			document.getElementById("text_22").textContent=lnn_raining.toFixed(2)
		}else if(lnn_raining<=100){
			let img =document.getElementById("city_22");
			img.src="./image/raining_3.png";
			document.getElementById("text_22").textContent=lnn_raining.toFixed(2)
		}else{
			let img =document.getElementById("city_22");
			img.src="./image/raining_4.png";
			document.getElementById("text_22").textContent=lnn_raining.toFixed(2)
		}

	})
}

