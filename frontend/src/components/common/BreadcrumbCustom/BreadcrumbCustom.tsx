import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";

type TBreadcrumb = {
  path: string;
};

export default function BreadcrumbCustom({ path }: TBreadcrumb) {
  const paths = path.split("/").filter(Boolean);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {paths.map((part, index) => {
          const fullPath = `/${paths.slice(0, index + 1).join("/")}`;

          return (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink href={fullPath}>
                / {part || "Home"}
              </BreadcrumbLink>
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
