const calculator = {
  add: (a : number, b : number) => a + b,
};


describe('spyOn 활용', () => {

  
  const spyFn = jest.spyOn(calculator, "add");
  const result = calculator.add(2, 3);
  
  test('얼마만큼 호출되었는가?', () => {

    expect(spyFn).toBeCalledTimes(1);
  })

  test('어떤 인자들을 사용했는가?', () => {

    expect(spyFn).toBeCalledWith(2,3);
  })

  test('최종 값은 얼마인가?', () => {

    expect(result).toBe(5);
  })
}
  )

