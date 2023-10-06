import { KeepNumberOrStringPipe } from './keep-number-or-string.pipe';

describe('KeepNumberOrStringPipe', () => {
  it('create an instance', () => {
    const pipe = new KeepNumberOrStringPipe();
    expect(pipe).toBeTruthy();
  });
});
