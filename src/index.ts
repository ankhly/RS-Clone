import './style.scss';

import { listeners } from './Max/logic/listeners';
import { globalState } from './Max/services/store';
import { ViewPage } from './Max/types';
import { showPage1, showPage2 } from './Max/logic/showPages';

if (globalState.view === ViewPage.create) {
  await showPage1();
}
if (globalState.view === ViewPage.examples) {
  await showPage2();
}

listeners();
