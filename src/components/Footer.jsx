// eslint-disable-next-line no-unused-vars
import React from "react";

function Footer() {
  return (
    <footer className="py-16 bg-gray-900 w-10/12 mx-auto">
      <div className="py-5 flex flex-col md:flex-row justify-center md:justify-evenly">
        <div className="mx-auto md:mx-0 text-center md:text-left mb-6">
          <h2 className="text-white text-3xl font-bold mb-3">About</h2>
          <div className="mb-2">
            <small>
              <u>
                <a className="text-gray-400" href="/about-us">
                  About us
                </a>
              </u>
            </small>
          </div>
          <div className="mb-2">
            <small>
              <u>
                <a className="text-gray-400" href="/contact-us">
                  Contact us
                </a>
              </u>
            </small>
          </div>
        </div>
        <div className="mx-auto md:mx-0 text-center md:text-left mb-6">
          <h2 className="text-white text-3xl mb-3 font-bold">Landing page</h2>
          <div className="mb-2">
            <small>
              <u>
                <a className="text-gray-400" href="/">
                  Home
                </a>
              </u>
            </small>
          </div>
          <div className="mb-2">
            <small>
              <u>
                <a className="text-gray-400" href="/whatsapp">
                  Whatsapp
                </a>
              </u>
            </small>
          </div>
          <div className="mb-2">
            <small>
              <u>
                <a className="text-gray-400" href="/schedule_call">
                  Schedule Call
                </a>
              </u>
            </small>
          </div>
          <div className="mb-2">
            <small>
              <u>
                <a className="text-gray-400" href="/demo_session">
                  Demo Session
                </a>
              </u>
            </small>
          </div>
          <div className="mb-2">
            <small>
              <u>
                <a className="text-gray-400" href="/webinar">
                  Webinar
                </a>
              </u>
            </small>
          </div>
          <div className="mb-2">
            <small>
              <u>
                <a className="text-gray-400" href="/plans">
                  Plans
                </a>
              </u>
            </small>
          </div>
        </div>
        <div className="mx-auto md:mx-0 text-center md:text-left">
          <h2 className="text-white text-3xl mb-3 font-bold">Policies</h2>
          <div className="mb-2">
            <small>
              <u>
                <a className="text-gray-400" href="/terms_of_service">
                  Terms of service
                </a>
              </u>
            </small>
          </div>
          <div className="mb-2">
            <small>
              <u>
                <a className="text-gray-400" href="/privacy_policy">
                  Privacy policy
                </a>
              </u>
            </small>
          </div>
          <div className="mb-2">
            <small>
              <u>
                <a className="text-gray-400" href="/refund_policy">
                  Refund policy
                </a>
              </u>
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
