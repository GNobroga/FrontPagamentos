import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent {

  @Input({ required: true }) title = '';
}
