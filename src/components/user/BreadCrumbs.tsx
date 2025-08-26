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
      className="bg-gray-100 text-gray-700 py-4 px-2 sm:py-5 sm:px-3 w-full overflow-x-auto"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-2">
        {/* Icon before first breadcrumb */}
        <li className="flex items-center">
          <span className="text-sm">{icon}</span>
          <span className="mx-2 text-sm">/</span>
        </li>

        {items.map((item, index) => (
          <li key={item.label} className="flex items-center">
            <a
              href={item.href}
              className={clsx(
                "text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500",
                index === items.length - 1 && "pointer-events-none"
              )}
              aria-current={index === items.length - 1 ? "page" : undefined}
            >
              {item.label}
            </a>
            {index < items.length - 1 && (
              <span className="mx-2 text-sm">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
