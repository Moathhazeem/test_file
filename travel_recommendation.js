let travelData = [];
fetch("travel_recommendation.json")
  .then(res => res.json())
  .then(data => {
    travelData = data;
    console.log('Data loaded:', travelData);
  })
  .catch(err => console.log("Error loading JSON:", err));

function search() {
    const keyword = document.getElementById("searchInput").value.trim().toLowerCase();
    const results = document.getElementById("results");
    results.innerHTML = "";
    if(!keyword) return;

    const beachWords = ["beach", "beaches", "sea"];
    const templeWords = ["temple", "temples"];
    const countryWords = ["state", "states", "country", "countries"];

    let category = "";
    if(beachWords.includes(keyword)) category = "beaches";
    if(templeWords.includes(keyword)) category = "temples";
    if(countryWords.includes(keyword)) category = "countries";

    if(!category){
        results.innerHTML = "<p>No results found.</p>";
        return;
    }

    if(category === "countries") {
        // عرض كل الدول وكل المدن داخلها
        travelData.countries.forEach(country => {
            country.cities.forEach(city => {
                results.innerHTML += `<div style="background:#fff;color:#000;margin:20px;padding:20px;border-radius:10px;">
                    <h2>${city.name}</h2>
                    <img src="${city.imageUrl}" width="300">
                    <p>${city.description}</p>
                </div>`;
            });
        });
    } else {
        // عرض كل الشواطئ أو المعابد
        travelData[category].forEach(item => {
            results.innerHTML += `<div style="background:#fff;color:#000;margin:20px;padding:20px;border-radius:10px;">
                <h2>${item.name}</h2>
                <img src="${item.imageUrl}" width="300">
                <p>${item.description}</p>
            </div>`;
        });
    }
}

function clearResults(){
    document.getElementById("results").innerHTML = "";
    document.getElementById("searchInput").value = "";
}
