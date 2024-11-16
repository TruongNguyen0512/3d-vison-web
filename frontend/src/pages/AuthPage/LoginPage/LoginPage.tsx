import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import BannerAuthen from "@/assets/auth_banner.png";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import apiInstance from "@/api/apiInstance";
import { Link, useNavigate } from "react-router-dom";
import { TypographyH2, TypographySmall } from "@/components/common/Typography";

// Định nghĩa schema với Zod
const formSchema = z.object({
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .min(1, { message: "Email is required." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

// Suy diễn kiểu dữ liệu từ schema
type FormData = z.infer<typeof formSchema>;

export default function LoginPage() {
  const navigate = useNavigate();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (data: FormData) => {
    try {
      const res = await apiInstance.post("/register", data);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
      } else {
        navigate("/auth/login");
      }
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  // Hàm xử lý khi submit form
  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
    handleLogin(data);
  };

  return (
    <div className="max-w-[800px] w-full h-max-content p-9 bg-white shadow-2xl">
      <img
        src={BannerAuthen}
        alt="banner-authen"
        className="w-full object-cover pb-10"
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <TypographyH2>Login</TypographyH2>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Email <span className="text-[#E51520]">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john.doe@example.com"
                    {...field}
                    className="border-[1px] bg-[#f5f8fa]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Password <span className="text-[#E51520]">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="******"
                    {...field}
                    className="border-[1px] bg-[#f5f8fa]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            type="submit"
            className="w-20 h-10 bg-[#E73650] text-white rounded"
          >
            Submit
          </button>
        </form>
      </Form>
      <TypographySmall>
        Bạn chưa có tài khoản?{" "}
        <Link to="/auth/register" className="text-[#E73650]">
          Đăng kí
        </Link>
      </TypographySmall>
    </div>
  );
}
