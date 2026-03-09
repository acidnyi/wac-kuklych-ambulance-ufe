import { newE2EPage } from '@stencil/core/testing';

describe('kuklych-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kuklych-ambulance-wl-app></kuklych-ambulance-wl-app>');

    const element = await page.find('kuklych-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
