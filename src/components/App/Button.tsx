import * as React from 'react'

interface Props {
  text: string
}

export class Button extends React.Component<Props> {
  render () {
    const {
      text,
    } = this.props

      return <button>This is a button {text}</button>
  }
}

// export const Button = ({ text }: Props): JSX.Element => {
//   return (
//     <button>
//       {text}
//     </button>
//   )
// }