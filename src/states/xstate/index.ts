import { Brand } from '@fluss/core';
import { createMachine } from 'xstate';

export type TodoMachineId = Brand<string, 'TodoMachineId'>;

export interface TodoContext {
  readonly items: ReadonlyArray<object>;
}

const todoMachineId: TodoMachineId = 'todoMachineId' as TodoMachineId;

export const todoMachine = createMachine<TodoContext>(
  {
    id: todoMachineId,
    context: {
      items: [],
    },
    states: {},
  },
  {},
);
