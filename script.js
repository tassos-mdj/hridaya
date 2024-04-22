function menuTransition(x) {
    x.classList.toggle("change");
  }

  const sliderEl = document.querySelector(".blaze-slider");

  const blazeSlider = new BlazeSlider(sliderEl, {
    all: {
      enableAutoplay: true,
      slidesToScroll: 3,
      slidesToShow: 3,
      transitionDuration: 300,
      loop: true
    },
    "(max-width: 900px)": {
      slidesToShow: 2,
      slidesToShow: 2,
      slidesGap: "40px"
    },
    "(max-width: 500px)": {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  });

  // listen for slide event
  blazeSlider.onSlide(
    (pageIndex, firstVisibleSlideIndex, lastVisibleSlideIndex) => {
      console.log({
        pageIndex,
        firstVisibleSlideIndex,
        lastVisibleSlideIndex
      });
    }
  );
