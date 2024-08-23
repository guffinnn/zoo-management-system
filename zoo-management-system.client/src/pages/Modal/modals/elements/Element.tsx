import { CheckBox } from '@pages/Modal/modals/elements/CheckBox/CheckBox.tsx';
import { DateInput } from '@pages/Modal/modals/elements/DateInput/DateInput.tsx';
import { Input } from '@pages/Modal/modals/elements/Input/Input.tsx';
import { Label } from '@pages/Modal/modals/elements/Label/Label.tsx';
import { Select } from '@pages/Modal/modals/elements/Select/Select.tsx';
import { TextArea } from '@pages/Modal/modals/elements/TextArea/TextArea.tsx';
import {
  ElementType,
  ElementVariant,
} from '@pages/Modal/modals/elements/types.ts';
import { JSX } from 'react';

export type ElementProps = {
  element: ElementVariant;
};

export function Element({ element }: ElementProps): JSX.Element {
  switch (element.type) {
    case ElementType.label:
      return <Label {...element}>{element.children}</Label>;
    case ElementType.input:
      return <Input {...element} />;
    case ElementType.dateInput:
      return <DateInput {...element} />;
    case ElementType.textArea:
      return <TextArea {...element} />;
    case ElementType.select:
      return <Select {...element} />;
    case ElementType.checkbox:
      return <CheckBox {...element}>{element.children}</CheckBox>;
  }
}
