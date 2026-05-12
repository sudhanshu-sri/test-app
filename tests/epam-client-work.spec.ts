import { test, expect } from '@playwright/test';

test('navigate from Services to Client Work page', async ({ page }) => {
  await page.goto('/');

  const servicesMenu = page.getByRole('button', { name: 'Services' });
  await expect(servicesMenu).toBeVisible();
  await servicesMenu.click();

  const clientWorkLink = page.getByRole('link', { name: 'Explore Our Client Work' }).first();
  await expect(clientWorkLink).toBeVisible();
  await clientWorkLink.click();

  await expect(page).toHaveURL(/\/services\/client-work$/);
  await expect(page.getByText('Client Work', { exact: true }).first()).toBeVisible();
});
