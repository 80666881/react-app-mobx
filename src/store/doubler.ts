import { observable, computed, action, flow } from "mobx"

export class Doubler {
    // 修复 类型“number”上不存在属性“value”
    @observable accessor value:number;

    constructor(value:number) {
        this.value = value
    }

    @computed
    get double() {
        return this.value * 2
    }

    @action
    increment() {
        console.log('fff');
        this.value++
    }

    @flow
    *fetch() {
        const response = yield fetch("/api/value")
        this.value = response.json()
    }
}

export const store = new Doubler(1)