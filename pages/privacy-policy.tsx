export default function PrivacyPolicy() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-8 text-3xl font-semibold font-heading">
            Privacy Policy
          </h2>
          <ul>
            <li className="py-10 border-b">
              <button className="w-full flex justify-between items-center text-left font-semibold font-heading">
                <span className="text-2xl font-semibold font-heading">
                  Type of Information We Collect
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
                We currently collect and process the following information:
                <ul>
                  <li>First and Last Name</li>
                  <li>Company Name</li>
                  <li>Email</li>
                  <li>Password</li>
                  <li>Card Details (processed and handled by Stripe)</li>
                  <li>Usage statistics (for improving the product)</li>
                </ul>
              </p>
            </li>
            <li className="py-10 border-b">
              <button className="w-full flex justify-between items-center text-left font-semibold font-heading">
                <span className="text-2xl font-semibold font-heading">
                  How we get the information and why we have it
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
                Most of the personal information we process is provided to us
                directly by you for one of the following reasons:
                <ul>
                  <li>
                    Provide you with access to the product (e.g. login details)
                  </li>
                  <li>To handle disputes between parties on the platform</li>
                </ul>
                We use the information that you have given us in order to allow
                you use of the site, for instance to log you in, send you emails
                about your account (note, not marketing emails) etc. We may
                share this information with Stripe in order to handle and
                process payments as well as any legal authority that has the
                power to request such information from us. You are able to
                remove your consent at any time. You can do this by contacting
                {process.env.NEXT_PUBLIC_SUPPORT_EMAIL} and we will handle your
                information appropriately.
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
