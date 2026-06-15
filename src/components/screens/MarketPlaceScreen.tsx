import { useTranslation } from "react-i18next";
import ProductGrid from "../templates/ProductGrid";
import EmptyState from "../ui/EmptyState";
import type { Product } from "../data/Product";
import type { UserProfile } from "../data/UserProfile";
import { useMarketplaceProducts } from "../../hooks/useMarketplaceProducts";

interface MarketPlaceScreenProps {
  currentUser: UserProfile;
  searchTerm?: string;
  onSearch?: (term: string) => void;
  onViewProduct: (product: Product) => void;
}

function MarketPlaceScreen({ currentUser, searchTerm = "", onSearch, onViewProduct }: MarketPlaceScreenProps) {
  const { t } = useTranslation();
  const { displayProducts, handleToggleFavorite } = useMarketplaceProducts(currentUser.id, searchTerm);

  return (
    <div className="h-full bg-beige overflow-y-auto no-scrollbar pb-28">
      {searchTerm && (
        <div className="px-6 sm:px-10 md:px-16 lg:px-20 pt-4 flex items-center gap-2">
          <span className="text-sm text-gray-500">
            {t("marketplace.resultsFor")} <strong className="color-secondary">"{searchTerm}"</strong>
          </span>
          <button onClick={() => onSearch?.("")} className="text-xs color-primary font-semibold underline">
            {t("marketplace.clear")}
          </button>
        </div>
      )}
      {displayProducts.length === 0
        ? <EmptyState message={searchTerm ? t("marketplace.noResultsFor", { term: searchTerm }) : t("marketplace.noProducts")} />
        : <ProductGrid
            products={displayProducts}
            onBuy={onViewProduct}
            onToggleFavorite={handleToggleFavorite}
          />
      }
    </div>
  );
}

export default MarketPlaceScreen;
