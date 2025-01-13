import getColors from "@/actions/getColor";
import getProducts from "@/actions/getProduct";
import getSingleCategory from "@/actions/getSingleCatefory";
import getSizes from "@/actions/getSizes";
import Billboard from "@/components/ui/Billboard";
import { Container } from "@/components/ui/container";
import { Billboard as BTypes } from "@/lib/types";
import Filter from "./_components/Filter";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const { categoryId } = await params;
  const { colorId, sizeId } = await searchParams;
  const sizes = await getSizes();
  const colors = await getColors();
  const products = await getProducts({
    categoryId: categoryId,
    colorId: colorId,
    sizeId: sizeId,
  });
  const category = await getSingleCategory(categoryId);
  console.log("type ", typeof category.billboard);

  console.log("category - billlboard ", category.billboard);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard as any} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          {/* mobile filters */}
          <div className="hidden lg:block">
            <Filter valueKey="sizeId" name="Sizes" data={sizes} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
