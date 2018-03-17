import React from 'react';
import { Carousel } from 'antd';
import { Button, Icon } from 'antd';
import styles from './Big_slider.css';



const Big_slider = () => {
  return (
      <Carousel>
        <div className={styles.slider__item}>
          <div className={styles.slider__item_card}>
            <h2 className={styles.slider__title}>Ajax StreetSiren</h2>
            <p className={styles.slider__descr}>
                Працює на відстані до 2000 метрів
                від Ajax Hubна відкритому просторі
                або на декількох поверхах бізнес-центру
            </p>
            <Button className={styles.slider__button} type="danger" ghost>
              Подробнее<Icon type="right" />
            </Button>
          </div>
        </div>
        <div className={styles.slider__item}>
          <div className={styles.slider__item_card}>
            <h2 className={styles.slider__title}>Ajax StreetSiren</h2>
            <p className={styles.slider__descr}>
                Працює на відстані до 2000 метрів
                від Ajax Hubна відкритому просторі
                або на декількох поверхах бізнес-центру
            </p>
            <Button className={styles.slider__button} type="danger" ghost>
              Подробнее<Icon type="right" />
            </Button>
          </div>
        </div>
        <div className={styles.slider__item}>
          <div className={styles.slider__item_card}>
            <h2 className={styles.slider__title}>Ajax StreetSiren</h2>
            <p className={styles.slider__descr}>
                Працює на відстані до 2000 метрів
                від Ajax Hubна відкритому просторі
                або на декількох поверхах бізнес-центру
            </p>
            <Button className={styles.slider__button} type="danger" ghost>
              Подробнее<Icon type="right" />
            </Button>
          </div>
        </div>
        <div className={styles.slider__item}>
          <div className={styles.slider__item_card}>
            <h2 className={styles.slider__title}>Ajax StreetSiren</h2>
            <p className={styles.slider__descr}>
                Працює на відстані до 2000 метрів
                від Ajax Hubна відкритому просторі
                або на декількох поверхах бізнес-центру
            </p>
            <Button className={styles.slider__button} type="danger" ghost>
              Подробнее<Icon type="right" />
            </Button>
          </div>
        </div>

      </Carousel>
  );
};

Big_slider.propTypes = {
};

export default Big_slider;
