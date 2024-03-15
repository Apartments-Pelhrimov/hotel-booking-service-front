import {
  ButtonColorsMap,
  ButtonState,
  ButtonVariant,
} from '@/components/common/ui/button/interfaces';

const buttonColors: ButtonColorsMap = {
  [ButtonVariant.FILLED]: {
    backgroundColor: [
      'green.500',
      'green.300',
      'green.400',
      'green.400',
      'grey.300',
    ],
    borderColor: [
      'green.500',
      'green.300',
      'green.400',
      'green.400',
      'grey.300',
    ],
    textColor: [
      'white.main',
      'white.main',
      'white.main',
      'white.main',
      'white.main',
    ],
    textColorDisabled: 'white.main',
  },
  [ButtonVariant.OUTLINE]: {
    backgroundColor: [
      'white.main',
      'rgba(116, 160, 121, 0.2)',
      'rgba(116, 160, 121, 0.4)',
      'rgba(116, 160, 121, 0.3)',
      'white.main',
    ],
    borderColor: [
      'green.500',
      'green.300',
      'green.400',
      'green.400',
      'grey.300',
    ],
    textColor: ['green.500', 'green.300', 'green.300', 'green.400', 'grey.300'],
    textColorDisabled: 'grey.300',
  },
};

const stateMap: Record<ButtonState, number> = {
  [ButtonState.DEFAULT]: 0,
  [ButtonState.HOVER]: 1,
  [ButtonState.ACTIVE]: 2,
  [ButtonState.FOCUSED]: 3,
  [ButtonState.DISABLED]: 4,
};

const applyColors = (variant: ButtonVariant, state: ButtonState) => {
  const stateIndex = stateMap[state];
  return {
    backgroundColor: buttonColors[variant].backgroundColor[stateIndex],
    borderColor: buttonColors[variant].borderColor[stateIndex],
    textColor: buttonColors[variant].textColor[stateIndex],
    textColorDisabled: buttonColors[variant].textColorDisabled,
  };
};

export default applyColors;
