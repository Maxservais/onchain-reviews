const stats = [
  { label: "Superchain Apps", value: "500+" },
  { label: "Total Value Locked", value: "$10+ billion" },
  { label: "Active addresses (last 24 hours)", value: "250,000+" },
];

export default function SuperchainStats() {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6 lg:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-8 gap-y-16 mt-24 sm:mt-42">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white pb-2">
            Superchain in Numbers
          </h2>
          <div className="flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-base text-gray-700 dark:text-gray-300 pb-2 sm:pb-0">
                The superchain is home to hundreds of awesome Apps and secures
                billions of dollars in value. Scaling together, not apart.
              </p>
              <div className="mt-10 flex ">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col-reverse gap-y-4"
                    >
                      <dt className="text-base leading-7 text-gray-600 dark:text-gray-300">
                        {stat.label}
                      </dt>
                      <dd className="text-3xl sm:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:relative w-full lg:h-full">
          <img
            className="lg:absolute lg:inset-0 w-full h-96 lg:h-full object-cover object-center rounded-2xl"
            src="/images/hero-superchain.webp"
            alt="Superchain Stats"
            width={512}
            height={512}
          />
        </div>
      </div>
    </div>
  );
}
