import { Image, StyledTooltip } from '@components/ImageOverlay/styled.ts';
import { JSX, ReactNode } from 'react';
import { OverlayTrigger } from 'react-bootstrap';
import { OverlayInjectedProps } from 'react-bootstrap/Overlay';

interface OverlayProps {
  value: string;
  children: JSX.Element;
}

type Tooltip = (props: OverlayInjectedProps) => ReactNode;

function ImageOverlay({ value, children }: OverlayProps): JSX.Element {
  const renderTooltip: Tooltip = (props) => (
    <StyledTooltip id="button-tooltip" {...props}>
      <Image src={value} alt="Фото" />
    </StyledTooltip>
  );

  return (
    <OverlayTrigger
      placement="left"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip as Tooltip}
    >
      {children}
    </OverlayTrigger>
  );
}

export default ImageOverlay;
