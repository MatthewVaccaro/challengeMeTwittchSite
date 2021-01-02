export const colorTypes = [ [ 'meme', 'green' ], [ 'difficult', 'orange' ], [ 'troll', 'red' ], [ 'custom', 'blue' ] ];

export function findColor(str) {
	var color = '';
	colorTypes.filter((cv) => {
		if (cv[0] === str) {
			color = cv;
		}
	});
	return color;
}
