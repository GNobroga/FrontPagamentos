import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent {

  public currentPage = signal(1);

  @Output() public  page = new EventEmitter();

  @Input({ required: true }) public end!: boolean;

  public next() {
    const newCurrentPage = this.currentPage() + 1;
    this.currentPage.set(newCurrentPage);
    this.page.emit(newCurrentPage);
  }

  public previous() {
    const newCurrentPage = this.currentPage() - 1;
    this.currentPage.set(newCurrentPage);
    this.page.emit(newCurrentPage);
  }
}
