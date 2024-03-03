<template>
    <div class="flex justify-center items-center">
        <div class="card">
            <h5 class="text-xl font-bold text-gray-900 dark:text-white">
                Parent, child, emit
            </h5>
            <div class="font-semibold text-xl text-orange-600">
                User: <span class="text-amber-700">{{ myName }}</span>
            </div>
            <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                <button @click="increament">Count {{ cnt }}</button>
                <child-comp someText="toChild" @emitFn="some_function" />
            </div>
        </div>
        <div class="card">
            <h5 class="text-xl font-bold text-gray-900 dark:text-white">Debounce</h5>
            <input type="text" v-model='dbText' @keyup="myDebounce(some_function, 1500)" />
        </div>
        <div class="card">
            <h5 class="text-xl font-bold text-gray-900 dark:text-white">Throttle</h5>
            <p>Normal Count : <span class="label">{{ throttleData.ncount }}</span></p>
            <p>Throttle Count: <span class="label">{{ throttleData.tcount }}</span> </p>
            <button @click="myThrottle">Multiple Click</button>
        </div>
        <div class="card">
            <h5 class="text-xl font-bold text-gray-900 dark:text-white">Memouze</h5>
            <div class="font-semibold text-xl text-orange-600">
                User: <span class="text-amber-700">After Click check console</span>
            </div>
            <button @click="tryMemoize">Memoize</button>
        </div>
    </div>
</template>

<script>
import ChildComp from "./ChildComp.vue";

let throttleState = true;
export default {
    name: "NewPractise",
    components: { ChildComp },
    props: {},
    data: function () {
        return {
            dbText: "",
            throttleData: { ncount: 0, tcount: 0 },
            myName: "Sachin",
            cnt: 0,
            toChild: "Hi this is child",
        };
    },
    watch: {
        cnt: function (newVal, oldVal) {
            console.log(`old - ${oldVal}, New - ${newVal}`);
        },
    },
    methods: {
        increament: function () {
            this.cnt++;
            console.log(this);
        },
        some_function: function (ele = "") {
            console.log("function success " + ele);
        },
        myDebounce: function (fn, t) {
            let timer;
            return (() => {
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(function () {
                    fn.apply(this, this.dbText);
                    console.log('d')
                }, t)
            })()
        },
        myThrottle() {
            this.throttleData.ncount++
            if (throttleState) {
                throttleState = false;
                setTimeout(() => {
                    this.throttleData.tcount++
                    throttleState = true;
                }, 1500)
            }
        },
        tryMemoize: function() {
            let memoise = (fn) => {
                let cache = {}
                return (...arg) => {
                    const strArgs = arg.join('_');
                    if(cache[strArgs]) {
                        console.log(cache)
                        return cache[strArgs]
                    } else {
                        const res = fn.apply(this,arg);
                        console.log(res)
                        cache[strArgs] = res;
                        console.log(cache)
                        return res
                    }
                }
            }
            let add = (a,b,c) => a+b+c;
            let sum = memoise(add);
            console.log(sum(1,2,3))
            console.log(sum(1,2,3))
            console.log(sum(1,2,4))
        }
    },
    mounted() {
        this.cnt = 0;
    },
};
</script>