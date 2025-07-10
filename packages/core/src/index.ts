import Form, { FormProps, FormState, IChangeEvent } from './components/Form';
import withTheme, { ThemeProps } from './withTheme';
import getDefaultRegistry from './getDefaultRegistry';
import fields from './components/fields';

export type { FormProps, FormState, IChangeEvent, ThemeProps };

export { fields, withTheme, getDefaultRegistry };
export default Form;
