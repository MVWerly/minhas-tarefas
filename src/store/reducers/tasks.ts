import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

type TaskState = {
  itens: Task[]
}

const initialState: TaskState = {
  itens: [
    {
      title: 'Estudar Javascript',
      priority: enums.Priority.IMPORTANTE,
      status: enums.Status.PENDENTE,
      description: 'fazer algo',
      id: 1
    },
    {
      title: 'Estudar HTML',
      priority: enums.Priority.NORMAL,
      status: enums.Status.CONCLUIDA,
      description: 'Foco',
      id: 2
    },
    {
      title: 'Estudar Java',
      priority: enums.Priority.URGENTE,
      status: enums.Status.PENDENTE,
      description: 'Modulo 3',
      id: 3
    }
  ]
}

const tasksSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((task) => task.id !== action.payload)
      ]
    },
    edit: (state, action: PayloadAction<Task>) => {
      const indexTask = state.itens.findIndex((t) => t.id === action.payload.id)

      if (indexTask >= 0) {
        state.itens[indexTask] = action.payload
      }
    }
  }
})

export const { remove, edit } = tasksSlice.actions

export default tasksSlice.reducer
