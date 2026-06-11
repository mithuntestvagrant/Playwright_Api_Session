import Ajv from 'ajv';

const ajv = new Ajv({ allErrors: true });

export function validateSchema(schema: any, data: any) {
  const validate = ajv.compile(schema);

  const isValid = validate(data);

  if (!isValid) {
    console.log('❌ Schema Errors:', validate.errors);
  }

  return isValid;
}