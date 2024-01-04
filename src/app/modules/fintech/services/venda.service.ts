import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject, signal } from "@angular/core";
import { catchError, shareReplay, tap, throwError } from "rxjs";
import { environment } from "../../../../environments/environment";
import IVenda from "../models/IVenda";

interface IDateRange {
  above?: string;
  below?: string;
}

@Injectable({
  providedIn: 'root',
})
export class VendaService {

  #httpClient = inject(HttpClient);

  public findAll$ = signal<IVenda[]>([]);

  public findAll(page = 1, size = 10) {
    return this.#httpClient
      .get<IVenda[]>(`${environment.apiUrl}?page=${page}&size=${size}`)
      .pipe(shareReplay(), tap(value => this.findAll$.set(value)));
  }

  public findById$ = signal<IVenda | null>(null);

  public findById(id: string) {
    return this.#httpClient
      .get<IVenda>(`${environment.apiUrl}/${id}`)
      .pipe(shareReplay(), tap(value => this.findById$.set(value)));
  }

  public findByDateRange$ = signal<IVenda[]>([]);

  public findByDateRange({ above, below }: IDateRange) {
    return this.#httpClient.get<IVenda[]>(`${environment.apiUrl}/search?inicio=${above ?? below }&fim=${below ?? above}`)
      .pipe(shareReplay(), catchError((err) => {
        return throwError(() => new Error('A data inicio ou fim não é válida.'));
      }), tap(value => this.findByDateRange$.set(value)));
  }

}
