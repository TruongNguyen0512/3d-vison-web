import Content from "@/components/layouts/Content";
import Introduction from "./components/Introduction/";
import ServiceIntroduction from "./components/ServiceIntroduction";
import SectionComponent from "@/components/layouts/Section";
import Problems from "./components/Problems";
import Solution from "./components/Solution";
import NewTheory from "./components/NewTheory";
import NewCase from "./components/NewCase";
import News from "./components/News";

import DefaultLayout from "@/layouts/DefaultLayout";

export default function HomePage() {
  return (
    <DefaultLayout>
      <Content>
        <SectionComponent>
          <Introduction />
        </SectionComponent>
        <SectionComponent>
          <ServiceIntroduction />
        </SectionComponent>
        <SectionComponent>
          <Problems />
        </SectionComponent>
        <SectionComponent>
          <Solution />
        </SectionComponent>
        <SectionComponent>
          <NewTheory />
        </SectionComponent>
        <SectionComponent>
          <NewCase />
        </SectionComponent>
        <SectionComponent>
          <News></News>
        </SectionComponent>
      </Content>
    </DefaultLayout>
  );
}
