export interface IValidationResult {
  validationResult: boolean;
  resultMessages: string;
}

type validationDataTypes = string | number;

export const emailValidation = (email: validationDataTypes): IValidationResult => {
  const result: IValidationResult = {
    validationResult: false,
    resultMessages: '',
  };

  if (typeof email === 'string') {
    const emailTemplate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailValidation = emailTemplate.test(email);

    if (email.length <= 0) {
      result.validationResult = false;
      result.resultMessages = 'Email is required';
      return result;
    }

    if (emailValidation) {
      result.validationResult = true;
      result.resultMessages = 'Email is correct';

      return result;
    } else {
      result.validationResult = false;
      result.resultMessages = 'Email is not correct';
      return result;
    }
  } else {
    result.validationResult = false;
    result.resultMessages = 'Email should be a string';
    return result;
  }
};

export const passwordValidation = (password: validationDataTypes): IValidationResult => {
  const result: IValidationResult = {
    validationResult: false,
    resultMessages: '',
  };

  const checkLength = (password: string, length: number) => {
    return password.length < length ? false : true;
  };

  if (typeof password === 'string') {
    const minLength = 6;
    const passwordValidation = checkLength(password, minLength);

    if (password.length <= 0) {
      result.validationResult = false;
      result.resultMessages = 'Password is required';
      return result;
    }

    if (passwordValidation) {
      result.validationResult = true;
      result.resultMessages = 'Password is correct';

      return result;
    } else {
      result.validationResult = false;
      result.resultMessages = 'Password is to short';
      return result;
    }
  } else {
    result.validationResult = false;
    result.resultMessages = 'Password should be a string';
    return result;
  }
};
