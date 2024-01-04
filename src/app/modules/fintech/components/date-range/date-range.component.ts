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

  public form = this.#formBuilder.group({
    inicio: [new Date(), Validators.required],
    fim: [new Date(), Validators.required]
  });

  public ngDoCheck(): void {
      console.log(this.form.controls.fim.value);
  }
}
