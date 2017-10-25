import { setupRenderingTest } from '@glimmer/test-helpers';
import hbs from '@glimmer/inline-precompile';

const { module, test } = QUnit;

module('Component: Link', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<Link />`);
    assert.ok(this.containerElement.querySelector('a'));
  });

  test('it renders the content', async function(assert) {
    const text = 'Test';
    await this.render(hbs`<Link @to="/test">Test</Link>`);
    assert.ok(this.containerElement.querySelector('a').href.includes('/test'));
    assert.equal(this.containerElement.textContent.trim(), text);
  });
});
