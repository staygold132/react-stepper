import React from 'react'

import './StepQuestion.scss'
import AppInput from './AppInput'
import AppRadio from './AppRadio'

interface IProps {
  id: string
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
              props.options.map((option: IStepQuestionOption, index: number) => {
                return (
                  <div key={`${index}-${props.id}`} className="app-survey-step-question__input-radio-option">
                    <AppRadio
                      id={`${props.id}-${option.value}`}
                      name={props.question}
                      value={option.value}
                      onChange={props.onChange}
                    />
                    <label
                      htmlFor={`${props.id}-${option.value}`}
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
