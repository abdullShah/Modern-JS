'use strict';

(() => {
    const timeoutMS = 100;

    const _async = (fn, cb) => {
        setTimeout(() => {
            cb(fn());
        }, Math.random() * timeoutMS);
    };

    const AsyncArray = function (a = []) {
        if (!new.target) {
            return new AsyncArray(a);
        }

        this.read = (index, cb) =>
            _async(() => a[index], cb);

        this.size = (cb) =>
            _async(() => a.length, cb);
    };

    Object.freeze(AsyncArray);
    globalThis.AsyncArray = AsyncArray;
})();

const input = AsyncArray([
    8,
    AsyncArray([
        15,
        16,
    ]),
    AsyncArray([
        AsyncArray([
            AsyncArray([
                42,
                AsyncArray([
                    AsyncArray([]),
                    23,
                ]),
            ]),
        ]),
        4,
    ]),
]);

// РїСЂРѕРІРµСЂРєР° СЂРµС€РµРЅРёСЏ
solution(input).then(result => {
    const answer = [8, 15, 16, 42, 23, 4];
    const isEqual = String(answer) === String(result);

    if (isEqual) {
        console.log('OK');
    } else {
        console.log('WRONG');
    }
});

async function solution(input) {
    // ... СЂРµС€РµРЅРёРµ Р·Р°РґР°С‡Рё

    // РїСЂРёРјРµСЂ РІС‹Р·РѕРІР° read
    input.read(0, (elem) => console.log(`read: ${elem}`));

    // РїСЂРёРјРµСЂ РІС‹Р·РѕРІР° size
    input.size((size) => console.log(`size: ${size}`));
}