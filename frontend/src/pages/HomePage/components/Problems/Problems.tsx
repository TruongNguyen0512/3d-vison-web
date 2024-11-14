import HeadingSection from "@/components/common/HeadingSection";
import { TypographyLarge, TypographyP } from "@/components/common/Typography";
import { Check } from "lucide-react";

export default function Problems() {
  return (
    <div className="lg:px-14">
      <HeadingSection
        sectionName="Problem"
        des="Bạn có bất kỳ vấn đề nào trong số này không?"
      />
      <div className="lg:ml-10 my-10">
        <div className="bg-black rounded px-3 py-2 h-auto w-max my-4">
          <TypographyLarge classStyle="text-white">
            Những thách thức chiến lược
          </TypographyLarge>
        </div>
        <ul>
          <li className="flex items-center gap-4 mb-5">
            <Check size={25} />
            <TypographyP classStyle="flex-1 !mt-0">
              Tôi muốn coi việc quyên góp như một trụ cột mới của việc gây quỹ,
              nhưng tôi không biết bắt đầu từ đâu...
            </TypographyP>
          </li>
          <li className="flex items-center gap-4 mb-5">
            <Check size={25} />
            <TypographyP classStyle="flex-1 !mt-0">
              Đã lâu chúng tôi không thể cập nhật hoạt động kinh doanh của mình
              và cũng không thể quyên góp theo thời gian...
            </TypographyP>
          </li>
          <li className="flex items-center gap-4 mb-5">
            <Check size={25} />
            <TypographyP classStyle="flex-1 !mt-0">
              Việc giải quyết loại người nào đang ủng hộ tổ chức của bạn và vì
              động cơ nào thấp...
            </TypographyP>
          </li>
        </ul>
      </div>
      <div className="lg:ml-10 my-10">
        <div className="bg-black rounded px-3 py-2 h-auto w-max my-4">
          <TypographyLarge classStyle="text-white">
            Những thách thức chiến lược
          </TypographyLarge>
        </div>
        <ul>
          <li className="flex items-center gap-4 mb-5">
            <Check size={25} />
            <TypographyP classStyle="flex-1 !mt-0">
              Tôi muốn coi việc quyên góp như một trụ cột mới của việc gây quỹ,
              nhưng tôi không biết bắt đầu từ đâu...
            </TypographyP>
          </li>
          <li className="flex items-center gap-4 mb-5">
            <Check size={25} />
            <TypographyP classStyle="flex-1 !mt-0">
              Đã lâu chúng tôi không thể cập nhật hoạt động kinh doanh của mình
              và cũng không thể quyên góp theo thời gian...
            </TypographyP>
          </li>
          <li className="flex items-center gap-4 mb-5">
            <Check size={25} />
            <TypographyP classStyle="flex-1 !mt-0">
              Việc giải quyết loại người nào đang ủng hộ tổ chức của bạn và vì
              động cơ nào thấp...
            </TypographyP>
          </li>
        </ul>
      </div>
    </div>
  );
}
