import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { TradingviewChart } from '../../shared/tradingview-chart/tradingview-chart';

@Component({
  selector: 'app-dashboard',
  imports: [MatButtonModule, TradingviewChart],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
