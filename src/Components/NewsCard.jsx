import { FaEye, FaRegBookmark } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdTrendingUp } from "react-icons/md";

const NewsCard = ({ news }) => {
  // Destructure the object to simplify access
  const { title, rating, total_view, author, thumbnail_url, details, tags } =
    news;

  // Format the published date
  const publishedDate = new Date(author.published_date).toLocaleDateString();

  return (
    <div className="card bg-white shadow-md rounded-lg overflow-hidden p-3">
      <div className="flex justify-between">
        <div className="flex items-center gap-3 mb-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-medium">{author.name}</p>
            <p className="text-sm text-gray-500">{publishedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <FaRegBookmark size={25} />
          <IoShareSocialOutline size={25} />
        </div>
      </div>
      {/* News Image */}
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </figure>

      <div className="card-body p-4">
        {/* News Title */}
        <h2 className="card-title text-xl font-bold mb-2">{title}</h2>

        {/* Author info */}

        {/* Brief Details */}
        <p className="text-gray-700 mb-4">
          {details.length > 200 ? details.slice(0, 200) + "..." : details}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="badge badge-outline text-xs border-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer section with view count and rating */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 text-gray-600">
            <FaEye />
            <span>{total_view}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            {rating.badge === "trending" && (
              <MdTrendingUp className="text-orange-500" />
            )}
            <span>{rating.number}</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-4">
          <button className="btn btn-primary btn-sm">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
