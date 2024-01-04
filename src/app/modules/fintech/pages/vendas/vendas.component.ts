import { ChangeDetectionStrategy, Component, OnInit, effect, inject, signal, } from '@angular/core';
import { VendaService } from '../../services/venda.service';
import IVenda from '../../models/IVenda';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrl: './vendas.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VendasComponent implements OnInit {

  #vendaService = inject(VendaService);

  public vendas = this.#vendaService.findAll$;

  public ngOnInit() {
    this.#vendaService.findAll().subscribe();
  }

  public changePage(page: number) {
    this.#vendaService.findAll(page).subscribe();
  }


}
