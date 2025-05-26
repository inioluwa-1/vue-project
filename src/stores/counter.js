import {definedStore} from 'pinia'

export const useCounterStore = definedStore('counter', {
    state: () => ({
        count: 20,
        name: 'George',
        arrobj:JSON.parse(localStorage.getItem('allsignupusers'))
    }),
    actions: {
        // increment() {
        //     this.count++
        // }
    }
})