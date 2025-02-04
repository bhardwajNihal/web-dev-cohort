import { atom, selector } from 'recoil'

export const CounterAtom = atom({
    key : 'counter',
    default: 0,

})

// selector

export const EvenSelector = selector({
    key : 'evenSelector',

    get: function({get}){
        const isEven = get(CounterAtom);
        return isEven % 2 == 0
    }

})