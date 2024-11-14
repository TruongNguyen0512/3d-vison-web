import Btn from "@/components/common/Btn";
import { TypographyH2, TypographySmall } from "@/components/common/Typography";
import NewsCard from "@/components/NewsCard";

export default function News() {
  return (
    <div className="lg:px-14">
      <TypographySmall>News</TypographySmall>
      <div className="xl:flex xl:gap-32">
        <div className="flex justify-between items-center my-5 xl:flex-col xl:justify-start xl:items-start xl:gap-20">
          <TypographyH2>Nổi bật</TypographyH2>
          <Btn>Danh sách tin tức</Btn>
        </div>
        <ul className="xl:py-24">
          <li className="mb-10">
            <NewsCard
              content="Dự án gây quỹ cộng đồng “Bảo vệ kho báu của Trái đất” đã giành Giải Đồng ở hạng mục PR tại Bảo tàng Khoa học và Tự nhiên Quốc gia x READYFOR ACC TOKYO GIẢI THƯỞNG SÁNG TẠO"
              publish="2024/10/31"
              path="/"
            />
          </li>
          <li className="mb-10">
            <NewsCard
              content="Dự án gây quỹ cộng đồng “Bảo vệ kho báu của Trái đất” đã giành Giải Đồng ở hạng mục PR tại Bảo tàng Khoa học và Tự nhiên Quốc gia x READYFOR ACC TOKYO GIẢI THƯỞNG SÁNG TẠO"
              publish="2024/10/31"
              path="/"
            />
          </li>
          <li className="mb-10">
            <NewsCard
              content="Dự án gây quỹ cộng đồng “Bảo vệ kho báu của Trái đất” đã giành Giải Đồng ở hạng mục PR tại Bảo tàng Khoa học và Tự nhiên Quốc gia x READYFOR ACC TOKYO GIẢI THƯỞNG SÁNG TẠO"
              publish="2024/10/31"
              path="/"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
