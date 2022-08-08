import api from "../axios";
let base = '/auth'

export default  {
    login: (payload) => api.post(`/auth/signing`,payload),
    currentUser: () => api.get(`/current-user`),
    logout: () => api.get(`/logout`),
}