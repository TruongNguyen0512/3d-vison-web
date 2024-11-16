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

const formSchema = z.object({
  organization: z.string().min(1, { message: "Organization is required." }),
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .min(1, { message: "Email is required." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
  website: z
    .string()
    .url({ message: "Please enter a valid website URL." })
    .optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function RegisterPage() {
  const navigate = useNavigate();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      organization: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      website: "",
    },
  });

  const handleRegister = async (data: FormData) => {
    try {
      const res = await apiInstance.post("/register", data);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        navigate("/auth/login");
      }
    } catch (error: any) {
      console.error("Registration error:", error);
      if (error.code === "ECONNABORTED") {
        alert("Registration request timed out. Please try again.");
      } else {
        alert(error.response?.data?.message || "Registration failed. Please try again.");
      }
    }
  };

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
    handleRegister(data);
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
          <TypographyH2>Register</TypographyH2>
          <FormField
            control={form.control}
            name="organization"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Organization <span className="text-[#E51520]">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your organization"
                    {...field}
                    className="border-[1px] bg-[#f5f8fa]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    First Name <span className="text-[#E51520]">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John"
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
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Last Name <span className="text-[#E51520]">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Doe"
                      {...field}
                      className="border-[1px] bg-[#f5f8fa]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

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

          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://example.com"
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
        Bạn đã có tài khoản?
        <Link to="/auth/login" className="text-[#E73650]">
          Đăng nhập
        </Link>
      </TypographySmall>
    </div>
  );
}
