import {
  TypographyH2,
  TypographyH3,
  TypographyP,
  TypographySmall,
} from "@/components/common/Typography";

import { NavLink } from "react-router-dom";
import ServiceNav from "./ServiceNav";
import { ChevronRight } from "lucide-react";
import useWindowSize from "@/hooks/useWindowSize";
import ServiceImg from "@/assets/image4.png";
import ServiceImgSimple1 from "@/assets/image2.png";
import ServiceImgSimple2 from "@/assets/image3.png";

export default function ServiceIntroduction() {
  const { width } = useWindowSize();
  return (
    <div className="lg:px-14">
      <TypographySmall>Service</TypographySmall>
      <TypographyH2 classStyle="uppercase">
        ReadyFor FunDraising Service
      </TypographyH2>
      <TypographyP>
        "READYFOR Fundraising Service" is a service in which fundraisers with
        extensive practical experience provide tailored, optimal fundraising
        solutions for organizations and initiatives that require continuous
        fundraising. We provide uniquely developed "strategy design" and
        "execution support" based on the theory of fundraising that suits the
        current times.
      </TypographyP>
      <div className="p-5 flex flex-col justify-center items-center lg:flex-row ">
        <div className="max-w-[75%] w-3/4 mx-auto">
          {width < 1024 ? (
            <img src={ServiceImg} alt="service-img" className="w-full my-8" />
          ) : (
            <div>
              <img src={ServiceImgSimple1} alt="service-img" />
              <img src={ServiceImgSimple2} alt="service-img" />
            </div>
          )}
        </div>
        <div className="w-full">
          <div className="w-full flex flex-col justify-center items-center mb-5 lg:mb-10 xl:ml-[-20%]">
            <TypographyH3>
              <NavLink to="/">Go to Fundraising Strategy Design Page</NavLink>
            </TypographyH3>
            <div className=" w-full mt-5 py-5 border-black border-t-[1px] lg:grid grid-cols-2 gap-3 ">
              <ServiceNav path="/auth/login">
                <div className="h-full flex justify-between items-center">
                  <TypographySmall>
                    Analysis of the current situation
                  </TypographySmall>
                  <ChevronRight className=" inline-block" />
                </div>
              </ServiceNav>
              <ServiceNav path="/auth/login">
                <div className="h-full flex justify-between items-center">
                  <TypographySmall>
                    Analysis of the current situation
                  </TypographySmall>
                  <ChevronRight className=" inline-block" />
                </div>
              </ServiceNav>
              <ServiceNav path="/auth/login">
                <div className="h-full flex justify-between items-center">
                  <TypographySmall>
                    Analysis of the current situation
                  </TypographySmall>
                  <ChevronRight className=" inline-block" />
                </div>
              </ServiceNav>
              <ServiceNav path="/auth/login">
                <div className="h-full flex justify-between items-center">
                  <TypographySmall>
                    Analysis of the current situation
                  </TypographySmall>
                  <ChevronRight className=" inline-block" />
                </div>
              </ServiceNav>
              <ServiceNav path="/auth/login">
                <div className="h-full flex justify-between items-center">
                  <TypographySmall>
                    Analysis of the current situation
                  </TypographySmall>
                  <ChevronRight className=" inline-block" />
                </div>
              </ServiceNav>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center mb-5 lg:mb-10 xl:ml-[-20%]">
            <TypographyH3>
              <NavLink to="/">Go to Fundraising Strategy Design Page</NavLink>
            </TypographyH3>
            <div className=" w-full mt-5 py-5 border-black border-t-[1px] lg:grid grid-cols-2 gap-3">
              <ServiceNav path="/auth/login">
                <div className="h-full flex justify-between items-center">
                  <TypographySmall>
                    Analysis of the current situation
                  </TypographySmall>
                  <ChevronRight className=" inline-block" />
                </div>
              </ServiceNav>
              <ServiceNav path="/auth/login">
                <div className="h-full flex justify-between items-center">
                  <TypographySmall>
                    Analysis of the current situation
                  </TypographySmall>
                  <ChevronRight className=" inline-block" />
                </div>
              </ServiceNav>
              <ServiceNav path="/auth/login">
                <div className="h-full flex justify-between items-center">
                  <TypographySmall>
                    Analysis of the current situation
                  </TypographySmall>
                  <ChevronRight className=" inline-block" />
                </div>
              </ServiceNav>
              <ServiceNav path="/auth/login">
                <div className="h-full flex justify-between items-center">
                  <TypographySmall>
                    Analysis of the current situation
                  </TypographySmall>
                  <ChevronRight className=" inline-block" />
                </div>
              </ServiceNav>
              <ServiceNav path="/auth/login">
                <div className="h-full flex justify-between items-center">
                  <TypographySmall>
                    Analysis of the current situation
                  </TypographySmall>
                  <ChevronRight className=" inline-block" />
                </div>
              </ServiceNav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
