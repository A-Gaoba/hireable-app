type IconType = "default-ico" | string;

const iconRender = (val: IconType): JSX.Element => {
  switch (val) {
    case "default-ico":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2zm0 4.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM10 9a.75.75 0 01.75.75v2.546l.943-1.048a.75.75 0 111.114 1.004l-2.25 2.5a.75.75 0 01-1.114 0l-2.25-2.5a.75.75 0 111.114-1.004l.943 1.048V9.75A.75.75 0 0110 9z"
            clipRule="evenodd"
          />
        </svg>
      );
    default:
      return <span>No Icon Available</span>;
  }
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col p-5 xl:p-7 space-y-3 rounded-lg shadow-md bg-neutral-100 dark:bg-gray-950 border border-neutral-200 dark:border-neutral-800">
      <span className="text-purple-600">{iconRender(icon)}</span>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300 text-justify line-clamp-2">{description}</p>
    </div>
  );
};

interface Service {
  id: number;
  title: string;
  description: string;
  icon: IconType;
}

const services: Service[] = [
  {
    id: 1,
    title: "Service name 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, omnis placeat, atque nostrum praesentium veritatis enim repudiandae corporis",
    icon: "default-ico",
  },
  {
    id: 2,
    title: "Service name 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, omnis placeat, atque nostrum praesentium veritatis enim repudiandae corporis",
    icon: "default-ico",
  },
  {
    id: 3,
    title: "Service name 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, omnis placeat, atque nostrum praesentium veritatis enim repudiandae corporis",
    icon: "default-ico",
  },
  {
    id: 4,
    title: "Service name 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, omnis placeat, atque nostrum praesentium veritatis enim repudiandae corporis",
    icon: "default-ico",
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-6 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto dark:bg-gray-950">
        <div className="flex flex-col space-y-16 px-5 sm:px-16 md:px-20 lg:px-28 py-8 dark:bg-gray-950 rounded-lg">
          <div className="flex flex-col justify-center text-center mx-auto md:max-w-3xl space-y-5">
            <span className="rounded-lg bg-blue-50 dark:bg-gray-900 px-2.5 py-1 text-xs w-max mx-auto font-semibold tracking-wide text-blue-700 dark:text-white">
              Services
            </span>
            <h1 className="text-3xl font-semibold text-blue-950 dark:text-white md:text-4xl xl:text-5xl leading-tight">
              We are offering High-Level Services
            </h1>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
