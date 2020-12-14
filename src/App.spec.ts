import { mount } from '@vue/test-utils';
import App from './App.vue';
import { mocked } from 'ts-jest/utils'
import useTailwindDarkMode from './tailwind-dark-mode'

jest.mock('./tailwind-dark-mode')
const toggleDarkMode = jest.fn(() => { })
const mockedUseTailwindDarkMode = mocked(useTailwindDarkMode).mockImplementation(
	() => { return { toggleDarkMode } }
)

// Mock Window MatchMedia because tests do not run in browser environment
Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: jest.fn().mockImplementation(query => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(), // Deprecated
		removeListener: jest.fn(), // Deprecated
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn(),
	})),
});

test('Renders App', async () => {
	const wrapper = mount(App);

	expect(wrapper.html()).toContain('Toggle Dark Mode');
});


test('Toggles Light/Dark Theme on click', async () => {
	const wrapper = mount(App);

	const button = wrapper.get('[data-test="dark-mode"]');

	expect(mockedUseTailwindDarkMode).toHaveBeenCalled()

	await button.trigger('click')
	expect(toggleDarkMode).toBeCalledTimes(1)

	await button.trigger('click')
	expect(toggleDarkMode).toBeCalledTimes(2)
});
