import { ApiError, ApiErrorType } from './apiError';
import { isString } from './guards/isString';

export function invariant(
  condition: unknown,
  errorOrMessage: Error | string = 'Invariant failed'
): asserts condition {
  if (condition) return;

  if (isString(errorOrMessage)) {
    throw new ApiError(ApiErrorType.Validation, errorOrMessage);
  }
  throw errorOrMessage;
}
