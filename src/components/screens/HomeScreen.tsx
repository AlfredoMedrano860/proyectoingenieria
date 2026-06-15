import { useState } from "react";
import { useTranslation } from "react-i18next";
import FeaturedBanner from "../templates/FeaturedBanner";
import ProductGrid from "../templates/ProductGrid";
import EmptyState from "../ui/EmptyState";
import type { Product } from "../data/Product";
import type { UserProfile } from "../data/UserProfile";
import { getProducts } from "../data/ProductStore";
import { useFavoriteToggle } from "../../hooks/useFavoriteToggle";

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
  onViewProduct: (product: Product) => void;
  currentUser: UserProfile;
}

function HomeScreen({ onNavigate, onViewProduct, currentUser }: HomeScreenProps) {
  const { t } = useTranslation();
  const [products, setProducts] = useState<Product[]>(() =>
    getProducts().filter(p => p.seller.id !== currentUser.id)
  );
  const handleToggleFavorite = useFavoriteToggle(
    () => setProducts(getProducts().filter(p => p.seller.id !== currentUser.id))
  );

  return (
    <div className="h-full bg-beige overflow-y-auto no-scrollbar pb-28">
      <FeaturedBanner />
      {products.length === 0 ? (
        <EmptyState message={t("home.noProducts")} />
      ) : (
        <ProductGrid
          products={products}
          onBuy={onViewProduct}
          onToggleFavorite={handleToggleFavorite}
          onViewAll={() => onNavigate("marketplace")}
        />
      )}
    </div>
  );
}

export default HomeScreen;
