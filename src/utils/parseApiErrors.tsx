export interface ApiFieldError {
  campo: string;
  mensagem: string;
}

export type FormErrors = Record<string, string[]>;

export function parseApiErrors(apiErrors: ApiFieldError[] = []): FormErrors {
  return apiErrors.reduce<FormErrors>((acc, err) => {
    if (!acc[err.campo]) {
      acc[err.campo] = [];
    }
    acc[err.campo].push(err.mensagem);
    return acc;
  }, {});
}
