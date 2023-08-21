import { useContext } from "react";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const { items, searchByTitle, setSearchByTitle, filteredItems } =
    useContext(ShoppingCartContext);

  const renderView = () => {
    if (filteredItems?.length > 0) {
      return filteredItems?.map((item) => {
        return <Card key={item.id} data={item} />;
      });
    } else {
      return <div>We don't have anything</div>;
    }
  };

  return (
    <>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-4 mb-6 focus:outline-none"
        onChange={(e) => setSearchByTitle(e.target.value)}
      />
      <div className="grid gap-8 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </>
  );
} 
export { Home };
