import { Badge, CenteredContent, Heading2 } from "../../components";

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="pt-12 pb-24">
      <CenteredContent variant="flex flex-col gap-y-12 justify-center items-center">
        <div className="flex flex-col items-center justify-center gap-y-8">
          <Badge variant="bg-color-blue">
            <span className="text-sm font-bold text-white">
              Success Customers
            </span>
          </Badge>
          <Heading2 variant="text-center">
            Listen What They’re <br />
            Saying About Benarrr
          </Heading2>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <TestimonialCard
            imgUrl="/images/tst_peop_1.png"
            bodyText="Benarrr helped us boosting our clients prospective to get more high
        quality projects ever."
            customerName="Sammy"
            customerCompany="CMO, Akuna Pixela Team"
          />
          <TestimonialCard
            imgUrl="/images/tst_peop_2.png"
            bodyText="With great ecosystem Benarrr we were able secure top notch projects from companies"
            customerName="Rama Jaya"
            customerCompany="CEO, Pastikelarboss"
          />
          <TestimonialCard
            imgUrl="/images/tst_peop_3.png"
            bodyText="Benarrr helped us boosting our clients prospective to get more high quality projects ever."
            customerName="Istimaidina"
            customerCompany="Marketing, Hujan Abadi"
          />
        </div>
      </CenteredContent>
    </section>
  );
};

const TestimonialCard = (props) => {
  const { imgUrl, bodyText, customerName, customerCompany } = props;
  return (
    <div className="flex flex-col p-8 transition-all duration-150 ease-linear bg-white gap-y-8 hover:shadow-2xl rounded-3xl">
      <div className="w-[70px] h-[70px]">
        <img src={imgUrl} alt="customer" />
      </div>
      <p className="text-lg">{bodyText}</p>
      <div className="flex flex-col gap-y-1">
        <h3 className="text-xl font-bold">{customerName}</h3>
        <span className="text-color-grey-secondary">{customerCompany}</span>
      </div>
    </div>
  );
};

export default TestimonialSection;
