

function sayHello(name) {
    var arr = [], i = 0;
    while(true){
        arr.push(i++);
    }
    return 'Hello ' + name;
}

self.onmessage = function (event) {
    // run this part whenever someone posts a message
    // access the data sent to the worker as event.data

    self.postMessage(sayHello(event.data));

};
