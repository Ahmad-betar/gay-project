import { FC } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export interface NavLinksType {
  href: string;
  icon?: JSX.Element | string;
  id?: number;
  title: string;
}
const NavLinks: FC<{ Open: boolean; links: NavLinksType[] }> = ({
  Open,
  links,
}) => {
  const { t } = useTranslation();

  return (
    <>
      {links.map((link) => {
        return (
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "text-xl text-center flex justify-start items-center p-2 rounded-md m-1 my-4"
                : "text-center text-xl hover:bg-white-500 flex justify-start items-center p-2 rounded-md m-1 my-4 dark:hover:bg-black-400"
            }
            to={link.href}
            key={link.id}
          >
            {link.icon}
            {Open && <p className="pl-2">{t(link.title)}</p>}
          </NavLink>
        );
      })}
    </>
  );
};

export default NavLinks;
