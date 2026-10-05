const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
    res.send(`
        <h1>Portal Cautivo CUN</h1>
        <p>Por favor acepta los Términos y Condiciones para navegar.</p>
        <form action="/aceptar" method="POST">
            <button type="submit">Aceptar T&C</button>
        </form>
    `);
});

app.post('/aceptar', (req, res) => {
    res.status(200).send("Acceso a Internet Concedido");
});

app.listen(port, () => console.log(`Portal ejecutándose en el puerto ${port}`));