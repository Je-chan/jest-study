import { shallowMount, VueWrapper } from "@vue/test-utils";

import Todo from "@/components/ToDo.vue";

describe("========= Todo =========", () => {

  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = shallowMount(Todo)
  })

  test("타이틀이 Todo App 이라는 명칭이어야 합니다", () => {

    expect(wrapper.find("h1").text()).toMatch("Todo App");
  });

  test("renders label, input", () => {

    expect(wrapper.find("label").text()).toMatch("할 일 작성");

    expect(wrapper.find("input").attributes("placeholder")).toMatch(
      "할 일을 작성해주세요"
    );
  });

  test("renders button", () => {

    expect(wrapper.find("button").text()).toMatch("추가하기");
  });
});
