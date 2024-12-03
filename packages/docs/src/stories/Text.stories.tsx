
import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ncarvalho-ui/react'

export default {
    title: 'Typography/Text',
    component: Text,

    args: {
        size: 'md',
        children: 'Example Text',
    },

    argTypes: {
        size: {
            options: [
                'xs',
                'sm',
                'md',
                'lg',
                'xl',
                'xxs',
                '2xl',
                '4xl',
                '5xl',
                '6xl',
                '7xl',
                '8xl',
                '9xl',
            ],
            control: {
                type: 'inline-radio'
            },
        },
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'Strong'
    }
}