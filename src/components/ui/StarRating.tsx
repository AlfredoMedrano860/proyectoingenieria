import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  reviews?: number;
  size?: number;
}

function StarRating({ rating, reviews, size = 20 }: StarRatingProps) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          strokeWidth={1.5}
          stroke="var(--color-primary)"
          fill={star <= Math.round(rating) ? "var(--color-primary)" : "none"}
        />
      ))}
      {reviews !== undefined && (
        <span className="text-[14px] text-[hsl(26,11%,38%)] ml-1">
          {rating.toFixed(1)} ({reviews})
        </span>
      )}
    </div>
  );
}

export default StarRating;