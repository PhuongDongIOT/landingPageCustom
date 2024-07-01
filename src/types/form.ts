import type { ButtonFormEvent } from './button'

type IEventExcuteForm = (isExcute: ButtonFormEvent, dataForm?: any) => void

export type {
    IEventExcuteForm
}