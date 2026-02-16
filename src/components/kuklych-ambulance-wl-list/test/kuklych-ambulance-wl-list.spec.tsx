import { newSpecPage } from '@stencil/core/testing';
import { KuklychAmbulanceWlList } from '../kuklych-ambulance-wl-list';

describe('kuklych-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KuklychAmbulanceWlList],
      html: `<kuklych-ambulance-wl-list></kuklych-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as KuklychAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
