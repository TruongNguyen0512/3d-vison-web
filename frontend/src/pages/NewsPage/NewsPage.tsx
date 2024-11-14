import BreadcrumbCustom from "@/components/common/BreadcrumbCustom/BreadcrumbCustom";
import HeadingSection from "@/components/common/HeadingSection";
import Content from "@/components/layouts/Content";
import NewsCard from "@/components/NewsCard";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useLocation } from "react-router-dom";

export default function NewsPage() {
  const location = useLocation();
  const path: string = location.pathname;
  return (
    <DefaultLayout>
      <Content>
        <div className="mb-12 mt-10">
          <BreadcrumbCustom path={path} />
        </div>
        <HeadingSection sectionName="Tin Tức" des="Chú ý" />
        <ul className="my-20">
          <li>
            <NewsCard
              publish="2024/10/31"
              content="Tại Bảo tàng Tự nhiên và Khoa học Quốc gia Lady for Akt Tokyo Creativity Awards, dự án gây quỹ cộng đồng 'Bảo vệ kho báu của Trái đất' đã giành giải Đồng ở hạng mục kéo "
              path="/"
            />
            <NewsCard
              publish="2024/10/31"
              content="Tại Bảo tàng Tự nhiên và Khoa học Quốc gia Lady for Akt Tokyo Creativity Awards, dự án gây quỹ cộng đồng 'Bảo vệ kho báu của Trái đất' đã giành giải Đồng ở hạng mục kéo "
              path="/"
            />
            <NewsCard
              publish="2024/10/31"
              content="Tại Bảo tàng Tự nhiên và Khoa học Quốc gia Lady for Akt Tokyo Creativity Awards, dự án gây quỹ cộng đồng 'Bảo vệ kho báu của Trái đất' đã giành giải Đồng ở hạng mục kéo "
              path="/"
            />
            <NewsCard
              publish="2024/10/31"
              content="Tại Bảo tàng Tự nhiên và Khoa học Quốc gia Lady for Akt Tokyo Creativity Awards, dự án gây quỹ cộng đồng 'Bảo vệ kho báu của Trái đất' đã giành giải Đồng ở hạng mục kéo "
              path="/"
            />
            <NewsCard
              publish="2024/10/31"
              content="Tại Bảo tàng Tự nhiên và Khoa học Quốc gia Lady for Akt Tokyo Creativity Awards, dự án gây quỹ cộng đồng 'Bảo vệ kho báu của Trái đất' đã giành giải Đồng ở hạng mục kéo "
              path="/"
            />
          </li>
        </ul>
      </Content>
    </DefaultLayout>
  );
}
