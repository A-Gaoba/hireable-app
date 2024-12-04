import Image from 'next/image';

const About = () => {
  return (
    <section className="py-6 dark:bg-gray-950 flex flex-col justify-center items-center">
      <span className="rounded-lg bg-blue-50 dark:bg-gray-900 px-2.5 py-1 text-xs w-max mx-auto font-semibold tracking-wide text-blue-700 dark:text-white">
        About
      </span>
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col md:flex-row gap-16">
        {/* Left Image Section */}
        <div className="flex md:flex-1">
          <Image
            src="/about.png"
            alt="Working on housing"
            width={1300}
            height={800}
            className="w-full md:h-full object-cover rounded-3xl"
          />
        </div>
        {/* Right Text Section */}
        <div className="md:w-1/2 lg:w-[54%] space-y-12 text-neutral-700 dark:text-neutral-300 md:py-8">
          <h1 className="text-neutral-900 dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl">
            Land your dream job faster and easier with us
          </h1>
          <p>
            Finding the right job doesn’t have to be complicated. We simplify the process, connecting you with opportunities that match your skills and ambitions. Let’s make your job search stress-free and efficient!
          </p>
          {/* Mission and Vision Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Mission */}
            <div className="p-5 sm:p-6 lg:p-8 space-y-6 rounded-3xl bg-neutral-100 dark:bg-gray-950 border border-neutral-200 dark:border-neutral-800">
              <span className="rounded-xl bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 w-max p-3 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
              </span>
              <h2 className="font-semibold text-xl text-neutral-900 dark:text-white">
                Our mission
              </h2>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>

            {/* Vision */}
            <div className="p-5 sm:p-6 lg:p-8 space-y-6 rounded-3xl bg-neutral-100 dark:bg-gray-950 border border-neutral-200 dark:border-neutral-800">
              <span className="rounded-xl bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 w-max p-3 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              <h2 className="font-semibold text-xl text-neutral-900 dark:text-white">
                Our vision
              </h2>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
