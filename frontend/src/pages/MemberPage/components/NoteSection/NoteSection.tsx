import ArticleCard from "@/components/ArticleCard";
import HeadingSection from "@/components/common/HeadingSection";
import ArticleThumnail from "@/assets/note_article.png";
import Btn from "@/components/common/Btn";

export default function NoteSection() {
  return (
    <div>
      <HeadingSection sectionName="Chú ý" des="Bài viết giới thiệu" />
      <ul className="py-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        <li>
          <ArticleCard
            id="01"
            thumnail={ArticleThumnail}
            title="Chiếu sáng xã hội bằng những suy nghĩ và chiến lược. Nơi mà những người làm trong ngành quảng cáo có thể tự giải phóng mình."
          />
        </li>
        <li>
          <ArticleCard
            id="01"
            thumnail={ArticleThumnail}
            title="Chiếu sáng xã hội bằng những suy nghĩ và chiến lược. Nơi mà những người làm trong ngành quảng cáo có thể tự giải phóng mình."
          />
        </li>
        <li>
          <ArticleCard
            id="01"
            thumnail={ArticleThumnail}
            title="Chiếu sáng xã hội bằng những suy nghĩ và chiến lược. Nơi mà những người làm trong ngành quảng cáo có thể tự giải phóng mình."
          />
        </li>
        <li>
          <ArticleCard
            id="01"
            thumnail={ArticleThumnail}
            title="Chiếu sáng xã hội bằng những suy nghĩ và chiến lược. Nơi mà những người làm trong ngành quảng cáo có thể tự giải phóng mình."
          />
        </li>
      </ul>
      <div className="flex justify-center mb-20 mt-10">
        <Btn>Danh sách bài viết</Btn>
      </div>
    </div>
  );
}
