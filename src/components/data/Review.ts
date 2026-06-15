import reviewerAvatar from "../../assets/imgs/IconoPerfil.png";

export interface Review {
  id: number;
  reviewerId: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
}

const reviewsBySellerId: Record<number, Review[]> = {
  1: [
    { id: 3, reviewerId: 2, name: "Camila Rojas",    avatar: reviewerAvatar, rating: 3, text: "Todo bien, aunque el envío tardó un poco más de lo esperado." },
  ],
  2: [
    { id: 4, reviewerId: 3, name: "Diego Herrera",   avatar: reviewerAvatar, rating: 5, text: "Vendedora muy amable, el artículo llegó en excelente estado." },
    { id: 5, reviewerId: 1, name: "Alfredo Medrano", avatar: reviewerAvatar, rating: 4, text: "Buena experiencia, respondió rápido y coordinó bien la entrega." },
    { id: 6, reviewerId: 4, name: "Valentina Cruz",  avatar: reviewerAvatar, rating: 5, text: "Todo perfecto, lo recomiendo sin dudar." },
  ],
  3: [
    { id: 8, reviewerId: 2, name: "Camila Rojas",    avatar: reviewerAvatar, rating: 4, text: "Buen vendedor, el artículo estaba en buen estado." },
  ],
  4: [
    { id: 10, reviewerId: 3, name: "Diego Herrera",  avatar: reviewerAvatar, rating: 5, text: "Increíble vendedora, súper detallista con el empaque." },
    { id: 11, reviewerId: 1, name: "Alfredo Medrano",avatar: reviewerAvatar, rating: 5, text: "Producto impecable y atención de primera." },
  ],
};

export function getSellerReviews(sellerId: number): Review[] {
  return reviewsBySellerId[sellerId] ?? [];
}

export function getVisibleReviews(sellerId: number): Review[] {
  return (reviewsBySellerId[sellerId] ?? [])
    .filter(r => r.reviewerId !== sellerId);
}

export function computeRating(reviews: Review[]): number {
  if (reviews.length === 0) return 0;
  return reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
}

let nextReviewId = 100;
const reviewSubscribers: (() => void)[] = [];

export function addReview(sellerId: number, review: Omit<Review, "id">): void {
  if (!reviewsBySellerId[sellerId]) reviewsBySellerId[sellerId] = [];
  reviewsBySellerId[sellerId].push({ ...review, id: nextReviewId++ });
  reviewSubscribers.forEach(fn => fn());
}

export function subscribeReviews(fn: () => void): () => void {
  reviewSubscribers.push(fn);
  return () => {
    const i = reviewSubscribers.indexOf(fn);
    if (i !== -1) reviewSubscribers.splice(i, 1);
  };
}
