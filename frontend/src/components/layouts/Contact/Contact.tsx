import { TypographyH2, TypographyLarge } from "@/components/common/Typography";
import { FileText, Mail } from "lucide-react";
import Btn from "@/components/common/Btn";

export default function Contact() {
  return (
    <div className="w-full bg-black h-auto text-white py-10 px-10 xl:px-14">
      <div className="xl:flex xl:justify-between xl:items-center gap-5 max-w-[1200px] w-full mx-auto xl:px-14 relative">
        <div className="bg-white absolute w-full h-[1px] top-1/2 left-0 xl:h-full xl:w-[1px] xl:top-0 xl:left-1/2"></div>
        <div className="xl:px-12 py-8">
          <div className="flex justify-center items-center gap-2">
            <FileText className="text-white" />
            <TypographyH2 classStyle="text-white">
              Yêu cầu thông tin
            </TypographyH2>
          </div>
          <TypographyLarge classStyle="my-4">
            Nếu bạn đang xem xét một dịch vụ gây quỹ, chúng tôi sẽ gửi tài liệu
            cho bạn, vì vậy vui lòng sử dụng nút bên dưới để yêu cầu chúng.
          </TypographyLarge>
          <div className="flex justify-center items-center">
            <Btn className="bg-black border-white hover:!text-white">
              Yêu cầu thông tin
            </Btn>
          </div>
        </div>
        <div className="xl:px-12 py-8">
          <div className="flex justify-center items-center gap-2">
            <Mail className="text-white" />
            <TypographyH2 classStyle="text-white">
              Yêu cầu thông tin
            </TypographyH2>
          </div>
          <TypographyLarge classStyle="my-4">
            Nếu bạn đang xem xét một dịch vụ gây quỹ, chúng tôi sẽ gửi tài liệu
            cho bạn, vì vậy vui lòng sử dụng nút bên dưới để yêu cầu chúng.
          </TypographyLarge>
          <div className="flex justify-center items-center">
            <Btn className="bg-black border-white hover:!text-white">
              Liên hệ
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
}
