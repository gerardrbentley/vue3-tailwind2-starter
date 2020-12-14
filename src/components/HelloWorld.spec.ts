import {mount} from '@vue/test-utils';
import HelloWorld from './HelloWorld.vue';

const msg = 'new message';
test('Hello World renders with message', async () => {
  const wrapper = mount(HelloWorld, {
    props: {
      msg: msg,
    },
  });
  const message = wrapper.get('[data-test="message"]');
  expect(message.text()).toMatch(msg);
});

test('Hello World counter increments on click', async () => {
  const wrapper = mount(HelloWorld, {
    props: {
      msg: msg,
    },
  });

  const counter = wrapper.get('[data-test="counter"]');
  expect(counter.text()).toMatch('count is: 0');
  await counter.trigger('click');
  expect(counter.text()).toMatch('count is: 1');
});
