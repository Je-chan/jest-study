import { Ref } from 'vue';
import usePopMsg from '../testUtil';


// describe("========= Test Util =========", () => {

//   const useTest = usePopMsg();
//   console.log(useTest)

//   test("useTest 비동기 처리 테스트", async () => {
//     await useTest.getMsg('Hello world!');
//     console.log(useTest.renderMsg.value)
//     expect(useTest.renderMsg.value).toMatch('Hello world!');
//     });
//   });


describe("========= Test Util =========", () => {
  

  let asynchronusTest: { getMsg: any; renderMsg: Ref<string | null>; };

  beforeEach(() => {
    asynchronusTest = usePopMsg()
  })
  
  
  test("Good Test", async () => {
    const getMsg = asynchronusTest.getMsg
    const goodTest = await getMsg('Good!')
    const renderMsg = asynchronusTest.renderMsg
      expect(goodTest.value).toMatch('Good!');
      expect(renderMsg.value).toMatch('Good!')
  });
  
  test("Error Test", async () => {
    const getMsg = asynchronusTest.getMsg
    const errorTest = await getMsg('Error')
    expect(errorTest).toThrow('Error')
  })
})