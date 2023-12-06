import {createStore} from 'vuex';
import createPersistedstate from 'vuex-persistedstate';

const store = createStore({
    // state 와 밑에 getters 는 따로 접근 해야함
    state(){
        return{
            cart : [
                {
                    product_id : 1,
                    product_name : "아이폰 거치대",
                    category : "A"
                }
            ],
            count : 0
        }
    },
    getters : {
        cartCount : (state) => {
            return state.cart.length;
        }
    },
    // state만 접근가능 state가 가지고있는 값을 변경 가능 보면 state에 count를 ++ 로 변경
    mutations : {
        increment(state) {
            state.count++;   
        },
        addProduct(state, info){
            state.cart.push(info);
        }
    },
    actions : {
        addProduct(context, info) {   // context(인스턴스)
            setTimeout(() => {
                context.commit('addProduct', info);
            }, 1000);
        }
    },
    plugins : [
        createPersistedstate({
            paths : ['cart']
        })
    ]
});

export default store;