export type ElementBase<Type, ExtraProps> = {
  type: Type;
  id: string;
} & ExtraProps;

export enum ElementType {
  label = 'Label',
  input = 'Input',
  dateInput = 'DateInput',
  textArea = 'TextArea',
  select = 'Select',
}

export type ElementLabel = ElementBase<
  ElementType.label,
  {
    htmlFor: string;
    children: string;
  }
>;

export type ElementInput = ElementBase<
  ElementType.input,
  {
    value?: string;
    placeholder: string;
  }
>;

export type ElementDateInput = ElementBase<
  ElementType.dateInput,
  {
    label: string;
    placeholder: string;
  }
>;

export type ElementTextArea = ElementBase<
  ElementType.textArea,
  {
    placeholder: string;
  }
>;

export type ElementSelect = ElementBase<
  ElementType.select,
  {
    label: string;
    options: { value: string; text: string }[];
  }
>;

export type ElementVariant =
  | ElementLabel
  | ElementInput
  | ElementDateInput
  | ElementTextArea
  | ElementSelect;
