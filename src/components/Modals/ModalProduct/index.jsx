import React from "react";

import "./ModalProduct.scss";

class ModalProduct extends React.Component {
  render() {
    return (
      <div className="modal-product">
        <div className="modal-product__container">
          <div className="modal-product__content content-modal-product">
            <div className="content-modal-product__main">
              <div className="content-modal-product__left">
                <h2 className="content-modal-product__title">Игрушка король</h2>
                <div className="content-modal-product__description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Culpa esse necessitatibus repellendus temporibus voluptatum
                    vel, facere, similique voluptatem et provident obcaecati
                    quasi totam doloribus cumque praesentium voluptatibus.
                    Similique, fuga distinctio.
                  </p>
                </div>
                <span className="content-modal-product__price">18 200</span>
              </div>
              <div className="content-modal-product__right">
                <div className="content-modal-product__img">
                  <img
                    src="https://s1.ticketm.net/dam/a/3ea/a7473588-64b1-4fac-ad26-596f70b993ea_647801_TABLET_LANDSCAPE_LARGE_16_9.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="content-modal-product__btns">
              <button type="button" className="btn btn_black-outline">
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalProduct;
