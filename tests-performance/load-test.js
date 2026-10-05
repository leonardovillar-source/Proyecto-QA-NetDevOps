import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    stages: [
        { duration: '5s', target: 10 },  // Rampa de subida: genera hasta 10 usuarios virtuales en 5 seg
        { duration: '10s', target: 10 }, // Mantiene 10 usuarios virtuales concurrentes durante 10 seg
        { duration: '5s', target: 0 },   // Rampa de bajada: reduce a 0 usuarios
    ],
    thresholds: {
        http_req_duration: ['p(95)<500'], // El 95% de las peticiones debe responder en menos de 500ms
    },
};

export default function () {
    // Usamos host.docker.internal para comunicarnos desde el contenedor de k6 hacia tu máquina local
    const resGet = http.get('http://host.docker.internal:8080');
    check(resGet, { 'HTTP 200 en GET /': (r) => r.status === 200 });

    const resPost = http.post('http://host.docker.internal:8080/aceptar');
    check(resPost, { 'HTTP 200 en POST /aceptar': (r) => r.status === 200 });

    sleep(1);
}