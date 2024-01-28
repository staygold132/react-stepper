export const stepperConfig = [
  {
    stepLabel: 'Step 1',
    completed: false,
  },
  {
    stepLabel: 'Step 2',
    completed: false,
  },
  {
    stepLabel: 'Step 3',
    completed: false,
  },
  {
    stepLabel: 'Step 4',
    completed: false,
  },
  {
    stepLabel: 'Step 5',
    completed: false,
  },
]

export const stepperStyles = {
  InactiveLineSeparator: () => ({
    backgroundColor: '#a61a57',
  }),
  InActiveNode: () => ({
    background: '#000',
  }),
  ActiveNode: () => ({
    backgroundColor: '#a61a57',
  }),
  LabelTitle: () => ({
    display: 'none',
  }),
}
