import api from "../axios";

export default  {
    login: (payload) => api.post(`/auth/signing`,payload),
    register: (payload) => api.post(`/signup`,payload),
    currentUser: () => api.get(`/current-user`),
    logout: () => api.get(`/logout`),
}