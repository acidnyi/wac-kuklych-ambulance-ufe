import { newE2EPage } from '@stencil/core/testing';

describe('kuklych-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kuklych-ambulance-wl-editor></kuklych-ambulance-wl-editor>');

    const element = await page.find('kuklych-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
