export default function TermsOfService() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-8 text-3xl font-semibold font-heading">
            Terms of Service
          </h2>
          <p>
            By accessing and using this service, you accept and agree to be
            bound by the terms and provision of this agreement. In addition,
            when using these particular services, you shall be subject to any
            posted guidelines or rules applicable to such services. Any
            participation in this service will constitute acceptance of this
            agreement. If you do not agree to abide by the above, please do not
            use this service.
          </p>
          <ul>
            <li className="py-10 border-b">
              <button className="w-full flex justify-between items-center text-left font-semibold font-heading">
                <span className="text-2xl font-semibold font-heading">
                  The {process.env.NEXT_PUBLIC_APP_TITLE} Service
                </span>
                <svg
                  className="flex-shrink-0"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.75 10C0.75 15.108 4.891 19.25 10 19.25C15.108 19.25 19.25 15.108 19.25 10C19.25 4.892 15.108 0.75 10 0.75C4.891 0.75 0.75 4.892 0.75 10Z"
                    stroke="#838EA4"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.52881 8.55774L9.99981 12.0437L13.4708 8.55774"
                    stroke="#838EA4"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <p className="mt-6 text-xl text-gray-500">
                We agree to provide you with access to the{' '}
                {process.env.NEXT_PUBLIC_APP_TITLE} service.
              </p>
              <h3 className="mb-8 mt-8 text-2xl font-semibold font-heading">
                Our commitments to our users
              </h3>
              <p className="mt-6 text-xl text-gray-500">
                We agree to provide an interface according to the features
                identified on this website. Support is available upon request.
                Please allow 24-48 business hours to receive a reply.
              </p>
            </li>
            <li className="py-10 border-b">
              <button className="w-full flex justify-between items-center text-left">
                <span className="text-2xl font-semibold font-heading">
                  Contact Details
                </span>
                <svg
                  className="flex-shrink-0"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.75 10C0.75 15.108 4.891 19.25 10 19.25C15.108 19.25 19.25 15.108 19.25 10C19.25 4.892 15.108 0.75 10 0.75C4.891 0.75 0.75 4.892 0.75 10Z"
                    stroke="#838EA4"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.52881 8.55774L9.99981 12.0437L13.4708 8.55774"
                    stroke="#838EA4"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <p className="mt-6 text-xl text-gray-500">
                <ul>
                  <li>
                    Support Email: {process.env.NEXT_PUBLIC_SUPPORT_EMAIL}{' '}
                  </li>
                  <li>Availability: 9-5PM EST M-F</li>
                </ul>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
