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
    },
    addTask: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
      const taskExist = state.itens.find(
        (task) =>
          task.title.toLowerCase() === action.payload.title.toLowerCase()
      )

      if (taskExist) {
        alert('Já existe uma tarefa com esse nome')
      } else {
        const lastTask = state.itens[state.itens.length - 1]

        const newTask = {
          ...action.payload,
          id: lastTask ? lastTask.id + 1 : 1
        }

        state.itens.push(newTask)
      }
    },
    changeStatus: (
      state,
      action: PayloadAction<{ id: number; finalized: boolean }>
    ) => {
      const indexTask = state.itens.findIndex((t) => t.id === action.payload.id)

      if (indexTask >= 0) {
        state.itens[indexTask].status = action.payload.finalized
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remove, edit, addTask, changeStatus } = tasksSlice.actions

export default tasksSlice.reducer
