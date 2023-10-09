module.exports = ({ env }) => ({
    upload: {
      config: {
        breakpoints: {
          article: 954,
          aside: 332,
          old: 302,
          category: 628,
          category_small: 332,
          article_tablet: 906,
          aside_tablet: 312,
          old_tablet: 225,
          category_tablet: 598,
          category_small_tablet: 317,
          article_mobile: 735,
          aside_mobile: 396,
          old_mobile: 80,
          category_mobile: 735,
          category_small_mobile: 396
        },
      },
    },
  });
  /*
загружать фотографии с соотношнием сторон в оригинале
1.33 больше по ширине 954 х 717 
1.89 больше по ширине 954 х 505x
1.1 больше по высоте 460 х 505
  */