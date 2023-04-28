import React from "react";
import {sum} from "./01";

test('sum should be correct', ()=>{
    //data
const a = 1
const b = 2
const c = 3

    //action
    const rusult1 = sum(a,b)
    const rusult2 = sum(b,c)

    //expect result
    expect(rusult1).toBe(3)
    expect(rusult2).toBe(5)
})