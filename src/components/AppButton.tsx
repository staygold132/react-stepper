import './AppButton.scss'

interface IProps {
  children?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const AppButton = (props: IProps) => {
  return (
    <button className="app-button" type={props?.type} disabled={props.disabled} onClick={props.onClick}>
      <div className="app-button-text">{props.children}</div>
    </button>
  )
}

export default AppButton
