export const connection: Connection = {
  CONNECTION_STRING: 'MYSQL://1234/dummy-connection-string',
  DB: 'MYSQL',
  DB_STRING: 'test'
}

export type Connection = {
  CONNECTION_STRING: string;
  DB: string;
  DB_STRING: string;
}