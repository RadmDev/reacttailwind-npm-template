import {
  Badge,
  BenefitList,
  Button,
  CenteredContent,
  Heading2,
} from "../../components";

const ShowcaseSection = () => {
  return (
    <section id="showcase">
      <CenteredContent variant="flex flex-row items-center py-28 gap-x-20">
        <div className="flex flex-col w-1/2 gap-y-4">
          <div className="relative w-[512px] h-[450px] group transition-all duration-150 ease-in-out">
            <img src="/images/showcase_vid_bg.png" alt="schowcase bg" />
            <VideoBox variant="absolute -top-5 -right-5 w-[510px] h-[450px]">
              <img src="/images/showcase_vid_main.png" alt="main showcase" />
            </VideoBox>
            <div className="absolute -z-20 top-44 left-64 group-hover:z-20">
              <button className="flex items-center justify-center p-5 rounded-full bg-color-blue outline-8 outline outline-white/30 hover:opacity-80">
                <svg
                  width="28"
                  height="30"
                  viewBox="0 0 28 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.9436 8.14545C29.1103 11.2547 29.1103 18.7453 23.9436 21.8546L12.9204 28.4881C7.5884 31.6968 0.795473 27.8565 0.795474 21.6335L0.795474 8.36649C0.795475 2.14346 7.5884 -1.69676 12.9204 1.51194L23.9436 8.14545Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-x-4">
            <VideoBox variant="w-[166px] h-[130px]">
              <img src="/images/sc_prev_1.png" alt="video preview" />
            </VideoBox>
            <VideoBox variant="w-[166px] h-[130px]">
              <img src="/images/sc_prev_2.png" alt="video preview" />
            </VideoBox>
            <VideoBox variant="w-[166px] h-[130px]">
              <img src="/images/sc_prev_3.png" alt="video preview" />
            </VideoBox>
          </div>
        </div>
        <div className="flex flex-col gap-y-10">
          <Badge variant="bg-color-orange">
            <span className="text-sm font-bold text-white">
              Built For Winners
            </span>
          </Badge>
          <div className="flex flex-col gap-y-3">
            <Heading2>Watch How It Works</Heading2>
            <p className="text-lg">
              We designed a lot of features that can applied <br />{" "}
              automatically so you do not have to run.
            </p>
          </div>
          <div className="flex flex-col gap-y-5">
            <BenefitList iconWidth={30} iconHeight={30} iconColor="orange">
              Auto running when reaches certain number
            </BenefitList>
            <BenefitList iconWidth={30} iconHeight={30} iconColor="orange">
              Calling backup when you overwhelmed
            </BenefitList>
            <BenefitList iconWidth={30} iconHeight={30} iconColor="orange">
              Sending invoices to client completed projects
            </BenefitList>
            <BenefitList iconWidth={30} iconHeight={30} iconColor="orange">
              Turn off tracker when the client not agree
            </BenefitList>
            <BenefitList iconWidth={30} iconHeight={30} iconColor="orange">
              More great features coming soon
            </BenefitList>
          </div>
          <div className="flex flex-row items-center gap-x-5">
            <Button variant="primarySmall">Get Free Trial</Button>
            <div className="relative flex flex-row items-center">
              <PhotoBox variant="absolute -top-1 left-0 w-[32px] h-[32px]">
                <img src="/images/sc_people_1.png" alt="photo" />
              </PhotoBox>
              <PhotoBox variant="absolute -top-1 left-6 w-[32px] h-[32px]">
                <img src="/images/sc_people_2.png" alt="photo" />
              </PhotoBox>
              <PhotoBox variant="absolute -top-1 left-12 w-[32px] h-[32px]">
                <img src="/images/sc_people_3.png" alt="photo" />
              </PhotoBox>
              <p className="ml-24 text-lg">
                <span className="font-bold">992</span> people just signed up
              </p>
            </div>
          </div>
        </div>
      </CenteredContent>
    </section>
  );
};

const VideoBox = (props) => {
  const { children, variant } = props;
  return <div className={`rounded-3xl  ${variant}`}>{children}</div>;
};

const PhotoBox = (props) => {
  const { children, variant } = props;
  return <div className={`rounded-full  ${variant}`}>{children}</div>;
};

export default ShowcaseSection;
