export const count = {
	state: {
        correct: 0,
        play: false
    },
	reducers: {
		increment(state, payload) {
            console.log(state)
            state.correct = state.correct + 1
            return state
        } ,
        reset(state,payload){
            state.correct = 0
            state.play = false
            return state
        },
        play(state,payload){
            console.log("payload", payload)
            state.play = payload
            return state
        }
	},
	effects: dispatch => ({
		async asyncIncrement(payload,rootState) {
            console.log(payload)
			await new Promise(resolve => {
				setTimeout(resolve, 1000)
			})

			dispatch.count.increment()
		},
	}),
}
