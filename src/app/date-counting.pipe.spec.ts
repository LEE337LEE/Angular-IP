import { DateCountPipe } from './date-counting.pipe';

describe('DateCountingPipe', () => {
  it('create an instance', () => {
    const pipe = new DateCountPipe();
    expect(pipe).toBeTruthy();
  });
});
