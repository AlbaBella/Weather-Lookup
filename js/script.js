jQuery(document).ready(function(){
    $('.btn').on('click',function(){

        var zip= $('#zip').val();
        var url= 'http://api.openweathermap.org/data/2.5/weather?zip='+zip+',us&APPID=aa2625f6776119e1f4eb1a2fc9175862';
       
        $('.info').html('<img class="loading" src="https://i.gifer.com/origin/44/446bcd468478f5bfb7b4e5c804571392_w200.webp" alt="loading">');
       axios.get(url).then(function(response){

            var datas=response.data;
            var temps=datas.main;
            var weatherHTML= '<h3 class="text.center"> '+datas.weather[0].main+ '</h3>';
            weatherHTML += '<h6> '+datas.weather[0].description+'</h6>';
            weatherHTML += '<p> City: '+datas.name+ '</p>';
            weatherHTML +='<p> Temp: '+temps.temp+ '</p>';
            $('.info').html (weatherHTML);
            
        });
     }); 
    
});