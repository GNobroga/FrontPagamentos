import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  #activatedRoute = inject(ActivatedRoute);

  #router = inject(Router);

  public pageName = signal('Resumo');

  public ngOnInit(): void {
    this.#router.events
      .pipe(filter(project => project instanceof NavigationEnd))
      .subscribe(_ => this.pageName.set(this.extractPageName(this.#activatedRoute.firstChild?.snapshot.title!)))

  }

  private extractPageName(value: string) {
    return value.split(' | ')[1];
  }

}
