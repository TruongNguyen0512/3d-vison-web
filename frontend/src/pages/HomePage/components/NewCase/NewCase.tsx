import ArticleCard from "@/components/ArticleCard";
import { TypographyH2, TypographySmall } from "@/components/common/Typography";
import ArticleThumnail from "@/assets/article_thumnail.png";
import Btn from "@/components/common/Btn";

export default function NewCase() {
  return (
    <div className="lg:px-14">
      <TypographySmall>New Cases</TypographySmall>
      <TypographyH2>Nghiên cứu điển hình</TypographyH2>
      <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3 py-10">
        <li>
          <ArticleCard
            id="001"
            thumnail={ArticleThumnail}
            title="Tổng số tiền hỗ trợ vượt quá 200 triệu yên. Giới thiệu lợi ích của việc sử dụng Dịch vụ gây quỹ tờ rơi và ví dụ về dự án!"
          />
        </li>
        <li>
          <ArticleCard
            id="001"
            thumnail={ArticleThumnail}
            title="Tổng số tiền hỗ trợ vượt quá 200 triệu yên. Giới thiệu lợi ích của việc sử dụng Dịch vụ gây quỹ tờ rơi và ví dụ về dự án!"
          />
        </li>
        <li>
          <ArticleCard
            id="001"
            thumnail={ArticleThumnail}
            title="Tổng số tiền hỗ trợ vượt quá 200 triệu yên. Giới thiệu lợi ích của việc sử dụng Dịch vụ gây quỹ tờ rơi và ví dụ về dự án!"
          />
        </li>
      </ul>
      <div className="flex justify-center">
        <Btn>
          <TypographySmall classStyle="hover:text-white">
            Danh sách bài viết
          </TypographySmall>
        </Btn>
      </div>
    </div>
  );
}
