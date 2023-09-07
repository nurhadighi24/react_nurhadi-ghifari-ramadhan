import AdditionalDescriptionInput from "./AdditionalDescriptionInput";
import ButtonSubmitFormInput from "./ButtonSubmitFormInput";
import ImageOfProductInput from "./ImageOfProductInput";
import ProductCategoryInput from "./ProductCategoryInput";
import ProductFreshnessInput from "./ProductFreshnessInput";
import ProductNameInput from "./ProductNameInput";
import ProductPriceInput from "./ProductPriceInput";

export default function FormContainer() {
  return (
    <section className="form mt-5">
      <form className="needs-validation" noValidate="">
        <h5>Detail Product</h5>
        <ProductNameInput />
        <ProductCategoryInput />
        <ImageOfProductInput />
        <ProductFreshnessInput />
        <AdditionalDescriptionInput />
        <ProductPriceInput />
        <ButtonSubmitFormInput />
      </form>
    </section>
  );
}
