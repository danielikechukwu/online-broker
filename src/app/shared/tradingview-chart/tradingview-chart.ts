import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-tradingview-chart',
  imports: [],
  templateUrl: './tradingview-chart.html',
  styleUrl: './tradingview-chart.scss'
})
export class TradingviewChart implements AfterViewInit {

  isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) {
      console.log('⛔ TradingView disabled on server (SSR)');
      return;
    }

    this.loadTradingViewScript().then(() => {
      if ((window as any).TradingView) {
        (window as any).TradingView.onready(() => {
          new (window as any).TradingView.widget({
            container_id: 'tradingview_chart',
            symbol: 'NASDAQ:MSFT',
            interval: 'D',
            theme: 'light',
            style: '1',
            locale: 'en',
            width: '100%',
            height: '500',
          });
        });
      } else {
        console.error('❌ TradingView not loaded in browser');
      }
    });
  }

  private loadTradingViewScript(): Promise<void> {
    return new Promise((resolve) => {
      if (!this.isBrowser) {
        resolve();
        return;
      }

      if (document.getElementById('tradingview-widget-script')) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.id = 'tradingview-widget-script';
      script.src = 'https://s3.tradingview.com/tv.js';
      script.type = 'text/javascript';
      script.onload = () => resolve();
      script.onerror = () => console.error('❌ Failed to load TradingView script');
      document.body.appendChild(script);
    });
  }

}
