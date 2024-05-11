import { sum } from "../../sum"

test("sum function will calculate sum of two numbers",()=>{
    const result = sum(2,4)
    //Assertion
    expect(result).toBe(6)

    const result1 = sum(-1,4)
    //Assertion
    expect(result1).toBe(3)
})