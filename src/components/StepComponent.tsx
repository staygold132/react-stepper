import React, { useState } from 'react'
import classNames from 'classnames'

import AppButton from './AppButton'

import StepQuestion from './StepQuestion'

import './StepComponent.scss'

interface IStep {
  id: string
  questions: IStepQuestion[]
}

interface IStepQuestion {
  inputType: string
  question: string
  options?: IStepQuestionOption[]
}

interface IStepQuestionOption {
  option: string
  value: string
}

interface IProps {
  currentStep: number
  stepData: IStep
  handleNextStep: () => void
  handlePreviousStep: () => void
  handleSubmit: () => void
}

const StepComponent = (props: IProps) => {
  const footerClasses = classNames('app-survey-component__footer', {
    'app-survey-component__footer--alight-right': props.currentStep === 1,
    'app-survey-component__footer--alight-center': props.currentStep === 5,
  })

  const [formData, setFormData] = useState({})

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.handleNextStep()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleFinalSubmit = () => {
    props.handleSubmit()

    console.table(formData)
  }

  return (
    <div className="app-survey-step">
      <form onSubmit={handleFormSubmit}>
        {props.stepData.questions.map((question, index) => {
          return (
            <StepQuestion
              key={index}
              question={question.question}
              inputType={question.inputType}
              options={question.options}
              onChange={handleChange}
            />
          )
        })}
        <div className="app-survey-step__ribbon"></div>
        <div className={footerClasses}>
          {props.currentStep > 1 && props.currentStep < 5 && (
            <AppButton type="button" onClick={props.handlePreviousStep}>
              Previous Step
            </AppButton>
          )}
          {props.currentStep < 5 && <AppButton type="submit">Next Step</AppButton>}
          {props.currentStep === 5 && (
            <AppButton type="button" onClick={handleFinalSubmit}>
              Submit
            </AppButton>
          )}
        </div>
      </form>
    </div>
  )
}

export default StepComponent
