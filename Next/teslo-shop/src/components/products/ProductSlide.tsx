import Image from "next/image";
import { Slide } from "react-slideshow-image";

interface Props {
  images: string[];
}

export const ProductSlide = ({ images }: Props) => {
  return (
    <Slide easing="ease" duration={7000} indicators arrows>
      {images.map((image) => {
        const url = `/products/${image}`;
        return (
          <div
            key={image}
            style={{
              width: "100%",
              height: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <Image
              src={url}
              alt={`Product Image ${image}`}
              width={500}
              height={500}
              objectFit="cover"
            />
            {/* <img
              src={url}
              alt={`Product Image ${image}`}
              style={{
                width: "100%",
                maxWidth: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            /> */}
          </div>
        );
      })}
    </Slide>
  );
};
