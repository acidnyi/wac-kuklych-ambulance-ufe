import { newE2EPage } from '@stencil/core/testing';

describe('kuklych-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kuklych-ambulance-wl-list></kuklych-ambulance-wl-list>');

    const element = await page.find('kuklych-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
