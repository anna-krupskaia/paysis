import {expect} from 'chai';


describe ('Math functions', function() {
it.only( 'A + B = C', function () {
    const a = 4
    const b = 5
    const c = 9

    expect(a + b).to.equal(c)
})
    it.skip( 'A - B = D', function (){
    expect(a - b).to.equal(d)
    })
})