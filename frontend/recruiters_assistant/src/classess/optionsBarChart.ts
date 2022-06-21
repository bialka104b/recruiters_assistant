export class Options {
	responsive: boolean;
	plugins: object;
	maintainAspectRatio: boolean;
	constructor() {
		(this.responsive = true),
			(this.maintainAspectRatio = false),
			(this.plugins = {
				tooltip: {
					callbacks: {
						label: function (context: any) {
							let label = context.dataset.label || "";

							if (label && context.parsed.y !== null) {
								label += ": ";
								if (context.parsed.y) {
									label += `${context.parsed.y} w wieku ${context.label} lat`;
								}
							} else {
								label += `: ${context.parsed.y}`;
							}
							return label;
						},
					},
				},
			});
	}
}
