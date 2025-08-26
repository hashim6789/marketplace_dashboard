import ContentNavtabs from "../../components/user/ContentNavtabs";
import ContentSearch from "../../components/user/ContentSearch";
import Filters from "../../components/user/Filters";
import Pagination from "../../components/user/Pagination";
import ProductList from "../../components/user/ProductList";

function Products() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 px-4 py-6">
      {/* Left Sidebar: Filters */}
      <aside className="w-full lg:w-1/4">
        <Filters />
      </aside>

      {/* Right Content Area */}
      <main className="w-full lg:w-3/4 flex flex-col gap-4">
        <ContentNavtabs />
        <ContentSearch />
        <ProductList />
        <Pagination />
      </main>
    </div>
  );
}

export default Products;
