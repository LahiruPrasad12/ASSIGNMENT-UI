import api from "../axios";

export default  {
    createNewStudent: (payload) => api.post(`/admin`,payload),
    getUsers: () => api.get(`/admin`),
}