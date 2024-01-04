import { Injectable, effect, signal } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class DataService {

  public inicio = signal<string>('');
  public fim =  signal<string>('');

}
