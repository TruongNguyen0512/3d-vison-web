import HeadingSection from "@/components/common/HeadingSection";
import Content from "@/components/layouts/Content";
import DefaultLayout from "@/layouts/DefaultLayout";
import HashTag from "./components/HashTag";
import ArticleCard from "@/components/ArticleCard";
import ArticleThumnail from "@/assets/article_thumnail.png";
import { TypographyLarge } from "@/components/common/Typography";
import { MoveRight } from "lucide-react";

export default function CasePage() {
  return (
    <DefaultLayout>
      <Content>
        <HeadingSection sectionName="Case" des="Danh sách bài viết" />
        <p className="font-semibold text-base text-center my-10">Từ khóa</p>
        <p className="font-semibold text-base text-[#f50057] text-center my-5">
          ALL
        </p>
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          <HashTag path="/" nameHashTag="Vídụvềcácdựán" />
          <HashTag path="/" nameHashTag="Vídụvềcácdựán" />
          <HashTag path="/" nameHashTag="Vídụvềcácdựán" />
          <HashTag path="/" nameHashTag="Vídụvềcácdựán" />
          <HashTag path="/" nameHashTag="Vídụvềcácdựán" />
          <HashTag path="/" nameHashTag="Vídụvềcácdựán" />
          <HashTag path="/" nameHashTag="Vídụvềcácdựán" />
          <HashTag path="/" nameHashTag="Vídụvềcácdựán" />
        </div>
        <ul className="grid gap-10 px-14 pt-20 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:py-3">
          <li>
            <ArticleCard
              thumnail={ArticleThumnail}
              title="Tôi luôn muốn nói lời cảm ơn đến các nhà tài trợ của tôi. Ngân hàng Tủy xương Nhật Bản nhìn lại hỗ trợ gây quỹ trong khoảng nửa năm ..."
              publish="2024.10.23"
              id="01"
            />
          </li>
          <li>
            <ArticleCard
              thumnail={ArticleThumnail}
              title="Tôi luôn muốn nói lời cảm ơn đến các nhà tài trợ của tôi. Ngân hàng Tủy xương Nhật Bản nhìn lại hỗ trợ gây quỹ trong khoảng nửa năm ..."
              publish="2024.10.23"
              id="01"
            />
          </li>
          <li>
            <ArticleCard
              thumnail={ArticleThumnail}
              title="Tôi luôn muốn nói lời cảm ơn đến các nhà tài trợ của tôi. Ngân hàng Tủy xương Nhật Bản nhìn lại hỗ trợ gây quỹ trong khoảng nửa năm ..."
              publish="2024.10.23"
              id="01"
            />
          </li>
          <li>
            <ArticleCard
              thumnail={ArticleThumnail}
              title="Tôi luôn muốn nói lời cảm ơn đến các nhà tài trợ của tôi. Ngân hàng Tủy xương Nhật Bản nhìn lại hỗ trợ gây quỹ trong khoảng nửa năm ..."
              publish="2024.10.23"
              id="01"
            />
          </li>
          <li>
            <ArticleCard
              thumnail={ArticleThumnail}
              title="Tôi luôn muốn nói lời cảm ơn đến các nhà tài trợ của tôi. Ngân hàng Tủy xương Nhật Bản nhìn lại hỗ trợ gây quỹ trong khoảng nửa năm ..."
              publish="2024.10.23"
              id="01"
            />
          </li>
          <li>
            <ArticleCard
              thumnail={ArticleThumnail}
              title="Tôi luôn muốn nói lời cảm ơn đến các nhà tài trợ của tôi. Ngân hàng Tủy xương Nhật Bản nhìn lại hỗ trợ gây quỹ trong khoảng nửa năm ..."
              publish="2024.10.23"
              id="01"
            />
          </li>
        </ul>
        <div className="flex justify-center items-center py-10">
          <button className="my-10 px-4 py-3 rounded-full text-white font-bold bg-[#E75650] flex justify-between items-center gap-4">
            <TypographyLarge>Hiển thị nhiều hơn</TypographyLarge>
            <MoveRight />
          </button>
        </div>
      </Content>
    </DefaultLayout>
  );
}
