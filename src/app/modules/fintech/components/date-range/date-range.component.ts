import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, DoCheck, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrl: './date-range.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateRangeComponent implements DoCheck {

  #formBuilder = inject(FormBuilder);

  #datePipe = new DatePipe('en');

  public form = this.#formBuilder.group({
    inicio: [this.#datePipe.transform(new Date(), 'yyyy-MM-dd'), Validators.required],
    fim: [this.#datePipe.transform(new Date(), 'yyyy-MM-dd'), Validators.required]
  });

  public ngDoCheck(): void {
      console.log(this.form.controls.fim.value);
  }
}
