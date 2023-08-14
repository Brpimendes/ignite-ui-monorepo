import type {StoryObj, Meta} from "@storybook/react"
import {Text, TextProps} from "@ignite-ui/react"

export default {
  title: 'Tipography/Text',
  component: Text,

  args: {
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quod nemo inventore, perferendis, quae, delectus sint iste nisi ex quam dolorem. Alias ratione exercitationem id accusantium, corrupti cum asperiores esse?",
    size: 'md',
  },

  argTypes: {
    size:{
      options: ['xxs','xs','sm','md','lg','xl','2xl','4xl','5xl','6xl','7xl','8xl','9xl'],
      control: {
        type: 'inline-radio'
      }
    },
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> ={
  args: {
    children: 'Strong Text',
    as: 'strong'
  }
}