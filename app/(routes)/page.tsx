import Billboard from "@/components/ui/Billboard";
import { Container } from "@/components/ui/container";

const page = () => {
  return (
    <div>
      <Container>
        <div className="space-y-18 pb-10">
          <Billboard />
        </div>
      </Container>
    </div>
  );
};

export default page;
