import {Box, BoxProps, Text} from '@ncarvalho-ui/react'
import {Meta, StoryObj} from '@storybook/react'

export default {
    title: 'Surfaces/Box',
    component: Box,

    args: {
        children: (
            <>
                <Text>Testando</Text>
            </>
        )
    }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
}

