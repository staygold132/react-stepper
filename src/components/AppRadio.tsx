import './AppRadio.scss'

interface IProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  value: string
  id: string
}

const AppRadio = (props: IProps) => {
  return (
    <div className="app-radio">
      <input
        id={props.id}
        type="radio"
        name={props.name}
        value={props.value}
        className="app-radio__field"
        onChange={props.onChange}
      />
    </div>
  )
}

export default AppRadio
