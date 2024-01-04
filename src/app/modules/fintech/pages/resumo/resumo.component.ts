import { ChangeDetectionStrategy, Component, DoCheck, Input, OnInit, computed, effect, inject, signal } from '@angular/core';
import { EChartsOption } from 'echarts';
import { VendaService } from '../../services/venda.service';
import { DataService } from '../../services/data.service';
import IVenda from '../../models/IVenda';

const getTotalByStatus = (targetStatus: 'pago' | 'processado' | 'falha', vendas: IVenda[]) => {
  console.log(vendas)
  return vendas.filter(({ status }) => status === targetStatus).reduce((total, curr) => total + curr.preco, 0);
};

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrl: './resumo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumoComponent implements OnInit {

  #vendaService = inject(VendaService);

  #dataService = inject(DataService);

  public vendas = this.#vendaService.findByDateRange$;

  public totalPago = computed(() => getTotalByStatus('pago', this.vendas()));

  public totalProcessado = computed(() => getTotalByStatus('processado', this.vendas()));

  public totalFalha = computed(() => getTotalByStatus('falha', this.vendas()));

  public totalVendas = computed(() => this.vendas().reduce((total, curr) => total + curr.preco, 0));

  constructor() {
    effect(() => {
        this.#vendaService.findByDateRange(this.#dataService.inicio(), this.#dataService.fim()).subscribe();
    });
  }

  public options = computed<EChartsOption>(() => ({
      tooltip: {},
      xAxis: {
        data: ['pago', 'processado', 'falha'],
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: Math.max(this.totalPago(), this.totalProcessado(), this.totalFalha()),
      },
      series: [
        {
          name: 'Total',
          type: 'bar',
          data: [this.totalPago(), this.totalProcessado(), this.totalFalha()],
          itemStyle: {
            color: function({ name } ) {
              return name === 'Processando' ? '#014E8E' :
                name === 'Falha' ? '#FD3657' : '#1DB113';
            }
          },
          animationDelay: idx => idx * 10,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: idx => idx * 5,
    }));

  public ngOnInit(): void {
    this.#vendaService.findByDateRange(this.#dataService.inicio(), this.#dataService.fim()).subscribe();
  }

}
