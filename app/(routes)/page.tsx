import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProduct";
import ProductList from "@/components/ProductList";
import Billboard from "@/components/ui/Billboard";
import { Container } from "@/components/ui/container";

const Page = async () => {
  const billboard = await getBillboard("1e037330-3e05-40a8-a6a0-884e8f6909f0");
  const products = await getProducts({ isFeatured: true });
  return (
    <div>
      <Container>
        <div className="space-y-18 pb-10">
          <Billboard data={billboard} />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title={"Featured Products"} items={products} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
