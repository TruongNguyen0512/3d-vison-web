import ArticleCard from "@/components/ArticleCard";
import ArticleThumnail from "@/assets/article_thumnail.png";
import HeadingSection from "@/components/common/HeadingSection";

export default function NewTheory() {
  return (
    <div className="lg:px-14">
      <HeadingSection sectionName="New Theory" des="Lý thuyết gây quỹ" />
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
    </div>
  );
}
