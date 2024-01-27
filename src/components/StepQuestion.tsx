interface IProps {
  question: string
  inputType: string
  options?: IStepQuestionOption[]
}

interface IStepQuestionOption {
  option: string
  value: string
}

const StepQuestion = (props: IProps) => {
  return (
    <div className="app-survey-step-question">
      <div className="app-survey-step-question__question">{props.question}</div>
      <div className="app-survey-step-question__input">
        {props.inputType === 'radio' && (
          <div className="app-survey-step-question__input-radio">
            {props.options &&
              props.options.map((option, index) => {
                return (
                  <div key={index} className="app-survey-step-question__input-radio-option">
                    <input type="radio" name={props.question} value={option.value} />
                    <label>{option.option}</label>
                  </div>
                )
              })}
          </div>
        )}
        {props.inputType === 'input' && (
          <div className="app-survey-step-question__input-text">
            <input type="text" />
          </div>
        )}
      </div>
    </div>
  )
}

export default StepQuestion
