import { proxy } from 'valtio'

const store = proxy({
    home: true,
    color: '#ffffff'
})

export default store