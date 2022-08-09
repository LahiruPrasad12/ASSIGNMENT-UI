import api from "../axios";

export default  {
    createNewNotice: (payload) => api.post(`/notices`,payload),
    getMyNotices: () => api.get(`/notices`),
    updateNotice: (id,payload) => api.patch(`/notices/${id}`,payload),
    deleteNotice: (id) => api.delete(`/notices/${id}`),
    getUsers: (name) => api.get(`/admin?${name?name:''}`),
}