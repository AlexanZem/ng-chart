import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-chart',
	templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit {
	// MAIN
	@Input() step = 10;
	@Input() points: number[];
	// SVG
	@Input() width = '100%';
	@Input() height = '100%';
	// PATH
	@Input() strokeWidth = 2;
	@Input() strokeColor = '#000000';
	// POINTS
	@Input() pointsColor = '#000000';
	@Input() pointRadius = 2;
	@Input() showPoints = false;

	constructor() {
	}

	ngOnInit() {
	}

}
