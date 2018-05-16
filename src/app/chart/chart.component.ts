import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-chart',
	templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit {
	@Input() step = 10;
	@Input() points: number[] = [];
	@Input() width = '100%';
	@Input() height = '100%';
	@Input() chartWidth = 2;
	@Input() chartColor = '#039BE5';
	@Input() pointsColor = '#E1F5FE';
	@Input() pointRadius = 2;
	@Input() showPoints = false;

	constructor() {
	}

	ngOnInit() {
	}

}
