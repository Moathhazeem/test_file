let travelData = [];
fetch("travel_recommendation.json")
 .then(res =>res.json())
 .then(data =>{
    travelData = data;
    console.log('Data loaded:',travelData);
 })
 .catch(err =>console.log("Error loading JSON:",err));

 function search(){
    const keyword = document.getElementById("searchInput").value.trim().toLowerCase();
    const results = document.getElementById("results");
    results.innerHTML = "";
    if(!keyword) return;
    const beachWords = ["beach", "beaches", "sea"];
    const templeWords = ["Temple", "Temples"];
    const countryWords = ["State", "States"];
    let category = "";
    if(beachWords.includes(keyword)) category = "beaches";
    if(templeWords.includes(keyword)) category = "temples";
    if(countryWords.includes(keyword)) category = "countries";
    if(!category){
        results.innerHTML = "<p>No results found.</p>"
        return;
    }
    const items = travelData[category].slice(0,2);

    items.forEach(item =>{
        results.innerHTML +=`<div style = "background:#fff;color:#000; margin:20px;padding:20px; border-radius:10px;">
        <h2>${item.name}</h2>
        <img src = "${item.image}" width = "300">
        <p>${item.description}</p>
        </div>`;
    });
 }
 function clearResults(){
    document.getElementById("results").innerHTML = "";
    document.getElementById("searchInput").value = "";
 }

 const options = {timeZone:item.timezone,hour12:true,hour:'numeric',minute:"numeric",second:"numeric"};
 const time = new Date().toLocaleTimeString("en-US",options);
 results.innerHTML += `<p>Current Time : ${time}</p>`