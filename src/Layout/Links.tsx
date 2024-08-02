import { Layers3 } from "lucide-react";
import { Store } from "lucide-react";
import { MessageSquareWarning } from "lucide-react";

const useLinks = () => {
  const dashBoardNavLinks = [
    {
      title: "links.jobCategory",
      href: "/jop-category",
      icon: <Layers3 />,
    },
    {
      title: "links.shopCategory",
      href: "/shop-category",
      icon: <Store />,
    },
    {
      title: "links.reportType",
      href: "/report-type",
      icon: <MessageSquareWarning />,
    },
  ];
  return {
    dashBoardNavLinks,
  };
};
export default useLinks;
