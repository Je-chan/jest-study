const calculator = {
  add: (a : number, b : number) => a + b,
};


describe('spyOn 활용', () => {

  
  const spyFn = jest.spyOn(calculator, "add");
  const result = calculator.add(2, 3);
  
  test('얼마만큼 호출되었는가?', () => {

    expect(spyFn).toBeCalledTimes(1);
  })

  test('어느 정도의 호출 빈도가 있었는가?', () => {

    expect(spyFn).toBeCalledWith(2,5);
  })

  test('최종 값은 얼마인가?', () => {

    expect(result).toBe(5);
  })
}
  )

