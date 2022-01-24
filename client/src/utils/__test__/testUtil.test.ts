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
  
  describe("========= RESOLVE TEST ==========", () => {
    test("Good Test", async () => {
      // 비동기 함수가 몇 번 호출되었는가를 나타냄
      expect.assertions(2)
      const getMsg = asynchronusTest.getMsg
      const goodTest = await getMsg('Good!')  
      const renderMsg = asynchronusTest.renderMsg
      expect(goodTest.value).toMatch('Good!');
      expect(renderMsg.value).toMatch('Good!')
    });
  }) 
  
  describe("========= Error TEST ==========", () => {
    test("Error Test", async () => {
      const getMsg = asynchronusTest.getMsg
      try {
        await getMsg('Error')
      } catch (e) {
        expect(e).toMatch('Error')
      }
    })
  })
})