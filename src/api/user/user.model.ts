/**
 * @export
 * @type User
 */
export type User = {
  id: string;
  email: string;
  location: string;
  fullName: string;
};

/**
 * @export
 * @type UserForm
 */
export type UserForm = {
  Name: string;
  Email: string;
  Location: string;
  Password: string;
};

/**
 * @export
 * @type LoginForm
 */
export type LoginForm = {
  Email: string;
  Password: string;
};
