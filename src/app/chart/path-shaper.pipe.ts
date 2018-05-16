import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'pathShaper'
})
export class PathShaperPipe implements PipeTransform {
	STEP = 10;
	transform(points: number[], chartStep?: number): string {
		function formBezier(prevPoint, currPoint, halfStep, curStep) {
			let bezierStep = curStep - halfStep;
			return `C${bezierStep},${prevPoint} ${bezierStep},${currPoint} ${curStep},${currPoint}`;
		}

		let step = chartStep || this.STEP, currStep = step, d = '';
		points.forEach((point, idx, arr) => {
			d += idx === 0 ? `M${currStep} ${point}` : formBezier(arr[idx - 1], point, step / 2, currStep);

			currStep += step;
		});
		return d;
	}

}
