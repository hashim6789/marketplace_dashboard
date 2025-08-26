import clsx from "clsx";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  icon: React.ReactNode;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, icon }) => {
  return (
    <nav
      className="bg-[#F2F2F2] text-[#424242] py-6 px-20 w-full font-roboto"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-3">
        {/* Icon + Home */}
        <li className="flex items-center space-x-3">
          <span className="w-[16px] h-[16px] flex items-center justify-center">
            {icon}
          </span>
          <a
            href={items[0]?.href}
            className="text-md font-normal focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {items[0]?.label}
          </a>
        </li>

        {/* Remaining items */}
        {items.slice(1).map((item, index) => (
          <li key={item.label} className="flex items-center space-x-3">
            <span className="text-[14px] font-normal">/</span>
            <a
              href={item.href}
              className={clsx(
                "text-md font-normal  focus:outline-none focus:ring-2 focus:ring-indigo-500",
                index === items.length - 2 && "pointer-events-none"
              )}
              aria-current={index === items.length - 2 ? "page" : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
