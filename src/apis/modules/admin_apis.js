import api from "../axios";

export default  {
    createNewStudent: (payload) => api.post(`/admin`,payload),
    getUsers: (name) => api.get(`/admin?${name?name:''}`),
}