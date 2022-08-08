import api from "../axios";

export default  {
    createNewStudent: (payload) => api.post(`/auth/create-student`,payload),
    register: (payload) => api.post(`/signup`,payload),
    currentUser: () => api.get(`/current-user`),
    logout: () => api.get(`/logout`),
}