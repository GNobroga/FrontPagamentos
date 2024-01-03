import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface IMenu {
  label: string;
  source: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {

  public menus = signal<Array<IMenu>>([
    {
      source: 'assets/icons/resumo.svg',
      label: 'Resumo'
    },
    {
      source: 'assets/icons/vendas.svg',
      label: 'Vendas'
    },
    {
      source: 'assets/icons/webhooks.svg',
      label: 'Webhooks',
    },
    {
      source: 'assets/icons/configuracoes.svg',
      label: 'Configurações',
    },
    {
      source: 'assets/icons/contato.svg',
      label: 'Contato',
    },
    {
      source: 'assets/icons/sair.svg',
      label: 'Sair',
    },
  ]);
}
