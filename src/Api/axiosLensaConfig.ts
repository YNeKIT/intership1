import axios from 'axios'


export default axios.create({
    baseURL: 'https://api.lensa.devebs.net',
    headers: {"Content-Type": "application/json",
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYwMjA2MDE2LCJqdGkiOiIyODhmMWNmNDhiZjM0NzhjYTQzMzNmNjA4M2QxNTM5MCIsInVzZXJfaWQiOjQwfQ.tMEvbZ-EcSbsxpf4Q7-pPI3hkatghZkXOERKApVeN4s`
    }
});
// Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU5NTM0NzYxLCJqdGkiOiI5ODRkMTMwNDc1ODI0MTJlOTkxMmY0MzQ1NDQxZWZhYSIsInVzZXJfaWQiOjQwfQ.4BEeeN1YQGv0oyX1j6LGI75RR-KYMjbnJRgAPFSg0_g`