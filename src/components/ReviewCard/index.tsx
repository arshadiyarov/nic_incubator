import { FaRegStarHalfStroke, FaStar, FaRegStar } from "react-icons/fa6";
import { ReviewCardProps } from "@/components/ReviewCard/ReviewCardProps";

const ReviewCard: React.FC<ReviewCardProps> = ({
  body,
  author,
  rating,
  country,
  src,
}) => {
  const renderStars = () => {
    const stars = [];
    const roundedRating = Math.round(rating / 10) * 10;

    for (let i = 0; i < 5; i++) {
      if (roundedRating >= (i + 1) * 20) {
        stars.push(<FaStar key={i} />);
      } else if (roundedRating >= i * 20 + 10) {
        stars.push(<FaRegStarHalfStroke key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }

    return stars;
  };

  return (
    <div>
      <div className={"bg-white px-10 py-8 text-text font-manrope"}>{body}</div>
      <div
        className={
          "bg-secondary text-white px-10 py-4 flex justify-between items-center"
        }
      >
        <div className={" flex items-center gap-5"}>
          <img src={src} alt="revUser1" width={65} />
          <div>
            <div className={"flex text-xs gap-1"}>{renderStars()}</div>
            <div className={"font-playfair font-semibold"}>{author}</div>
            <div className={"text-xs"}>{country}</div>
          </div>
        </div>
        <div>
          <img src="/img/revFigure.svg" alt="revFigure" />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
