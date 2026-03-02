import { newSpecPage } from '@stencil/core/testing';
import { KuklychAmbulanceWlEditor } from '../kuklych-ambulance-wl-editor';

describe('kuklych-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KuklychAmbulanceWlEditor],
      html: `<kuklych-ambulance-wl-editor></kuklych-ambulance-wl-editor>`,
    });
    expect(page.root).toEqualHtml(`
      <kuklych-ambulance-wl-editor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kuklych-ambulance-wl-editor>
    `);
  });
});
