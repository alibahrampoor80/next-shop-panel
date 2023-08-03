import http from "@/services/httpService";

export function getCategory() {
    return http.get('/category/list').then(({data}) => data.data)
}

export function AddNewCategory(data) {
    return http.post('/admin/category/add', data).then(({data}) => data.data)
}

