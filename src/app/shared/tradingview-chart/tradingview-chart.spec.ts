import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingviewChart } from './tradingview-chart';

describe('TradingviewChart', () => {
  let component: TradingviewChart;
  let fixture: ComponentFixture<TradingviewChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradingviewChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradingviewChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
