import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ChartComponent } from './chart.component';
import { PathShaperPipe } from './path-shaper.pipe';

@NgModule({
	declarations: [ChartComponent, PathShaperPipe],
	imports: [CommonModule],
	exports: [ChartComponent]
})
export class ChartModule {
}
