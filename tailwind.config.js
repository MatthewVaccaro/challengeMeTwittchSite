module.exports = {
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},
	purge: [],
	theme: {
		extend: {
			height: {
				px2: '2px',
				px5: '5px',
				px7: '7px'
			},
			padding: {
				px2: '2px',
				px5: '5px',
				px7: '7px'
			},
			opacity: {
				'10': '.1',
				'20': '.2',
				'30': '.3',
				'40': '.4',
				'50': '.5',
				'60': '.6',
				'70': '.7',
				'80': '.8',
				'90': '.9'
			}
		},
		colors: {
			green: '#0FC64D',
			red: '#F61067',
			blue: '#0283FF',
			orange: '#FF9700',
			black: '#222222',
			white: '#ffffff',
			green_100: '#89E3A8',
			red_100: '#FB8AB5',
			blue_100: '#83C2FF',
			orange_100: '#FFCC82',
			black_100: '#939393',
			white_100: '#F7F7F7'
		},
		screens: {
			sm: '375px',
			md: '768px',
			lg: '1024px'
		},
		container: {
			padding: {
				sm: '12px',
				lg: '4rem',
				xl: '5rem'
			}
		}
	},
	variants: {},
	plugins: []
};
