import ContainerComponent from '../components/ContainerComponent'
import ContainerHeader from '../components/ContainerHeader'

import './SurveyComplete.scss'

const SurveyComplete = () => {
  return (
    <div className="app-survey-complete">
      <ContainerComponent>
        <ContainerHeader title="Survey Completed" />
        <div className="app-survey-complete__ribbon"></div>
        <div className="app-survey-complete__content">
          <div className="app-survey-complete__content-item app-survey-complete__content-item--bold">
            Dear customer,
          </div>
          <div className="app-survey-complete__content-item">
            Your insights play a crucial role in helping us understand our customers better and in enhancing the quality
            of our products and services. We are committed to providing an exceptional cosmetic experience, and your
            feedback provides us with the guidance we need to make continuous improvements.
          </div>
          <div className="app-survey-complete__content-item ">
            Once again, thank you for being an essential part of our community and for contributing to the success of
            our cosmetics line. We look forward to serving you even better in the future.
          </div>
          <div className="app-survey-complete__content-item app-survey-complete__content-item--bold">
            Wishing you a wonderful day ahead!
          </div>
        </div>
      </ContainerComponent>
    </div>
  )
}

export default SurveyComplete
