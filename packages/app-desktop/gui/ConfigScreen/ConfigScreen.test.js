'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const searchUtils_1 = require('./searchUtils');
describe('ConfigScreen search helpers', () => {
	test('matches query by case-insensitive substring', () => {
		const matches = (0, searchUtils_1.matchesSearchQueryValue)('enc', ['End-to-end encryption', 'Encryption: Enabled']);
		expect(matches).toBe(true);
	});
	test('matches exact section title', () => {
		const matches = (0, searchUtils_1.matchesSearchQueryValue)('sync', 'unrelated content', 'Sync');
		expect(matches).toBe(true);
	});
	test('does not match empty or whitespace-only query', () => {
		expect((0, searchUtils_1.matchesSearchQueryValue)('', 'End-to-end encryption', 'Encryption')).toBe(false);
		expect((0, searchUtils_1.matchesSearchQueryValue)('   ', 'End-to-end encryption', 'Encryption')).toBe(false);
	});
	test('returns encryption keywords for disabled state', () => {
		const keywords = (0, searchUtils_1.encryptionSearchKeywords)(false, (input) => input);
		expect(keywords).toEqual(['End-to-end encryption', 'Enable encryption']);
	});
	test('returns encryption keywords for enabled state', () => {
		const keywords = (0, searchUtils_1.encryptionSearchKeywords)(true, (input) => input);
		expect(keywords).toEqual(['End-to-end encryption', 'Disable encryption']);
	});
});
// # sourceMappingURL=ConfigScreen.test.js.map
