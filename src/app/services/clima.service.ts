import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  url = 'https://api.openweathermap.org/data/2.5/weather?&appid=';
  key = 'e5e045ff662b39d576c8bc74d427fc68';

  constructor(private http: HttpClient) { }

  getClima(ciudad: string): Observable<any> {

    const URL = this.url + this.key + '&q=' + ciudad;
    return this.http.get(URL)
  }
}
