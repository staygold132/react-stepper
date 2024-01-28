import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import Stepper from '@keyvaluesystems/react-stepper'

import ContainerComponent from '../components/ContainerComponent'
import ContainerHeader from '../components/ContainerHeader'

import './Survey.scss'

import defaultQuestion from '../data/defaultQuestion.json'
import questionsData from '../data/questions.json'
import StepComponent from '../components/StepComponent'

import { stepperConfig, stepperStyles } from '../configurations/StepperConfig'

const Survey = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { step, question } = useParams()

  const presetQuestion = questionsData.find(({ id }) => id === question)
  const [currentQuestion, setCurrentQuestion] = useState(presetQuestion || defaultQuestion) // added defaultQuestion to prevent error when question is not found
  const [currentStep, setCurrentStep] = useState(Number(step) || 1)

  useEffect(() => {
    const selectedQuestion = questionsData.find(({ id }) => id === question)

    if (selectedQuestion) {
      setCurrentQuestion(selectedQuestion)
      setCurrentStep(Number(step))
    }
  }, [location])

  const handleNextStep = (nextQuestion: string) => {
    navigate(`/survey/${currentStep + 1}/question/${nextQuestion}`)
  }

  const handlePreviousStep = () => {
    window.history.back()
  }

  const handleSubmit = () => {
    navigate('/survey-complete')
  }

  return (
    <div className="app-survey-component">
      <ContainerComponent>
        <ContainerHeader title="Customer Survey" />
        <div className="app-survey-component__ribbon"></div>
        <Stepper
          currentStepIndex={currentStep - 1}
          orientation="horizontal"
          labelPosition="top"
          steps={stepperConfig}
          styles={stepperStyles}
        ></Stepper>
        <div className="app-survey-component__content">
          <StepComponent
            currentStep={currentStep}
            question={currentQuestion}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
            handleSubmit={handleSubmit}
          />
        </div>
      </ContainerComponent>
    </div>
  )
}

export default Survey
