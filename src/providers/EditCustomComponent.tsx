'use client'

import { FC, useState, useRef } from 'react'
import { createPortal } from 'react-dom';

import { AnimatePresence } from "framer-motion"
import { FormCardComponent } from '@/components/micures'
import { ModalDialogsComponent } from '@/components/micures'

import type { IEventExcuteForm } from '@/types'

export const EditCustomComponent: FC = () => {

    const divUseRef: any = useRef()

    const [isVisible, setIsVisible] = useState<boolean>(false)
    const handleSetIsVisible = () => {
        setIsVisible(true)
    }

    const eventExcuteForm: IEventExcuteForm = (isExcute: boolean, dataForm: any) => {
        setIsVisible(false)
    }

    return (
        <div
            ref={divUseRef}>
            <div className="hidden absolute top-0 right-2 mt-6 group-hover:flex flex-col gap-2 items-center justify-end gap-x-6 transition ease-in-out duration-300">
                <button
                    type="submit"
                    onClick={() => handleSetIsVisible()}
                    className="group relative w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    <span className="group-hover:flex hidden absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                    </span>
                    Edit
                </button>
            </div>
            <AnimatePresence>
                    {
                        isVisible &&
                        <ModalDialogsComponent open={isVisible} setOpen={() => eventExcuteForm(false)}>
                            <div className='relative px-20 py-6 bg-teal-400 rounded-xl'>
                                <FormCardComponent eventExcuteForm={eventExcuteForm} />
                            </div>
                        </ModalDialogsComponent>
                    }
                </AnimatePresence>
        </div>
    )
}