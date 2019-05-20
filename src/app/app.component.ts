import { Component, OnInit } from '@angular/core';
import { WeatherService} from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  // creaamos propiedad, almacenamos en el estado de la aplicación temporalmente
  // al inicio indefinido, la cargaremos como respuesta 
  // weather = undefined;
  weather;

  // instanciamos el servicio
  constructor(private weatherService: WeatherService){
  }

  // llamamos al servicio, añadimos método ngOninit para cargarlo al inicio
  ngOnInit(){
  }

  // para llamarlo al método más de una vez y no solo en el inicio
  getWeather(cityName: string, countryCode: string){
    this.weatherService.getWeather(cityName, countryCode)
    .subscribe(
      res => {
        console.log(res);
        this.weather = res
      },
      err => console.log(err)
      // TODO show error en vista
    );

  }


 submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement){
   // pequeña validación
   if(cityName.value && countryCode.value) {

    this.getWeather(cityName.value, countryCode.value);
    console.log(cityName.value, countryCode.value);
    // reinicio form
    cityName.value = '';
    countryCode.value = '';

   } else {
     alert('Please, insert values');
   }
   cityName.focus();
    // para que no se reinicie al hacer click en el button
    return false;
  }
}
