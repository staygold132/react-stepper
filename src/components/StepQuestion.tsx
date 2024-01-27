import './StepQuestion.scss'
import AppInput from './AppInput'
import AppRadio from './AppRadio'

interface IProps {
  question: string
  inputType: string
  options?: IStepQuestionOption[]
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

interface IStepQuestionOption {
  option: string
  value: string
}

const StepQuestion = (props: IProps) => {
  return (
    <div className="app-survey-step-question">
      <div className="app-survey-step-question__text">{props.question}</div>
      <div className="app-survey-step-question__input">
        {props.inputType === 'radio' && (
          <div className="app-survey-step-question__input-radio">
            {props.options &&
              props.options.map((option, index) => {
                return (
                  <div key={index} className="app-survey-step-question__input-radio-option">
                    <AppRadio
                      id={`${index}-${option.value}`}
                      name={props.question}
                      value={option.value}
                      onChange={props.onChange}
                    />
                    <label
                      htmlFor={`${index}-${option.value}`}
                      className="app-survey-step-question__input-radio-option-label"
                    >
                      {option.option}
                    </label>
                  </div>
                )
              })}
          </div>
        )}
        {props.inputType === 'input' && (
          <div className="app-survey-step-question__input-text">
            <AppInput name={props.question} onChange={props.onChange} />
          </div>
        )}
      </div>
    </div>
  )
}

export default StepQuestion
