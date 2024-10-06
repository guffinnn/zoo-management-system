import { DEFAULT_DELAY } from '@constants/values.ts';
import { useEffect, useState } from 'react';

interface HookProps {
  showInitial: boolean;
  delay: number;
  onHide?: () => void;
}

function useAnimationWithDelay({
  showInitial = false,
  delay = DEFAULT_DELAY,
  onHide,
}: HookProps) {
  const [show, setShow] = useState<boolean>(showInitial);

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined;

    if (show) {
      timeoutId = setTimeout(() => {
        setShow(false);
        if (onHide) {
          onHide();
        }
      }, delay);
    }

    return () => clearTimeout(timeoutId);
  }, [show, delay]);

  return [show, setShow];
}

export default useAnimationWithDelay;
