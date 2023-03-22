import { Greeter } from './greeter';

test('挨拶を返す', () => {
    expect(new Greeter('Taro').getMessage()).toBe('Hello Tao');
});
test('挨拶を返す', () => {
    expect(new Greeter('Taro').getMessage()).toBe('Hello Taro');
});