jQuery(document).ready(function(){
    $('.btn').on('click',function(){

        var zip= $('#zip').val();
        if(isNaN(zip)){
            alert('Please enter a valid zipcode');
        }
        else{
            var url= 'http://api.openweathermap.org/data/2.5/weather?zip='+zip+',us&APPID=aa2625f6776119e1f4eb1a2fc9175862';
       
            $('.info').html('<img class="loading" src="https://i.gifer.com/origin/44/446bcd468478f5bfb7b4e5c804571392_w200.webp" alt="loading">');
           axios.get(url).then(function(response){
    
                var datas=response.data;
                var temps=datas.main;
                var weather=datas.weather[0].main;
                var tempC=temps.temp-273.15;
                var tempF=tempC*9/5+32;
                var weatherHTML= '<h3 class="text.center"> '+datas.weather[0].main+ '</h3>';
                weatherHTML += '<h6> '+datas.weather[0].description+'</h6>';
                weatherHTML += '<p> City: '+datas.name+ '</p>';
                weatherHTML +='<p> Temp: '+tempC.toFixed(1)+'°C</p>';
                weatherHTML+='<p> Temp: '+tempF.toFixed(1)+'°F</p>';
                $('.info').html (weatherHTML);
                if (weather=='Clear'){
                    $('.container').html('<img src="https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-sunny-512.png" style="width:50%" alt="clear">');
                }
                if (weather=='Rain'){
                    $('.container').html('<img src="https://cdn3.iconfinder.com/data/icons/weather-399/48/rain_raining_weather_forecast_cloud-512.png" style="width:50%" alt="rain">');
                }
                if(weather=='Clouds'){
                    $('.container').html('<img src="https://cdn2.iconfinder.com/data/icons/nature-glyph-3/128/131-512.png" style="width:50%" alt="clouds">');
                }
                if(weather=='Snow'){
                    $('.container').html('<img src="https://cdn4.iconfinder.com/data/icons/weather-forecast-filled-outline-1/64/snow_weather_weather_forecast_cloud-512.png" style="width:50%" alt="snow">');
                }
                if (weather=="Thunders"){
                    $('.container').html('<img src="https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-thunderstorm-512.png" style="width:50%" alt="thunders">');                }
            });

        }
       
     }); 
    
});
