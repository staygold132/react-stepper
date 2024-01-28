import React from 'react'

import './AppInput.scss'

interface IProps {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
}

const AppInput = (props: IProps) => {
  return (
    <div className="app-input">
      <input name={props.name} className="app-input__field" value={props.value} onChange={props.onChange} />
    </div>
  )
}

export default AppInput
