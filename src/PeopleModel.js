import { Record } from 'immutable'

const initialValue = {
    name: ''
}

export default class People extends Record(initialValue) {

    get name(){
        return this.get('name')
    }
}
