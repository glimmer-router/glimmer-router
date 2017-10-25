import { setupRenderingTest } from '@glimmer/test-helpers';
import hbs from '@glimmer/inline-precompile';

const { module, test } = QUnit;

module('Component: Route', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<Route />`);
    assert.equal(this.containerElement.textContent, '');
  });

  test('does not render when it does not match', async function(assert) {
    await this.render(hbs`<Route @path="/no-match" />`);
    assert.equal(this.containerElement.textContent, '');
  });

  test('renders content if route matches', async function(assert) {
    const content = 'Test';
    this.location = {
      pathname: '/test';
    };
    await this.render(hbs`<Route @path="/test" @location={{location}}>
                            <h1>{{content}}</h1>
                          </Route>`);
    assert.equal(this.containerElement.querySelector('h1'), content);
  });
});
