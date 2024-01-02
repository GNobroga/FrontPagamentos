import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-months',
  templateUrl: './months.component.html',
  styleUrl: './months.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonthsComponent {

}
