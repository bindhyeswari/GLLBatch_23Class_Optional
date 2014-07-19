function isPrime(n) {

}

function calcPrime(num){
    var arr_primes = [];
    var n = 0;

    // arr_primes.length === num

}

self.onmessage = function () {
    var arr_times = [];

    for (var i = 1000; i < 21000; i+=1000) {
        var start = Date.now();
        calcPrime(i);
        var end = Date.now();
        arr_times.push({
            num: i,
            time: end-start
        });
    }

    self.postMessage(arr_times);
};