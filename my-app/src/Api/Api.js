import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "2340d0bf-bf92-494a-87c8-2cc6e51ce1ac"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPi object.')
        return profileAPI.getProfile(userId)
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },

    getStatus(userId) {
        return instance.get('profile/status/' + userId);
    },

    updateStatus(status) {
        return instance.put('profile/status/', {status: status});
    }

};

export const followAPI = {
    deleteUnfollow(userId) {
        return instance.delete(`follow/${userId}`);

    },

    postFollow(userId) {
        return instance.post(`follow/${userId}`);
    }
};

export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`);

    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
};





