function weatherforcast(){
        let input=document.querySelector("input");
        let value=input.value;
        if(value==""){
            alert("Please enter city")
        }
        
        console.log(value);
        const API_KEY="cc78f577884fde13d63d61e54989e331";
        async function fetchdata() {
        try{ 
        const url=`https:api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY}&units=metric`;
        console.log(url);
        let take=await fetch(url,{});
        let convert=await take.json();
        console.log(convert);
        display(convert);
        
    }   
    catch{
        console.log("error");
        console.log("data can't be fetch");
        }
   
}
 fetchdata();
}
function display(data){ 
    let main = document.querySelector("main");  
    
       
    main.innerHTML =
        
   `
<img src="/istockphoto-477110708-612x612.jpg" alt="">
<section>
   <h1>Temperature:${data.main.temp}</h1>
  <h1>Visibility:${data.visibility}</h1>
  <h2>Cordinate_longitude:${data.coord.lon}</h2>
  <h2>Cordinate_latitude:${data.coord.lat}</h2>
  <h1>Pressure:${data.main.pressure}</h1>
  <h1>Humidity:${data.main.humidity}</h1>
  <h1>Wind_Speed:${data.wind.speed}</h1>
   </section>
  
  `

}  