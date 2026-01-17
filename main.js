import { addResponseBtn } from './modules/interface/addResponseBtn';
import { addSponsorBtn } from './modules/interface/addSponsorBtn';
import { addSettingsPanel } from './modules/interface/addSettingsPanel';
import { autoRaiseResume } from './utils/autoRaiseResume';

(async function main() {
  await addResponseBtn();
  await addSponsorBtn();

  addSettingsPanel();
  await autoRaiseResume();
})();
