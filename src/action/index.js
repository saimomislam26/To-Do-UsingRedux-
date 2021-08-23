export const addtodo = (data) => {
    return {
        type: 'ADD_TODO',
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const deletetodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    }
}

export const cleartodo = () => {
    return {
        type: 'CLEAR_TODO'
    }
}