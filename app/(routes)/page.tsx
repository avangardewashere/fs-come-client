import getBillboard from "@/actions/getBillboard";
import Billboard from "@/components/ui/Billboard";
import { Container } from "@/components/ui/container";

const Page = async () => {
  const billboard = await getBillboard("1e037330-3e05-40a8-a6a0-884e8f6909f0");
  return (
    <div>
      <Container>
        <div className="space-y-18 pb-10">
          <Billboard data={billboard} />
        </div>
      </Container>
    </div>
  );
};

export default Page;
