import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrl: './resumo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumoComponent implements OnInit {

  public options!: EChartsOption;

  public paid = 100;

  public processed = 100;

  public failed = 100;

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
        max: Math.max(this.paid, this.processed, this.failed),
      },
      series: [
        {
          name: 'Total',
          type: 'bar',
          data: [this.paid, this.processed, this.failed],
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
