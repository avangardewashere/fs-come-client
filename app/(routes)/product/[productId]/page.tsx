import getProducts from "@/actions/getProduct";
import getSingleProduct from "@/actions/getSingleProduct";
import Gallery from "@/components/Gallery/Gallery";
import Info from "@/components/Info";
import ProductList from "@/components/ProductList";
import { Container } from "@/components/ui/container";
import React from "react";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductSingle: React.FC<ProductPageProps> = async ({ params }) => {
  const { productId } = params;
  const product = await getSingleProduct(productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Gallery */}
           <Gallery images={product.images}/> 
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              {/* Info */}
              <Info data={product} /> 
            </div>
          </div>
          <hr />
          <div className="my-10">
            <ProductList title="Related Items" items={suggestedProducts} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductSingle;
