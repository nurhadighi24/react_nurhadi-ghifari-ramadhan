import "@testing-library/jest-dom";

import { render, screen, within, fireEvent } from "../../../__tests__/utils";

import App from "../../../components/Form/Form";

const productInput = [
  "input-product-name",
  "input-product-category",
  "input-product-image",
  "input-product-price",
  "input-product-freshness",
  "btn-submit",
];

describe("Index Product Page", () => {
  beforeEach(() => {
    render(<App />);
  });

  describe("Renders the page", () => {
    it("should render the form components", () => {
      const form = screen.getByLabelText("product-form");
      for (const input of productInput) {
        expect(within(form).getByLabelText(input)).toBeTruthy();
      }
    });
  });

  describe("Action for product", () => {
    it("render product name input and displays entered text", () => {
      const form = screen.getByLabelText("product-form");
      const productNameInput =
        within(form).getByLabelText("input-product-name");
      fireEvent.change(productNameInput, {
        target: { value: "New Product" },
      });
      expect(productNameInput).toHaveValue("New Product");
    });
    it("render product price input and displays entered text as a number", () => {
      const form = screen.getByLabelText("product-form");
      const productPriceInput = within(form).getByLabelText(
        "input-product-price"
      );
      fireEvent.change(productPriceInput, {
        target: { value: "123" },
      });
      expect(productPriceInput).toHaveValue(123);
    });
    it("render product category input and displays choosed category", () => {
      const form = screen.getByLabelText("product-form");
      const productCategoryInput = within(form).getByLabelText(
        "input-product-category"
      );
      fireEvent.change(productCategoryInput, {
        target: { value: "Minuman" },
      });
      expect(productCategoryInput).toHaveValue("Minuman");
    });
    it("render product freshness input and displays choosed freshness", () => {
      const form = screen.getByLabelText("product-form");
      const productFreshnessInput = within(form).getByLabelText(
        "input-product-freshness"
      );
      expect(productFreshnessInput).not.toBeChecked();
      fireEvent.click(productFreshnessInput);
      expect(productFreshnessInput).toBeChecked();
    });
  });
});
