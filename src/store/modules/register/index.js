import { postRegister } from '@/services/register'
export const namespaced = true

export const actions = {
    async register({dispatch}, register) {
        dispatch('loading/setLoading', true, {root: true})
        try {
            await postRegister(register)
            dispatch('snackbar/setSnackBar', {msg: 'Usuário cadastrado com sucesso!'}, {root: true})
            dispatch('loading/setLoading', false, {root: true})
        } catch(err) {
            console.log(err)
            dispatch('snackbar/setSnackBar', {msg: 'Falha ao cadastrar o usuário', success: false}, {root: true})
            dispatch('loading/setLoading', false, {root: true})
        }
    }
}