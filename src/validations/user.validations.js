import {
  REGEX_EMAIL,
  REGEX_OTP,
  REGEX_MUST_HAVE_LETTERS,
  REGEX_PASSWORD,
  REGEX_LETTERS,
} from '../constants/regex';

const validateSignIn = (values) => {
  const errors = {};

  if (!values.email.trim().length) {
    errors.email = 'Required';
  } else if (!REGEX_EMAIL.test(values.email)) {
    errors.email = 'Invalid';
  }

  if (!values.password.trim().length) {
    errors.password = 'Required';
  }

  return errors;
};

const validateResetPassword = (values) => {
  const errors = {};

  if (!values.password.trim().length) {
    errors.password = 'Required';
  } else if (values.password.trim().length < 8) {
    errors.password = 'Minimum character limit is 8';
  } else if (!REGEX_PASSWORD.test(values.password)) {
    errors.password = 'Must contain at least, 1 Uppercase letter, 1 lowercase letter, 1 special character, and 1 digit';
  }

  if (!values.cPass.trim().length) {
    errors.cPass = 'Required';
  } else if (values.cPass.trim() !== values.password.trim()) {
    errors.cPass = 'Not mathced';
  }

  return errors;
};

const validateFindAccount = (values) => {
  const errors = {};

  if (!values.email.trim().length) {
    errors.email = 'Required';
  } else if (!REGEX_EMAIL.test(values.email)) {
    errors.email = 'Invalid';
  }

  return errors;
};

const validateAdd = (values) => {
  const errors = {};
  if (!values.first_name.trim().length) {
    errors.first_name = 'Required';
  } else if (values.first_name.trim().length < 4) {
    errors.first_name = 'Must include at least 4 characters';
  } else if (values.first_name.trim().length > 50) {
    errors.first_name = 'Maximum charater limit is 50';
  }

  if (!values.last_name.trim().length) {
    errors.last_name = 'Required';
  } else if (values.last_name.trim().length < 4) {
    errors.last_name = 'Must include at least 4 characters';
  } else if (values.last_name.trim().length > 50) {
    errors.last_name = 'Maximum charater limit is 50';
  }

  if (!values.email.trim().length) {
    errors.email = 'Required';
  } else if (!REGEX_EMAIL.test(values.email)) {
    errors.email = 'Invalid';
  }

  if (!values.designation.trim().length) {
    errors.designation = 'Required';
  } else if (values.designation.trim().length < 4) {
    errors.designation = 'Must include at least 4 characters';
  } else if (values.designation.trim().length > 50) {
    errors.designation = 'Maximum charater limit is 50';
  }

  return errors;
};

const validateVerifyOtp = (values) => {
  const errors = {};
  if (!values.otp.trim().length) {
    errors.otp = 'Required';
  } else if (!REGEX_OTP.test(values.otp)) {
    errors.otp = 'Invalid';
  }

  return errors;
};

const validateCreateEndorserOrUploader = (values) => {
  const errors = {};
  if (!values.user_type) {
    errors.user_type = 'Required';
  }

  if (!values.first_name.trim().length) {
    errors.first_name = 'Required';
  } else if (values.first_name.trim().length > 50) {
    errors.first_name = 'Maximum charater limit is 50';
  } else if (!REGEX_MUST_HAVE_LETTERS.test(values.first_name)) {
    errors.first_name = 'Invalid';
  }

  if (!values.last_name.trim().length) {
    errors.last_name = 'Required';
  } else if (values.last_name.trim().length > 50) {
    errors.last_name = 'Maximum charater limit is 50';
  } else if (!REGEX_MUST_HAVE_LETTERS.test(values.last_name)) {
    errors.last_name = 'Invalid';
  }

  if (!values.email.trim().length) {
    errors.email = 'Required';
  } else if (!REGEX_EMAIL.test(values.email)) {
    errors.email = 'Invalid';
  }

  if (!values.designation.trim().length) {
    errors.designation = 'Required';
  } else if (values.designation.trim().length > 50) {
    errors.designation = 'Maximum charater limit is 50';
  } else if (!REGEX_MUST_HAVE_LETTERS.test(values.designation)) {
    errors.designation = 'Invalid';
  }

  return errors;
};

const validateUserDeactivate = (values) => {
  const errors = {};

  if (!values.reason.trim().length) {
    errors.reason = 'Required';
  }

  return errors;
};

const validateTransferTokens = (values) => {
  const errors = {};

  if (!values.amount.trim().length) {
    errors.amount = 'Required';
  } else if (Number(values.amount) < 0) {
    errors.amount = 'Must be a positive value';
  }

  return errors;
};

const validateModifyAdmin = (values) => {
  const errors = {};
  if (!values.first_name.trim().length) {
    errors.first_name = 'Required';
  } else if (values.first_name.trim().length < 4) {
    errors.first_name = 'Must include at least 4 characters';
  } else if (values.first_name.trim().length > 50) {
    errors.first_name = 'Maximum charater limit is 50';
  } else if (!REGEX_LETTERS.test(values.first_name.trim())) {
    errors.first_name = 'Invalid';
  }

  if (!values.last_name.trim().length) {
    errors.last_name = 'Required';
  } else if (values.last_name.trim().length < 4) {
    errors.last_name = 'Must include at least 4 characters';
  } else if (values.last_name.trim().length > 50) {
    errors.last_name = 'Maximum charater limit is 50';
  } else if (!REGEX_LETTERS.test(values.last_name.trim())) {
    errors.last_name = 'Invalid';
  }

  if (!values.designation.trim().length) {
    errors.designation = 'Required';
  } else if (values.designation.trim().length < 4) {
    errors.designation = 'Must include at least 4 characters';
  } else if (values.designation.trim().length > 50) {
    errors.designation = 'Maximum charater limit is 50';
  } else if (!REGEX_LETTERS.test(values.designation.trim())) {
    errors.designation = 'Invalid';
  }

  return errors;
};

const validateModifyUploader = (values) => {
  const errors = {};
  if (!values.first_name.trim().length) {
    errors.first_name = 'Required';
  } else if (values.first_name.trim().length < 4) {
    errors.first_name = 'Must include at least 4 characters';
  } else if (values.first_name.trim().length > 50) {
    errors.first_name = 'Maximum charater limit is 50';
  } else if (!REGEX_MUST_HAVE_LETTERS.test(values.first_name)) {
    errors.first_name = 'Invalid';
  }

  if (!values.last_name.trim().length) {
    errors.last_name = 'Required';
  } else if (values.last_name.trim().length < 4) {
    errors.last_name = 'Must include at least 4 characters';
  } else if (values.last_name.trim().length > 50) {
    errors.last_name = 'Maximum charater limit is 50';
  } else if (!REGEX_MUST_HAVE_LETTERS.test(values.last_name)) {
    errors.last_name = 'Invalid';
  }

  if (!values.designation.trim().length) {
    errors.designation = 'Required';
  } else if (values.designation.trim().length < 4) {
    errors.designation = 'Must include at least 4 characters';
  } else if (values.designation.trim().length > 50) {
    errors.designation = 'Maximum charater limit is 50';
  } else if (!REGEX_MUST_HAVE_LETTERS.test(values.designation)) {
    errors.designation = 'Invalid';
  }

  return errors;
};

export {
  validateSignIn,
  validateResetPassword,
  validateFindAccount,
  validateAdd,
  validateVerifyOtp,
  validateCreateEndorserOrUploader,
  validateUserDeactivate,
  validateTransferTokens,
  validateModifyAdmin,
  validateModifyUploader,
};
