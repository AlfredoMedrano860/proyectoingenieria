import { useTranslation } from "react-i18next";
import ScreenLayout from "../layout/ScreenLayout";
import ProductCard from "../templates/ProductCard";
import EmptyState from "../ui/EmptyState";
import type { Product } from "../data/Product";
import { useMyProducts } from "../../hooks/useMyProducts";

interface MyProductsScreenProps {
  userId: number;
  onBack: () => void;
  onEdit: (product: Product) => void;
}

function MyProductsScreen({ userId, onBack, onEdit }: MyProductsScreenProps) {
  const { t } = useTranslation();
  const { userProducts, handleDelete } = useMyProducts(userId);

  return (
    <ScreenLayout title={t("myProducts.title")} onBack={onBack}>
      <div className="px-6 sm:px-10 md:px-16 lg:px-20 mt-6 pb-10">
        {userProducts.length === 0
          ? <EmptyState message={t("myProducts.empty")} />
          : <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {userProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isOwner
                  onBuy={onEdit}
                  onToggleFavorite={handleDelete}
                  buttonLabel={t("myProducts.edit")}
                />
              ))}
            </div>
        }
      </div>
    </ScreenLayout>
  );
}

export default MyProductsScreen;
