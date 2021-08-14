import {
  InnerHeaderContainer,
  Header as HeaderClass,
} from './index.module.less';

export const Header = () => (
  <header class={HeaderClass}>
    <div class={`CenteredContainer ${InnerHeaderContainer}`}>
      <span>TODO App</span>
      <select>
        <option value=''>Choose state manager</option>
        <option value='xstate'>XState</option>
      </select>
    </div>
  </header>
);
