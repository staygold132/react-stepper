import './AppInput.scss'

interface IProps {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  type: string
}

const AppInput = (props: IProps) => {
  return (
    <div className="app-input">
      <input type={props.type} className="app-input__field" value={props.value} onChange={props.onChange} />
    </div>
  )
}

export default AppInput
