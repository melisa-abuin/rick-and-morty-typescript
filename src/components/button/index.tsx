import { PropsWithChildren } from 'react'
import { StyledButton } from './styles'

type Props = PropsWithChildren<{ onClick: () => void }>

export const Button = ({ children, onClick }: Props) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
)
