import { ButtonContainer, ButtonVariant } from './Button.styles'

interface ButtonProps {
  variant?: ButtonVariant
  title: string
}

export function Button({ variant = 'primary', title }: ButtonProps) {
  return <ButtonContainer variant={variant}>{title}</ButtonContainer>
}
