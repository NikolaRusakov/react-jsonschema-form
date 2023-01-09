import ArrayFieldItemTemplate from "../ArrayFieldItemTemplate";
import AddButton from "../AddButton";
import ArrayFieldTemplate from "../ArrayFieldTemplate";
import BaseInputTemplate from "../BaseInputTemplate/BaseInputTemplate";
import DescriptionField from "../DescriptionField";
import ErrorList from "../ErrorList";
import { MoveDownButton, MoveUpButton, RemoveButton } from "../IconButton";
import FieldErrorTemplate from "../FieldErrorTemplate";
import FieldHelpTemplate from "../FieldHelpTemplate";
import FieldTemplate from "../FieldTemplate";
import ObjectFieldTemplate from "../ObjectFieldTemplate";
import SubmitButton from "../SubmitButton";
import TitleField from "../TitleField";
import WrapIfAdditionalTemplate from "../WrapIfAdditionalTemplate";
import {
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  TemplatesType,
} from "@rjsf/utils";

export function generateTemplates<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>(): Partial<TemplatesType<T, S, F>> {
  return {
    ArrayFieldItemTemplate,
    ArrayFieldTemplate,
    BaseInputTemplate,
    ButtonTemplates: {
      AddButton,
      MoveDownButton,
      MoveUpButton,
      RemoveButton,
      SubmitButton,
    },
    DescriptionFieldTemplate: DescriptionField,
    ErrorListTemplate: ErrorList,
    FieldErrorTemplate,
    FieldHelpTemplate,
    FieldTemplate,
    ObjectFieldTemplate,
    TitleFieldTemplate: TitleField,
    WrapIfAdditionalTemplate,
  };
}

export default generateTemplates();
