import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { EChartsOption } from 'echarts';
import { VendaService } from '../../services/venda.service';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrl: './resumo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumoComponent implements OnInit {

  #vendaService = inject(VendaService);

  public vendas = this.#vendaService.findByDateRange$();

  public options!: EChartsOption;

  public ngOnInit(): void {
    const xAxisData: string[] = ['Pago', 'Processando', 'Falha'];

    this.options = {
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: Math.max(1, 1, 1),
      },
      series: [
        {
          name: 'Total',
          type: 'bar',
          data: [1, 1, 1],
          itemStyle: {
            color: function({ name }) {
              return name === 'Processando' ? '#014E8E' :
                name === 'Falha' ? '#FD3657' : '#1DB113';
            }
          },
          animationDelay: idx => idx * 10,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: idx => idx * 5,
    };
  }


}
