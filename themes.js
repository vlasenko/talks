import aspect from '@mdx-deck/themes/aspect';
import future from '@mdx-deck/themes/future';
import syntaxHighlighterPrism from '@mdx-deck/themes/syntax-highlighter-prism';

const theme = {
	fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64
  ].map(x => x * 0.6),
	lineHeights: {
		body: 1.5,
		heading: 1.125,
	},
	styles: {
		code: {
			fontSize: '0.8em'
		}
	}
};

export default [aspect, future, syntaxHighlighterPrism, theme];
