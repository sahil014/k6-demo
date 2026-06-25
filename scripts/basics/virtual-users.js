import http from 'k6/http'
export const options={
    vus:5,
    duration:'10s'
}

export default function(){
    http.get('https://test.k6.io');
}