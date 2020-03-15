import { signupMethods } from "./signupMethods";

test("gets proper signup method", () => {
  expect(signupMethods[0].name).toStrictEqual('GitHub');
  expect(signupMethods[1].name).toStrictEqual('GitLab');
  expect(signupMethods[2].name).toStrictEqual('Google');
  expect(signupMethods[3].name).toStrictEqual('Email & password');
});
