let weather= {
    "apiKey": "3bbdd5684d5848e3b40180214222506",
    fetchWeather: function (city) {
        fetch("http://api.weatherapi.com/v1/current.json?key="+this.apiKey+"&q="+city)
        .then((respone)=> respone.json())
        .then((data)=> this.displayWeather(data));
    },
    displayWeather: function(data){
        
        const { name} = data.location;
        const { wind_kph}= data.current;
        const { temp_c} =data.current;
        const { text} = data.current.condition;
        const { icon} = data.current.condition;
        const  { humidity}= data.current;
        //console.log( name, wind_kph,temp_c, text, humidity );
        document.querySelector(".city").innerHTML= " Welcome to " + name;
        document.querySelector(".icon").src= icon;
        document.querySelector(".humidity").innerHTML= 'Humidity: '+ humidity+ "%";
        document.querySelector(".temp").innerHTML=temp_c+ "° C" ;
        document.querySelector(".wind").innerHTML=" Wind Speed: "+ wind_kph+ " km/h";
        document.querySelector(".description").innerHTML= text;
    }, 
    search : function(){
        weather.fetchWeather(document.querySelector(".search-box").value);
    }
}
document.querySelector(".search button").addEventListener("click", function () {

    weather.search()
});
document.querySelector(".search-box").addEventListener("keyup", function(event) {
if (event.key=="Enter") {
    weather.search();
    
}
    
})
weather.fetchWeather("Lucknow")