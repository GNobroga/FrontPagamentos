import { ChangeDetectionStrategy, Component, Input, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusComponent {

  @Input({ required: true }) public vendas!: Signal<number>
  @Input({ required: true }) public recebidos!: Signal<number>
  @Input({ required: true }) public processado!: Signal<number>
}
