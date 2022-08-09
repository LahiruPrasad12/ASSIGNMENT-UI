import api from "../axios";

export default  {
    createNewNotice: (payload) => api.post(`/notices`,payload),
    getMyNotices: () => api.get(`/notices`),
    updateNotice: () => api.patch(`/notices`),
    getUsers: (name) => api.get(`/admin?${name?name:''}`),
}