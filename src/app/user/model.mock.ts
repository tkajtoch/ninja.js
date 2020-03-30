import { AppUserModelInterface } from './model.interface';

export function appUserModelMock({
  edit_path = '/edit_path_mock',
  email = 'mock@example.com',
  name1 = 'Mock Mock',
  per_id = Math.floor(Math.random() * 100000),
} = {}): AppUserModelInterface {
  return {
    edit_path,
    email,
    name1,
    per_id,
  };
}
