import http from "@/services/httpService";


export function createPayment() {
    return http.post('/payment/create').then(({data}) => data.data)
}
