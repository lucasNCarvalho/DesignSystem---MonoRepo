
import {Meta, StoryObj} from '@storybook/react'
import {Box, Text, Checkbox, CheckboxProps} from '@ncarvalho-ui/react'

export default {
    title: 'form/Checkbox',
    component: Checkbox,

    args: {
       
    },

    decorators: [
        (Story) => {
            return (
                <Box as="label" css={{display: 'flex', flexDirection: 'column', gap: '$2'}}>
                    <Text size="sm">Accept terms of use</Text>
                    {Story()}
                </Box>
            )
        }
    ]

} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {

}
