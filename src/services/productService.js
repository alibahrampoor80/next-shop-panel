import http from "@/services/httpService";

export function getProducts(qs, cookies) {
    return http.get(`/product/list?${qs}`, {
        headers: {
            cookie:cookies
        }
    }).then(({data}) => data.data)
//     return fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/list?${qs}`, {cache: "no-store"})
//         .then((res) => res.json())
//         .then(({data}) => data)
}


export function getOneProductBySlug(slug) {
    return http.get(`/product/slug/${slug}`).then(({data}) => data.data)

}


export function likeProduct(id) {
    return http.post(`/product/like/${id}`).then(({data}) => data.data)

}

//admin req
export function addProduct(data) {
    return http.post(`/admin/product/add`,data).then(({data}) => data.data)

}

