import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type ImageSectionProps = {
  image: string | undefined;
  isLoading: boolean;
};

const ImageSection = ({ image, isLoading }: ImageSectionProps) => {
  return (
    <div className="w-full sm:w-2/5 lg:w-3/12 px-4 lg:px-2 flex justify-center">
      {image && !isLoading && (
        <img
          src={image}
          className="max-w-64 sm:max-h-64 lg:max-w-full aspect-square object-cover object-center rounded-lg"
        />
      )}
      {isLoading && (
        <div className="max-w-64 sm:max-h-64 lg:max-w-full lg:max-h-fit aspect-square object-cover object-center">
          <Skeleton height="220px" width="100%" />
        </div>
      )}
    </div>
  );
};

export default ImageSection;
