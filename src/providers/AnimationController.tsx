'use client'
import { motion } from 'framer-motion'
import { FC, ReactNode } from 'react'

interface AnimationControllerProps {
    children: ReactNode
}

export const AnimationController: FC<AnimationControllerProps> = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            {children}
        </motion.div>
    );
}
