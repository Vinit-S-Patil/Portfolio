import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

type CardProps = React.HTMLAttributes<HTMLCardElement> &
    VariantProps<typeof crdClass> & {
        label: React.ReactNode;
        loader?: boolean;
        isIcon?: boolean;
        type?: string
    };

const crdClass = cva('rounded', {

    variants: {

        size: {
            xs: "px-3 py-0 mr-1 mb-1  text-xs",
            sm: "px-3 py-2 mr-2 mb-2  text-sm",
            md: "px-3 py-2 mr-2 mb-2  text-base",
            lg: "px-10 py-2 mr-2 mb-2  text-lg",
        },

        color: {
            base: "bg-primary-500 hover:bg-primary-600 dark:bg-primary-500 dark:hover:bg-primary-600",
            disabled: "bg-gray-400 dark:bg-gray-500 cursor-not-allowed",
            red: "bg-red-500 hover:bg-red-600 dark:bg-red-500 dark:hover:bg-red-600 ",
            green: "bg-green-500 hover:bg-green-600 dark:bg-green-500 dark:hover:bg-green-600 ",
            yellow: "bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-500 dark:hover:bg-yellow-600 ",
            purple: "bg-purple-500 hover:bg-purple-600 dark:bg-purple-500 dark:hover:bg-purple-600 ",
        },

        variant: {
            default: "text-white ",
            outlined: "border",
        },

        rounded: { full: 'rounded-full' },

        isIcon: { true: "aspect-square" }
    },

    compoundVariants: [

        {
            color: "base",
            variant: "outlined",
            className: "bg-transparent text-blue-500 hover:text-white border-blue-500 hover:bg-blue-500 focus:outline-none  dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 "
        },

        {
            color: "red",
            variant: "outlined",
            className: "bg-transparent text-red-500 hover:text-white border-red-500 hover:bg-red-500 focus:outline-none  dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-500 "
        },

        {
            color: "yellow",
            variant: "outlined",
            className: "bg-transparent text-yellow-500 hover:text-white border-yellow-500 hover:bg-yellow-500 focus:outline-none  dark:border-yellow-500 dark:text-yellow-500 dark:hover:text-white dark:hover:bg-yellow-500 "
        },

        {

            color: "green",
            variant: "outlined",
            className: "bg-transparent text-green-500 hover:text-white border-green-500 hover:bg-green-500 focus:outline-none  dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-500 "
        },

        {
            color: "purple",
            variant: "outlined",
            className: "bg-transparent text-purple-500 hover:text-white border-purple-500 hover:bg-purple-500 focus:outline-none  dark:border-purple-500 dark:text-purple-500 dark:hover:text-white dark:hover:bg-purple-500 "
        },

        {
            isIcon: true,
            className: "px-1"
        },

    ],

    defaultVariants: {

        size: 'sm',

        color: "base",

        variant: "default"

    }

})

const Card = ({ label, size, color, variant, rounded, isIcon, ...props }: CardProps) => {
    return (
        <>
            <button  {...props}
                className={crdClass({ size, color, variant, rounded, isIcon })}
            >
                {/* {loader ? <i className="fas fa-spinner animate-spin mr-2"></i> : <></>} */}
                {/* {loader ? <Loader /> : label} */}
                {label}
            </button>
        </>
    )
}
export default Card
