import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sale } from '../models/sale';


const API_PATH = 'https://6566378beb8bb4b70ef30d38.mockapi.io/';



@Injectable({
  providedIn: 'root'
})

export class DatasService {

  constructor(private http: HttpClient) { 
  }
  
  getDataListas():Observable<Sale[]>{
    const path = API_PATH +'sales';
    return this.http.get<Sale[]>(path);
  }
}
