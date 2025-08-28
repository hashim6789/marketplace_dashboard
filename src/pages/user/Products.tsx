import ContentNavtabs from "../../components/user/ContentNavtabs";
import ContentSearch from "../../components/user/ContentSearch";
import Filters from "../../components/user/Filters";
import Pagination from "../../components/user/Pagination";
import ProductList from "../../components/user/ProductList";

function Products() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 px-16 py-6">
      {/* Left Sidebar: Filters */}
      <aside className="w-full lg:w-1/4">
        <Filters />
      </aside>

      {/* Right Content Area */}
      <main className="relative w-full flex flex-col gap-2 min-h-[600px]">
        <ContentNavtabs />
        <ContentSearch />
        <ProductList />

        {/* Fixed Pagination */}
        <div className="absolute bottom-0 left-0 w-full">
          <Pagination />
        </div>
      </main>
    </div>
  );
}

export default Products;
