// App.spec.tsx
import App from "../src/App";
import React from "react";
import { renderWithProviders } from "../src/utils/test-utils";
import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  // Bloquer les requêtes d'images
  await page.route("**/*.{png,jpg,jpeg,gif,svg}", (route) => route.abort());
});

describe("App", () => {
  it("devrait capturer la page d'accueil de Create React ApQp", async () => {});

  test("has title", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await expect(page).toHaveTitle(/PRODUCTS/);
  });

  test("TextEncoder is defined", async () => {
    const preloadedState = {
      products: {
        data: [
          {
            id: 1,
            name: "test",
            description: "Description du produit 1",
            price: 10,
            picture: "",
            createdAt: "",
            updatedAt: "",
            imageUrl: "",
          },
          {
            id: 2,
            name: "test 2",
            description: "Description du produit 2",
            price: 10,
            picture: "",
            createdAt: "",
            updatedAt: "",
            imageUrl: "",
          },
        ],
        selectedProduct: {
          id: 2,
          name: "test 2",
          description: "Description du produit 2",
          price: 10,
          picture: "",
          createdAt: "",
          updatedAt: "",
          imageUrl: "",
        },
        loading: false,
        error: null,
      },
      user: {
        user: null,
        newUser: null,
        loading: false,
        error: null,
      },
    };

    renderWithProviders(<App />, { preloadedState });

    // Check if the products are rendered
    // expect(await screen.findByText("Product 1")).toBeInTheDocument();
    // expect(screen.getByText("Description for Product 1")).toBeInTheDocument();
    // expect(screen.getByText("Product 2")).toBeInTheDocument();
    // expect(screen.getByText("Description for Product 2")).toBeInTheDocument();
  });
});
