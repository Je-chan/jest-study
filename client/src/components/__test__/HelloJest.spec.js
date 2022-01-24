import { shallowMount } from '@vue/test-utils';
import HelloJest from '@/components/HelloJest.vue';

// interface Person<T> {
//   name : string;
//   age : number;
//   like : T;
// }

// interface Liebe {

//   animal: string,
//   fruit : string
// }
// interface Ethan {
//   food: string,
//   fruit : string
// }

// const person:Person<Liebe> = {
//   name : 'liebe',
//   age : 28,
//   like: {
//     animal: 'dog',
//     fruit : 'apple'
//   }
// }
// const person2:Person<Ethan> = {
//   name : 'ethan',
//   age : 28,
//   like: {
//     food : 'pasta',
//     fruit : 'apple'
//   }
// }

describe('========= HelloJest =========', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(HelloJest);
  });

  test('본문의 내용을 정확하게 Fruits 라고 입력해야 합니다', () => {
    expect(wrapper.vm.fruits).toBe('Fruits');
  });
  test('Fruits 의 모든 철자를 대문자로 바꿔야 합니다.', () => {
    expect(wrapper.vm.capitalized).toBe('FRUITS');
  });
  test('Fruits 의 모든 철자를 역순으로 표현해야 합니다.', () => {
    expect(wrapper.vm.reversed).toBe('stiurF');
  });
  test('Fruits 의 모든 철자를 역순으로 표현한 다음 뒤에 like 를 붙여야 합니다', () => {
    expect(wrapper.vm.falseReversed).toBe('stiurFlike');
  });
  test('h3 태그에 쓰이는 문구는 10자 미만이어야 합니다.', () => {
    expect(wrapper.find('h3').text()).toMatch('안녕하세요?');
  });
});
