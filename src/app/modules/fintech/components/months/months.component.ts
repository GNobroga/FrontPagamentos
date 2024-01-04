import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, Signal, effect, signal } from '@angular/core';

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

@Component({
  selector: 'app-months',
  templateUrl: './months.component.html',
  styleUrl: './months.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonthsComponent implements OnInit {

  public data = signal([]);

  public selectMonths = signal<{ month: string, key: number }[]>([]);

  public activatedMonth = signal(new Date().getMonth());

  @Output() public selectedMonth = new EventEmitter<number>();

  public ngOnInit(): void {
      this.#getLastMonths(4);
  }

  #getLastMonths(count: number) {
    const currentDate = new Date();
    currentDate.setMonth(-count + 1);
    let currentMonth = -count + 1;

    for (let i = 0 ; i < count ; i++) {
      const monthKey = currentDate.getMonth();
      const month = { month: months.at(monthKey) as string, key: monthKey };
      this.selectMonths.update((oldValue) => [...oldValue, month]);
      currentMonth += 1;
      currentDate.setMonth(currentMonth);
    }
  }

  public onSelectedMonth(month: number) {
    this.activatedMonth.set(month);
    this.selectedMonth.emit(month);
  }
}
