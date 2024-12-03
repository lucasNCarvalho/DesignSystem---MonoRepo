
import {Meta, StoryObj} from '@storybook/react'
import {Avatar, AvatarProps} from '@ncarvalho-ui/react'

export default {
    title: 'Data display/Avatar',
    component: Avatar,

    args: {
        src: 'https://avatars.githubusercontent.com/u/124369309?v=4&size=64',
        alt: 'Lucas Carvalho'
    }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
}

export const WithFallBack: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
    }
}