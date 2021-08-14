import {
  Input as InputClass,
  InputButton,
  InputContainer,
} from './index.module.less';

export const Input = () => (
  <div class={`CenteredContainer ${InputContainer}`}>
    <input type='text' class={InputClass} />
    <button class={InputButton}>Add</button>
  </div>
);
