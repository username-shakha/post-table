import { ReactNode } from 'react'
import './style.css'

interface ISearchInputProps extends React.HTMLAttributes<HTMLInputElement> {
  startIcon?: ReactNode
  endIcon?: ReactNode
  disabled?: boolean
  placeholder: string
}
export const SearchInput = ({
  endIcon,
  startIcon,
  style,
  disabled,
  placeholder,
  ...props
}: ISearchInputProps) => {
  return (
    <div className="input-wrapper" style={style}>
      {startIcon && <div className="start icon">{startIcon}</div>}
      <input
        placeholder={placeholder}
        disabled={disabled}
        type="text"
        {...props}
      />
      {endIcon && <div className="end icon">{endIcon}</div>}
    </div>
  )
}
