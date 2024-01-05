import { ChangeDetectionStrategy, Component, OnInit, effect, inject } from '@angular/core';
import { VendaService } from '../../services/venda.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrl: './venda.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VendaComponent implements OnInit {

  #vendaService = inject(VendaService);

  public venda = this.#vendaService.findById$;

  #route = inject(ActivatedRoute);

  public ngOnInit() {
    this.#route.params
      .subscribe(params => this.#vendaService.findById(params['id'])
      .subscribe());
  }

}
