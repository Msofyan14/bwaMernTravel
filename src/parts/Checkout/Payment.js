import React from "react";
import { Fade } from "react-awesome-reveal";

import InputText from "elements/Form/InputText";
import InputFile from "elements/Form/InputFile";

import logoBca from "assets/images/logo-bca.jpg";
import logoMandiri from "assets/images/logo-mandiri.jpg";

export default function Payment(props) {
  const { data, ItemDetails, checkout } = props;

  const tax = 10;
  const subTotal = ItemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;

  // console.log(data);

  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg border-end py-lg-5 px-5 mb-3 mb-lg-0 ">
            <Fade delay={300}>
              <p className="mb-4">Transfer Pembayaran:</p>
              <p>Tax: {tax}%</p>
              <p>Sub total: ${subTotal} USD</p>
              <p>Total: ${grandTotal} USD</p>

              <div className="row mt-4 ">
                <div className="col-3 text-center">
                  <img src={logoBca} alt="Bank central asia" width={60} />
                </div>
                <div className="col-12 col-lg">
                  <dl>
                    <dd>Bank Cental Asia</dd>
                    <dd>2208 1996</dd>
                    <dd>BuildWith Angga</dd>
                  </dl>
                </div>
              </div>

              <div className="row">
                <div className="col-3 text-center">
                  <img src={logoMandiri} alt="Bank Mandiri" width={60} />
                </div>
                <div className="col-12 col-lg">
                  <dl>
                    <dd>Bank Mandiri</dd>
                    <dd>2208 1996</dd>
                    <dd>BuildWith Angga</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>

          <div
            className="col-12 col-lg-5 py-lg-5 px-5  "
            style={{ paddingLeft: 80 }}
          >
            <Fade delay={600}>
              <label htmlFor="proofPayment">Upload Bukti Transfer</label>
              <InputFile
                accept="image/*"
                id="proofPayment"
                name="proofPayment"
                value={data.proofPayment}
                onChange={props.onChange}
              />

              <label htmlFor="bankName">Asal Bank</label>
              <InputText
                id="bankName"
                name="bankName"
                type="text"
                value={data.bankName}
                onChange={props.onChange}
              />
              <label htmlFor="bankHolder">Nama Pengirim</label>
              <InputText
                id="bankHolder"
                name="bankHolder"
                type="text"
                value={data.bankHolder}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
