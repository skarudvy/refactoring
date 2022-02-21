const sum = require('../sum');

beforeAll(() => {
    console.log("beforeAll call");
})

describe('nodeName', () => {
    test('add 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
});

// describe('province', () => {
//     test('shortfall', () => {
//         const asia = new Province(sampleProvinceData());
//         expect(asia.shortfall).toBe(5);
//     });
// });
