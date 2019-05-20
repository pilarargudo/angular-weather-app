import { Injectable } from '@angular/core';
// para poder pedir peticiones get/post/...
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey: `257a60a60107ab69e222025ddecee0f5`;
  // creamos propiedad uri para la dirección API, primero vacía
  URI: string = '';

  // instanciamos para emplearlo, creamos propiedad de la clase HttpClient
  // creamos modificador private, para darle el alcance: solo dentro de la clase
  constructor( private httpClient: HttpClient) {
    // 'https://api.openweathermap.org/data/2.5/weather?appid=257a60a60107ab69e222025ddecee0f5&q=london,uk';
    // concatenamos con commillas especiales TODO 
    //this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q=`;
    this.URI = 'https://api.openweathermap.org/data/2.5/weather?appid=257a60a60107ab69e222025ddecee0f5&q=';
   }

   // método para obtener el clima pasándole los parámetros
   getWeather(cityName: string, countryCode: string){
     // le pasamos la uri con variables y como necesitamos el dato con return, nos devolverá el objeto json
    return this.httpClient.get(`${this.URI}${cityName},${countryCode}`);
   }

}
