import { Dispatch } from '@reduxjs/toolkit';
import { finishClosing } from '@store/menuSlice.ts';

interface AnimationProps {
  isClosing: boolean;
  dispatch: Dispatch;
}

export function setCloseAnimation({ isClosing, dispatch }: AnimationProps) {
  if (isClosing) {
    const timer = setTimeout(() => {
      dispatch(finishClosing());
    }, 500);
    return () => clearTimeout(timer);
  }
}
