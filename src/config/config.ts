import { Type } from '@sinclair/typebox';
import { Value } from '@sinclair/typebox/value';

const envSchema = Type.Object({
  PORT_APP: Type.String(),
  MYSQL_ROOT_PASSWORD: Type.String(),
  MYSQL_HOST: Type.String(),
  MYSQL_USER: Type.String(),
  MYSQL_PASSWORD: Type.String(),
  MYSQL_DATABASE: Type.String(),
  MYSQL_PORT: Type.String(),
  KINDE_CLIENT_ID: Type.String(),
  KINDE_CLIENT_SECRET: Type.String(),
  KINDE_ISSUER_URL: Type.String(),
  KINDE_SITE_URL: Type.String(),
  KINDE_POST_LOGOUT_REDIRECT_URL: Type.String(),
  KINDE_POST_LOGIN_REDIRECT_URL: Type.String()
});

// TODO: this is ugly, find a better way to do this
if (!Value.Check(envSchema, process.env)) throw new Error('Invalid env variables');
export const env = Value.Cast(envSchema, process.env);