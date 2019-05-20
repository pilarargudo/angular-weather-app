import { Component, OnInit } from '@angular/core';
import { WeatherService} from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  // instanciamos el servicio
  constructor(private weatherService: WeatherService){
  }

  // llamamos al servicio, añadimos método ngOninit para cargarlo al inicio
  ngOnInit(){
    this.weatherService.getWeather('london', 'uk')
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }
}
