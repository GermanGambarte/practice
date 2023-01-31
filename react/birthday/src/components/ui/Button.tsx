import './button.css'
type Props = {
  label: string
  action?: () => void
  size?: string
  type?: 'submit' | 'button'
}

export const Button = ({ size, label, action, ...props }: Props) => {
  return (
    <button className="btn" {...props} onClick={action}>
      {label}
    </button>
  )
}
