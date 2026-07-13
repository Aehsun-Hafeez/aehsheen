document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Pictures shown when a product card is clicked.
  // Swap these Unsplash links for your own product photos any time.
  const productGalleries = {
    tshirts: {
      title: 'T-shirts',
      description: 'Soft, comfortable custom tees for daily wear and events.',
      images: [
        { src: 'assets/tshirts/blackStickerTshirt.jpeg', name: 'Black half sleeves', detail: '100%  cotton with DTG / DTF or screen printing technology' },
        { src: 'assets/tshirts/simpleTshirt.jpg', name: 'Green half sleeves', detail: '100% cotton with light GSM' },
        { src: 'assets/tshirts/whiteTshirt.jpeg', name: 'White half sleeves', detail: '100% cotton with light GSM' },
        { src: 'assets/tshirts/submlimatedTshirt.jpeg', name: 'Sublimated half sleeves - Uniform', detail: 'Lightweight sublimated polyester T-shirt with vibrant all-over prints, breathable fabric, and lasting comfort.' },
        { src: 'assets/tshirts/sublimatedTshirt.jpeg', name: 'Sublimated cotton+polyester', detail: 'Cotton-polyester blend T-shirt with bright sublimated prints, breathable comfort, and excellent everyday durability' },
        { src: 'assets/tshirts/sublimatedTshirtFront.jpeg', name: 'Sublimated polyester - Uniform - Front', detail: '' },
        { src: 'assets/tshirts/sublimatedTshirtBack.jpeg', name: 'Sublimated polyester - Uniform - Back', detail: '' },
      ],
    },
    tracksuits: {
      title: 'Tracksuits',
      description: 'Clean and sporty sets that combine comfort with a polished look.',
      images: [
        { src: 'assets/tracksuits/Crop-top fleece.jpeg', name: 'Crop-top', detail: 'Stylish fleece crop-top tracksuit crafted for warmth, comfort, and a modern athletic look' },
        { src: 'assets/tracksuits/Embroidered terry.jpeg', name: 'Embroidered terry', detail: 'Premium terry fleece tracksuit featuring embroidered patches, a soft feel, and lasting comfort for everyday wear' },
        { src: 'assets/tracksuits/Patched fleece.jpeg', name: 'Patched fleece', detail: 'Stylish fleece tracksuit crafted for warmth, comfort, and a modern look' },
        { src: 'assets/tracksuits/Sulphur sunfaded top.jpeg', name: 'Sulphur sunfaded top', detail: 'Soft fleece hoodie with a unique sulphur acid wash effect and premium embroidery for a bold, stylish look' },
        { src: 'assets/tracksuits/Sulphur sunfaded bottoms.jpeg', name: 'Sulphur sunfaded bottoms', detail: 'Soft fleece trousers with a unique sulphur acid wash effect and premium embroidery for a bold, stylish look' },
      ],
    },
    sweatshirts: {
      title: 'Sweatshirts',
      description: 'Warm, stylish pieces for casual wear and branded outfits.',
      images: [
        { src: 'assets/sweatshirts/Camouflage screen-printed.jpeg', name: 'Camouflage', detail: 'Stay comfortable and stylish with this camouflage full-zip hoodie, finished with high-quality screen printing and a relaxed fit' },
        { src: 'assets/sweatshirts/Orange screen-printed.jpeg', name: 'Orange', detail: 'Stay warm in this orange fleece zip-up hoodie, designed with high-quality screen printing for a modern, sporty look' },
        { src: 'assets/sweatshirts/White screen-printed.jpeg', name: 'White', detail: 'Stay warm in this white fleece zip-up hoodie, designed with high-quality screen printing for a modern, sporty look' },
        { src: 'assets/sweatshirts/Hoodie after stitching-I.jpeg', name: 'Black after stitching-I', detail: 'Designed for everyday comfort, this black fleece screen-printed zipper hoodie features a clean stitched finish and a classic all-black look' },
        { src: 'assets/sweatshirts/Hoodies after stitching-II.jpeg', name: 'Hoodies after stitching-II', detail: 'Designed for everyday comfort, these black and white fleece screen-printed zipper hoodie features a clean stitched finish and a classic all-black and white look' },
        { src: 'assets/sweatshirts/Mockup-I.jpeg', name: 'Mockup-I', detail: 'A premium hoodie mockup with realistic fabric texture and fit' },
        { src: 'assets/sweatshirts/Mockup-II.jpeg', name: 'Mockup-II', detail: 'A premium hoodie mockup with realistic fabric texture and fit' },
        { src: 'assets/sweatshirts/Mockup-III.jpeg', name: 'Mockup-III', detail: 'A premium hoodie mockup with realistic fabric texture and fit' },
      ],
    },
    varsity: {
      title: 'Varsity jackets',
      description: 'Classic jackets with a premium finish for bold streetwear statements.',
      images: [
        { src: 'assets/varsity/goonSquadVarsity.jpeg', name: 'GoonSquad Varsity', detail: 'A modern varsity jacket featuring waterproof memory fabric and premium embroidered patches, offering comfort, durability, and standout appeal' },
        { src: 'assets/varsity/Mickey-front.jpeg', name: 'Mickey - Front', detail: 'This premium varsity jacket combines a soft wool body, durable leather sleeves, and high-quality chenille patches for a standout finish' },
        { src: 'assets/varsity/Mickey-back.jpeg', name: 'Mickey - Back', detail: 'This premium varsity jacket combines a soft wool body, durable leather sleeves, and high-quality chenille patches for a standout finish' },
        { src: 'assets/varsity/Space-front.jpeg', name: 'Space - Front', detail: 'This premium varsity jacket combines a soft wool body, durable leather sleeves, and high-quality chenille patches for a standout finish' },
        { src: 'assets/varsity/Space-back.jpeg', name: 'Space - Back', detail: 'This premium varsity jacket combines a soft wool body, durable leather sleeves, and high-quality chenille patches for a standout finish' },
        { src: 'assets/varsity/Memory material.avif', name: 'Cordura  material', detail: 'This waterproof Cordura varsity jacket delivers superior durability, lightweight comfort, and a modern athletic look' },
      ],
    },
    bubble: {
      title: 'Bubble jackets',
      description: 'Lightweight and trendy outerwear ideal for cooler weather.',
      images: [
        { src: 'assets/bubble/Purple sublimated.jpeg', name: 'Purple sublimated', detail: 'Designed with premium memory fabric and vibrant sublimation printing, this bubble jacket delivers warmth, durability, and standout style' },
        { src: 'assets/bubble/Simple.jpeg', name: 'Simple', detail: 'Stay warm in style with this black memory fabric bubble jacket, designed for comfort, weather resistance, and everyday wear' },
        { src: 'assets/bubble/Sublimated.jpeg', name: 'Sublimated', detail: 'Stay warm in style with this black memory fabric bubble jacket, designed for comfort, weather resistance, and everyday wear' },
      ],
    },
  };

  const modal = document.getElementById('productModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalGallery = document.getElementById('modalGallery');
  const modalClose = modal ? modal.querySelector('.modal-close') : null;
  let lastFocused = null;
  let activeImages = [];
  let activeTitle = '';

  const openModal = (key) => {
    const data = productGalleries[key];
    if (!data || !modal) return;

    // Support both plain URL strings and { src, name, detail } objects.
    activeImages = data.images.map((item, i) =>
      typeof item === 'string'
        ? { src: item, name: `${data.title} photo ${i + 1}`, detail: '' }
        : { src: item.src, name: item.name || `${data.title} photo ${i + 1}`, detail: item.detail || '' }
    );
    activeTitle = data.title;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.description;
    modalGallery.innerHTML = '';
    activeImages.forEach((item, i) => {
      const figure = document.createElement('figure');
      figure.className = 'gallery-item';

      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.name;
      img.loading = 'lazy';

      const caption = document.createElement('figcaption');
      caption.textContent = item.name;

      figure.addEventListener('click', () => openLightbox(i));
      figure.appendChild(img);
      figure.appendChild(caption);

      if (item.detail) {
        const detail = document.createElement('p');
        detail.className = 'gallery-detail';
        detail.textContent = item.detail;
        figure.appendChild(detail);
      }

      modalGallery.appendChild(figure);
    });

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (modalClose) modalClose.focus();
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  };

  document.querySelectorAll('.product-card').forEach((card) => {
    card.addEventListener('click', () => {
      lastFocused = card;
      openModal(card.dataset.product);
    });
  });

  if (modal) {
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
      if (event.target === modal) closeModal();
    });
  }

  // Lightbox: open a gallery photo at full size, with prev/next navigation.
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  let lightboxIndex = 0;

  const openLightbox = (index) => {
    if (!lightbox || !activeImages.length) return;
    lightboxIndex = index;
    showLightboxImage();
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  };

  const lightboxCaption = document.getElementById('lightboxCaption');

  const showLightboxImage = () => {
    lightboxIndex = (lightboxIndex + activeImages.length) % activeImages.length;
    const item = activeImages[lightboxIndex];
    lightboxImage.src = item.src;
    lightboxImage.alt = item.name;
    if (lightboxCaption) {
      lightboxCaption.textContent = item.detail ? `${item.name} — ${item.detail}` : item.name;
    }
  };

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
  };

  if (lightbox) {
    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox-prev').addEventListener('click', () => {
      lightboxIndex -= 1;
      showLightboxImage();
    });
    lightbox.querySelector('.lightbox-next').addEventListener('click', () => {
      lightboxIndex += 1;
      showLightboxImage();
    });
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', (event) => {
    if (lightbox && lightbox.classList.contains('open')) {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') {
        lightboxIndex -= 1;
        showLightboxImage();
      }
      if (event.key === 'ArrowRight') {
        lightboxIndex += 1;
        showLightboxImage();
      }
      return;
    }
    if (event.key === 'Escape' && modal && modal.classList.contains('open')) closeModal();
  });
});
