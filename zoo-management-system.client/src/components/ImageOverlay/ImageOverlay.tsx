import { Image, StyledTooltip } from '@components/ImageOverlay/styled.ts';
import { JSX } from 'react';
import { OverlayTrigger } from 'react-bootstrap';

interface OverlayProps {
  value: string;
  children: JSX.Element;
}

function ImageOverlay({ value, children }: OverlayProps): JSX.Element {
  const renderTooltip = (props) => (
    <StyledTooltip id="button-tooltip" {...props}>
      <Image src={value} alt="Фото" />
    </StyledTooltip>
  );

  return (
    <OverlayTrigger
      placement="left"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      {children}
    </OverlayTrigger>
  );
}

export default ImageOverlay;
