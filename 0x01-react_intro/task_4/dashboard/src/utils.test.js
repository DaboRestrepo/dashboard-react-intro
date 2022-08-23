import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

it('getFullYear', () => {
  expect(getFullYear()).toEqual(new Date().getFullYear());
});

it('getFooterCopy with true', () => {
  expect(getFooterCopy(true)).toEqual('Holberton School');
  expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
});

it('getLatestNotification', () => {
  expect(getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
});
