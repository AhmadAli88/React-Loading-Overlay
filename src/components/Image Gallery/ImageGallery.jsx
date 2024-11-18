import { useEffect, useState } from 'react';
import LoadingOverlay from 'react-loading-overlay';
import { Circles } from 'react-loader-spinner';
import PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = () => {
      let loadedImagesCount = 0;
      const totalImages = images.length;

      images.forEach((img) => {
        const image = new Image();

        image.onload = () => {
          loadedImagesCount++;
          if (loadedImagesCount === totalImages) {
            setLoading(false); // All images are loaded
          }
        };

        image.onerror = () => {
          loadedImagesCount++;
          if (loadedImagesCount === totalImages) {
            setLoading(false); // All images have been attempted to load
          }
        };

        image.src = img.url;
      });
    };

    loadImages();
  }, [images]);

  return (
    <LoadingOverlay
      active={loading}
      spinner={<Circles />}
      text='Loading gallery...'
    >
      <div className='gallery'>
        {images.map((image) => (
          <img key={image.id} src={image.url} alt={image.description} />
        ))}
      </div>
    </LoadingOverlay>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // Unique identifier for each image
      url: PropTypes.string.isRequired, // URL of the image
      description: PropTypes.string.isRequired, // Description of the image
    })
  ).isRequired,
};
export default ImageGallery;
