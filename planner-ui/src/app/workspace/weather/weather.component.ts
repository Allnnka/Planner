import { Component, OnInit } from '@angular/core';
import { faCloud, faEdit, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  moonIcon=faMoon;
  sunIcon=faSun;
  editIcon=faEdit;
  cloudIcon=faCloud;
  WeatherData:any;
  cityName:String="Toruń";
  constructor() { }


  ngOnInit(): void {
    this.WeatherData={
      main:{},
      isDay:true
    }
    this.getWeatherData();
  }

  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+this.cityName+'&appid=2cafcc5f8191f82bf3f878e4937b9e6d')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData(data)});

  }
  setWeatherData(data){
    this.WeatherData=data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset*1000);
    this.WeatherData.sunset_time=sunsetTime.toLocaleTimeString();

    let currentDate= new Date();
    this.WeatherData.isDay=(currentDate.getTime()<sunsetTime.getTime());
    this.WeatherData.temp_celcius=(this.WeatherData.main.temp-273.15).toFixed(0);
    this.WeatherData.temp_min=(this.WeatherData.main.temp_min-273.15).toFixed(0);
    this.WeatherData.temp_max=(this.WeatherData.main.temp_max-273.15).toFixed(0);
    this.WeatherData.temp_feels_like=(this.WeatherData.main.feels_like-273.15).toFixed(0);
  }
}
