const app = require("./app");
// console.log(app.hello());

// describe ('suite: hello', ()=>{

//     it('should return hello', ()=>{

//         expect(app.hello()

//         )
//     }

describe ('suite: hello', ()=>{
    it('shoud add',()=>{
        expect(app.add(2,2)).toBe(4);
    });
});