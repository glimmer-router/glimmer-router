import { setupRenderingTest } from '@glimmer/test-helpers';
import hbs from '@glimmer/inline-precompile';

const { module, test } = QUnit;

module('Component: g-route', function(hooks) {
  hooks.beforeEach(function() {
    console.log('I should run before each');
  });

  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<g-route />`);
    assert.ok(this.containerElement.querySelector('div'));
  });

  test('does not render when it does not match', async function(assert) {
    const text = 'No match';
    await this.render(hbs`<g-route @path="/no-match">{{text}}</g-route>`);
    assert.notEqual(this.containerElement.textContent, text);
  });

  test('renders content if', async function(assert) {
    const content = 'Test';
    await this.render(hbs`<g-route @path="/test">
                            <h1>{{content}}</h1>
                          </g-route>`);
    assert.equal(this.containerElement.querySelector('h1'), content);
  });
});
