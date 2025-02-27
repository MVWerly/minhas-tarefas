import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

const tasksSlice = createSlice({
  name: 'task',
  initialState: [
    new Task(
      'Estudar Javascript',
      enums.Priority.IMPORTANTE,
      enums.Status.PENDENTE,
      '',
      1
    ),
    new Task(
      'Estudar TypeScript',
      enums.Priority.URGENTE,
      enums.Status.CONCLUIDA,
      'Rever aula do módulo 2',
      2
    ),
    new Task(
      'Ir a academia',
      enums.Priority.NORMAL,
      enums.Status.CONCLUIDA,
      'Praticar com foco',
      3
    )
  ],
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state = state.filter((task) => task.id !== action.payload)
    }
  }
})

export const { remove } = tasksSlice.actions

export default tasksSlice.reducer
