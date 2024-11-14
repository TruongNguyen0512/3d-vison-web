import { TypographyH2, TypographySmall } from "@/components/common/Typography";
import CardSolution from "./CardSolution";

export default function Solution() {
  return (
    <div className="lg:px-14">
      <TypographySmall>Solution</TypographySmall>
      <TypographyH2>
        Các dịch vụ RADYFOR có thể giải quyết vấn đề này
      </TypographyH2>
      <div className="grid grid-cols-1 gap-5 my-10 lg:grid-cols-2">
        <CardSolution
          id="01"
          title="Hỗ trợ tận tay"
          description="Dịch vụ một cửa từ chiến lược đến thực thi"
          content="Ngay cả khi bạn thực hiện các biện pháp một cách mù quáng, sẽ không có sự nhất quán nếu bạn không có chiến lược. Mặt khác, ngay cả khi bạn có một chiến lược chi tiết, nếu bạn không thực hiện được các biện pháp, bạn sẽ không thu được kết quả nào. Chúng tôi hỗ trợ cả chiến lược và việc thực thi để ngăn chặn các dự án rơi vào tình trạng khó khăn."
        />
        <CardSolution
          id="01"
          title="Hỗ trợ tận tay"
          description="Dịch vụ một cửa từ chiến lược đến thực thi"
          content="Ngay cả khi bạn thực hiện các biện pháp một cách mù quáng, sẽ không có sự nhất quán nếu bạn không có chiến lược. Mặt khác, ngay cả khi bạn có một chiến lược chi tiết, nếu bạn không thực hiện được các biện pháp, bạn sẽ không thu được kết quả nào. Chúng tôi hỗ trợ cả chiến lược và việc thực thi để ngăn chặn các dự án rơi vào tình trạng khó khăn."
        />
        <CardSolution
          id="01"
          title="Hỗ trợ tận tay"
          description="Dịch vụ một cửa từ chiến lược đến thực thi"
          content="Ngay cả khi bạn thực hiện các biện pháp một cách mù quáng, sẽ không có sự nhất quán nếu bạn không có chiến lược. Mặt khác, ngay cả khi bạn có một chiến lược chi tiết, nếu bạn không thực hiện được các biện pháp, bạn sẽ không thu được kết quả nào. Chúng tôi hỗ trợ cả chiến lược và việc thực thi để ngăn chặn các dự án rơi vào tình trạng khó khăn."
        />
        <CardSolution
          id="01"
          title="Hỗ trợ tận tay"
          description="Dịch vụ một cửa từ chiến lược đến thực thi"
          content="Ngay cả khi bạn thực hiện các biện pháp một cách mù quáng, sẽ không có sự nhất quán nếu bạn không có chiến lược. Mặt khác, ngay cả khi bạn có một chiến lược chi tiết, nếu bạn không thực hiện được các biện pháp, bạn sẽ không thu được kết quả nào. Chúng tôi hỗ trợ cả chiến lược và việc thực thi để ngăn chặn các dự án rơi vào tình trạng khó khăn."
        />
      </div>
    </div>
  );
}
