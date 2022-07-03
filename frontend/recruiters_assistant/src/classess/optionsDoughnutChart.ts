export class OptionsDonut {
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
							let label = context.label || "";

							if (label && context.parsed !== null) {
								label += ": ";
								const anyString = context.parsed.toString();
								if (context.parsed == 1) {
									label += `${context.parsed} osoba`;
								} else if (
									["2", "3", "4"].includes(
										anyString.substring(anyString.length - 1),
									) &&
									!["12", "13", "14"].includes(anyString)
								) {
									label += `${context.parsed} osoby`;
								} else {
									label += `${context.parsed} osób`;
								}
							}
							return label;
						},
					},
				},
			});
	}
}
