import { qs } from "./functions";
const state = {
    mode: 'edit'
}

qs('.pad > button').forEach(btn => {
    btn.addEventListener('click', e => {
        switch (state.mode) {
            case 'edit':
                break
            case 'play':
                break
        }
    })
})
