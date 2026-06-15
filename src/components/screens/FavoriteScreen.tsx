import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { Product } from "../data/Product";
import ProductGrid from "../templates/ProductGrid";
import EmptyState from "../ui/EmptyState";
import { getFavorites } from "../data/ProductStore";
import { useFavoriteToggle } from "../../hooks/useFavoriteToggle";

interface FavoriteScreenProps {
  onViewProduct: (product: Product) => void;
}

function FavoriteScreen({ onViewProduct }: FavoriteScreenProps) {
  const { t } = useTranslation();
  const [favorites, setFavorites] = useState<Product[]>(getFavorites);
  const handleToggleFavorite = useFavoriteToggle(() => setFavorites(getFavorites()));

  return (
    <div className="h-full bg-beige overflow-y-auto no-scrollbar pb-28">
      {favorites.length === 0
        ? <EmptyState message={t("favorites.noFavorites")} />
        : <ProductGrid
            products={favorites}
            onBuy={onViewProduct}
            onToggleFavorite={handleToggleFavorite}
          />
      }
    </div>
  );
}

export default FavoriteScreen;
