function showweatherDetails(event){
    event.preventDefault(); // يمنع إعادة تحميل الصفحة

    // هنا نأخذ قيمة المدينة بعد الضغط على الفورم
    const city = document.getElementById('city').value;
    const apiKey = '60b57a083c7de158859ad8486beff3e6';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // نعمل fetch بعد ما نحصل على اسم المدينة
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} &#8451;</p>
        <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Could not fetch weather. Please try again.</p>`;
    });
}

// نربط الفورم بالدالة
document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);



