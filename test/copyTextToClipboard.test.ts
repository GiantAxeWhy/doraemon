import { userAgentMap } from './constants.ts/user-agent';
import copyTextToClipboard from '../src/copyTextToClipboard';
import { UserAgentSetter } from './utils/user-agent-setter';

describe('copyTextToClipboard', () => {
  const userAgentSetter = new UserAgentSetter();
  beforeEach(() => {
    document.execCommand = jest.fn();
  });
  afterAll(() => {
    userAgentSetter.reset();
    document.execCommand = undefined;
  });
  test('copy failed', async() => {
    // document.execCommand is not a function
    document.execCommand = undefined;
    await expect(copyTextToClipboard('doraemon')).resolves.toBeFalsy();
  });
  test('value is not a string', async() => {
    await expect(copyTextToClipboard({} as string)).resolves.toBeFalsy();
  });
  test('copy in ios', async() => {
    userAgentSetter.set(userAgentMap.mobileInIos);
    await expect(copyTextToClipboard('doraemon')).resolves.toBeTruthy();
  });
  test('copy success', async() => {
    await expect(copyTextToClipboard('doraemon')).resolves.toBeTruthy();
  });
});
