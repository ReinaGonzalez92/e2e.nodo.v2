import test from "@playwright/test";

test("validacion del login con datos correctos", async ({page}) => {
    await page.goto("https://crm-matosso.leonardojose.dev/login");
});