/* eslint-disable @typescript-eslint/no-explicit-any */
import { TErrorSources, TGenericErrorResponse } from '../interfaces/error';

const handleDuplicateError = (err: any): TGenericErrorResponse => {
  const keys = Object.keys(err?.keyValue || {});
  const path = keys.length > 0 ? keys[0] : 'unknown';

  // Extract value using regex or fallback to keyValue
  const errmsg = err?.errorResponse?.errmsg || err?.message || '';
  const match = errmsg.match(/"([^"]*)"/);
  const extractedValue = match?.[1] || err?.keyValue?.[path] || 'value';

  const errorSources: TErrorSources = [
    {
      path,
      message: `${extractedValue} already exists!`,
    },
  ];

  return {
    statusCode: 400,
    message: 'Duplicate Key Error',
    errorSources,
  };
};

export default handleDuplicateError;
