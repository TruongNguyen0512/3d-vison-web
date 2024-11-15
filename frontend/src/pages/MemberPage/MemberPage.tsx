import BreadcrumbCustom from "@/components/common/BreadcrumbCustom/BreadcrumbCustom";
import HeadingSection from "@/components/common/HeadingSection";
import Content from "@/components/layouts/Content";
import MemberCard from "@/components/MemberCard";
import DefaultLayout from "@/layouts/DefaultLayout";
import { Link, useLocation } from "react-router-dom";
import Avatar from "@/assets/avatar.png";
import SectionComponent from "@/components/layouts/Section";
import NoteSection from "./components/NoteSection";
import {
  TypographyH2,
  TypographyLarge,
  TypographySmall,
} from "@/components/common/Typography";
import { ArrowUpRight } from "lucide-react";
import Btn from "@/components/common/Btn";

export default function MemberPage() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <DefaultLayout>
      <Content>
        <div className="mb-12 mt-10">
          <BreadcrumbCustom path={path} />
        </div>
        <HeadingSection sectionName="Thành viên" des="Thành viên" />
        <ul className="my-10 grid grid-cols-1 gap-3 xl:px-8 lg:grid-cols-2 xl:grid-cols-3 lg:px-0">
          <li>
            <MemberCard
              avatar={Avatar}
              userName="Shin Hisata"
              position="Chuyên gia giám tuyển/Người gây quỹ được chứng nhận liên kết"
              introduction="Tốt nghiệp Khoa Sư phạm Đại học Chiba. Gia nhập READYFOR sau khi làm việc tại một công ty quảng cáo về lập kế hoạch và sản xuất, thành lập văn phòng CEO, giám đốc nhân sự và giám đốc phát triển dịch vụ. Tham gia vào phát triển dịch vụ và phát triển tổ chức kể từ khi thành lập bộ phận dịch vụ gây quỹ. Dự án `` Bảo vệ kho báu của Trái đất '' của Bảo tàng Khoa học và Tự nhiên Quốc gia đã ghi nhận số lượng và số lượng người ủng hộ cao nhất trong hoạt động huy động vốn từ cộng đồng trong nước*. (*Tính đến tháng 7 năm 2024)"
            />
          </li>
          <li>
            <MemberCard
              avatar={Avatar}
              userName="Shin Hisata"
              position="Chuyên gia giám tuyển/Người gây quỹ được chứng nhận liên kết"
              introduction="Tốt nghiệp Khoa Sư phạm Đại học Chiba. Gia nhập READYFOR sau khi làm việc tại một công ty quảng cáo về lập kế hoạch và sản xuất, thành lập văn phòng CEO, giám đốc nhân sự và giám đốc phát triển dịch vụ. Tham gia vào phát triển dịch vụ và phát triển tổ chức kể từ khi thành lập bộ phận dịch vụ gây quỹ. Dự án `` Bảo vệ kho báu của Trái đất '' của Bảo tàng Khoa học và Tự nhiên Quốc gia đã ghi nhận số lượng và số lượng người ủng hộ cao nhất trong hoạt động huy động vốn từ cộng đồng trong nước*. (*Tính đến tháng 7 năm 2024)"
            />
          </li>
          <li>
            <MemberCard
              avatar={Avatar}
              userName="Shin Hisata"
              position="Chuyên gia giám tuyển/Người gây quỹ được chứng nhận liên kết"
              introduction="Tốt nghiệp Khoa Sư phạm Đại học Chiba. Gia nhập READYFOR sau khi làm việc tại một công ty quảng cáo về lập kế hoạch và sản xuất, thành lập văn phòng CEO, giám đốc nhân sự và giám đốc phát triển dịch vụ. Tham gia vào phát triển dịch vụ và phát triển tổ chức kể từ khi thành lập bộ phận dịch vụ gây quỹ. Dự án `` Bảo vệ kho báu của Trái đất '' của Bảo tàng Khoa học và Tự nhiên Quốc gia đã ghi nhận số lượng và số lượng người ủng hộ cao nhất trong hoạt động huy động vốn từ cộng đồng trong nước*. (*Tính đến tháng 7 năm 2024)"
            />
          </li>
          <li>
            <MemberCard
              avatar={Avatar}
              userName="Shin Hisata"
              position="Chuyên gia giám tuyển/Người gây quỹ được chứng nhận liên kết"
              introduction="Tốt nghiệp Khoa Sư phạm Đại học Chiba. Gia nhập READYFOR sau khi làm việc tại một công ty quảng cáo về lập kế hoạch và sản xuất, thành lập văn phòng CEO, giám đốc nhân sự và giám đốc phát triển dịch vụ. Tham gia vào phát triển dịch vụ và phát triển tổ chức kể từ khi thành lập bộ phận dịch vụ gây quỹ. Dự án `` Bảo vệ kho báu của Trái đất '' của Bảo tàng Khoa học và Tự nhiên Quốc gia đã ghi nhận số lượng và số lượng người ủng hộ cao nhất trong hoạt động huy động vốn từ cộng đồng trong nước*. (*Tính đến tháng 7 năm 2024)"
            />
          </li>
        </ul>
        <SectionComponent>
          <NoteSection />
        </SectionComponent>
      </Content>
      <div className="bg-[#fafafa] w-full py-24">
        <div className="w-full max-w-[1024px] mx-auto px-5 xl:px-0">
          <TypographySmall classStyle="text-[#f50057]">
            Tuyển dụng
          </TypographySmall>
          <TypographyH2 classStyle="py-4">Thông tin tuyển dụng</TypographyH2>
          <Link to="/" className="flex justify-start gap-4 my-5">
            <TypographyLarge>
              Chúng tôi đang tìm kiếm người để làm việc với chúng tôi
            </TypographyLarge>
            <ArrowUpRight size={30} />
          </Link>
          <Btn>
            <TypographySmall>Đi tới bài viết</TypographySmall>
          </Btn>
        </div>
      </div>
    </DefaultLayout>
  );
}
