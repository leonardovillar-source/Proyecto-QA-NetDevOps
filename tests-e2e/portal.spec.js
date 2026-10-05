const { test, expect } = require('@playwright/test');

test('Validar flujo de aceptación de T&C en el Portal Cautivo', async ({ page }) => {
    // 1. Navegar al portal desplegado en Docker
    await page.goto('http://localhost:8080');

    // 2. Verificar que el encabezado del portal esté presente
    await expect(page.locator('h1')).toHaveText('Portal Cautivo CUN');

    // 3. Simular la interacción del usuario haciendo clic en el botón
    await page.click('button[type="submit"]');

    // 4. Validar que el servidor otorgue el acceso
    await expect(page.locator('body')).toContainText('Acceso a Internet Concedido');
});