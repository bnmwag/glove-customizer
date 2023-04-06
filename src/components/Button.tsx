import React from 'react';
// @ts-ignore
import FeatherIcon from 'feather-icons-react';
import { useSnapshot } from 'valtio';

import store from '../store';
import { getContrastingColor } from '../config/helpers'
import { color } from 'framer-motion';

export interface IButtonProps {
    variant?: 'primary' | 'secondary';
    label: string;
    handleClick: any;
    disabled?: boolean;
    customStyles?: string;
    icon?: 'arrow-right' | 'arrow-left' | 'plus';
}

const Button: React.FC<IButtonProps> = ({
    variant = 'primary',
    label,
    handleClick,
    disabled,
    customStyles,
    icon = 'arrow-right'
}) => {

    const snap = useSnapshot(store)

    const generateStyles = (variant: string) => {
        if (variant === 'primary') {
            return {
                backgroundColor: snap.color,
                color: getContrastingColor(snap.color)
            }
        } else if (variant === 'secondary') {
            return {
                backgroundColor: '#282828',
                color: '#fff'
            }
        }
    }

    const buttonStyles = `
        rounded-full inline-block px-8 py-4 text-md cursor-pointer transition ease-out duration-300 text-md 

        hover:opacity-75

        ${customStyles}
    `

    return <div className={buttonStyles} onClick={handleClick} style={generateStyles(variant)}>
        <div className='flex gap-2 items-center'>
            <FeatherIcon icon={icon} strokeWidth={1.5} />
            {label}
        </div>
    </div>
}

export default Button;