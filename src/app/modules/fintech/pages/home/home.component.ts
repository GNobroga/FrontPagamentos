import { ChangeDetectionStrategy, Component, computed, effect, inject, OnInit, signal, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { DataService } from '../../services/data.service';
import { DatePipe } from '@angular/common';
import { MonthsComponent } from '../../components/months/months.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {

  @ViewChild(MonthsComponent) private monthsComponent!: MonthsComponent;

  #activatedRoute = inject(ActivatedRoute);

  #router = inject(Router);

  #dataService = inject(DataService);

  public pageName = signal('Resumo');

  constructor() {
    effect(() => {
      if (this.pageName() === 'Vendas') {
        this.monthsComponent.activatedMonth.set(-1);
      }
    }, { allowSignalWrites: true });
  }

  public ngOnInit(): void {
    this.#router.events
      .pipe(filter(project => project instanceof NavigationEnd))
      .subscribe(_ => this.pageName.set(this.extractPageName(this.#activatedRoute.firstChild?.snapshot.title!)))
  }

  private extractPageName(value: string) {
    return value.split(' | ')[1];
  }

  public onSelectedMonth(month: number) {
    const datePipe = new DatePipe('en');
    const date = new Date();
    const currentMonth = date.getMonth();
    let currentYear = currentMonth < month ? date.getFullYear() - 1 : date.getFullYear();
    const inicio = datePipe.transform(new Date(currentYear, month, 1), 'yyyy-MM-dd')!;
    const fim = datePipe.transform(new Date(currentYear, month + 1, 0), 'yyyy-MM-dd')!;
    this.#dataService.fim.set(fim);
    this.#dataService.inicio.set(inicio);
  }

}
