import http from "@/services/httpService";

export function getCategory() {
    return http.get('/category/list').then(({data}) => data.data)
}