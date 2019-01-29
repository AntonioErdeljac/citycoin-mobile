import * as Yup from 'yup';

const initialValues = { email: '', password: '' };

const validations = Yup.object().shape({
  cardNumber: Yup.string()
    .required('Required'),
  cardCCV: Yup.number()
    .required('Required'),
});

export default {
  initialValues,
  validations,
};
