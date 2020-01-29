// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Project, Report, Remark } = initSchema(schema);

export {
  Project,
  Report,
  Remark
};