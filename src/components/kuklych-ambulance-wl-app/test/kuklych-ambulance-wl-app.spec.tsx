import { newSpecPage } from '@stencil/core/testing';
import { KuklychAmbulanceWlApp } from '../kuklych-ambulance-wl-app';

describe('kuklych-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [KuklychAmbulanceWlApp],
      html: `<kuklych-ambulance-wl-app base-path="/"></kuklych-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("kuklych-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [KuklychAmbulanceWlApp],
      html: `<kuklych-ambulance-wl-app base-path="/ambulance-wl/"></kuklych-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("kuklych-ambulance-wl-list");
  });
});
