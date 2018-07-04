var expect = require('expect');

var {generateMessage} = require('./message');


it('should return message',() => {
    var message = generateMessage('ashu','hey everyone');
    expect(message.from).toBe('ashu');
    expect(message.text).toBe('hey everyone');
    expect(message.createAt).toBeTruthy();
});