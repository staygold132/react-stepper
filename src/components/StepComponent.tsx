import StepQuestion from './StepQuestion'

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
}

const StepComponent = (props: IProps) => {
  return (
    <div className="app-survey-step">
      {props.stepData.questions.map((question, index) => {
        return (
          <StepQuestion
            key={index}
            question={question.question}
            inputType={question.inputType}
            options={question.options}
          />
        )
      })}
    </div>
  )
}

export default StepComponent
