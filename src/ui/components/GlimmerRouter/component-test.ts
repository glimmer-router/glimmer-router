import { setupRenderingTest } from '@glimmer/test-helpers';
import hbs from '@glimmer/inline-precompile';

const { module, test } = QUnit;

module('Component: GlimmerRouter', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<GlimmerRouter />`);
    const content = this.containerElement.textContent;
    assert.ok(content.includes('Home'));
    assert.ok(this.containerElement.querySelector('.container'));
  });
});
