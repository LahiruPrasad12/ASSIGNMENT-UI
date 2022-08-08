import api from "../axios";

export default  {
    login: (payload) => api.post(`/auth/signing`,payload),
    updateMyAccount: (payload) => api.patch(`/auth/update-account`,payload),
    currentUser: () => api.get(`/auth/current-user`),
    logout: () => api.get(`/auth/logout`),
}