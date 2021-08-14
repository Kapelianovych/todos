import { maybe } from '@fluss/core';
import { render } from 'solid-js/web';

import { App } from './scenes/App';

import './styles/global.less';

maybe(document.querySelector('#app')).map((element) => render(App, element));
