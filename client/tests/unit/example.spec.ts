import { shallowMount, VueWrapper } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import HelloJest from "@/components/HelloJest.vue";


describe("HelloWorld 컴포넌트 기능에 대한 테스트", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});



describe('HelloJest 컴포넌트 기능에 대한 테스트', () => {
  let wrapper: VueWrapper<any>;
  beforeEach(() => {
    wrapper = shallowMount(HelloJest)
  })
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
});
