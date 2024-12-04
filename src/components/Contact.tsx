import Link from "next/link"

type FooterItemProps = {
  text: string;
  link: string;
}

const FooterItem = ({ text, link }: FooterItemProps) => {
  return (
    <li>
      <Link href={link} className="duration-200 hover:text-blue-600 dark:hover:text-blue-500">
        {text}
      </Link>
    </li>
  )
}

type FooterBlockItemProps = {
  title: string;
  items: { id: number, text: string, link: string }[];
}

const FooterBlockItem = ({ title, items }: FooterBlockItemProps) => {
  return (
    <div className="space-y-5">
      <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h1>
      <ul className="space-y-3">
        {
          items.map(item => (
            <FooterItem key={item.id} {...item} />
          ))
        }
      </ul>
    </div>
  )
}

const footerBlocks = [
  {
    id: 1,
    title: "Navigation",
    items: [
      {
        id: 1,
        text: "Home",
        link: "#"
      },
      {
        id: 2,
        text: "About",
        link: "#"
      },
      {
        id: 3,
        text: "Contact",
        link: "#"
      },
    ]
  },
  {
    id: 2,
    title: "Services",
    items: [
      {
        id: 1,
        text: "Front-end",
        link: "#"
      },
      {
        id: 2,
        text: "Back-end",
        link: "#"
      },
      {
        id: 3,
        text: "Full stack",
        link: "#"
      },
    ]
  },
  {
    id: 3,
    title: "Other Services",
    items: [
      {
        id: 1,
        text: "service 1",
        link: "#"
      },
      {
        id: 2,
        text: "service 2",
        link: "#"
      },
      {
        id: 3,
        text: "service 3",
        link: "#"
      },
    ]
  },
]


const FooterBlock = () => {
  return (
    <footer className="py-6 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="w-full text-gray-700 dark:text-gray-300 grid grid-cols-2 lg:grid-cols-4 gap-8 pb-4 border-b border-b-gray-200 dark:border-b-gray-800">
          <div className="flex">
            <Link href="#">
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-800 to-indigo-400 font-bold text-2xl">H</span>
              ireable-Js
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <span>Lubumbashi-RDC</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
            </svg>
            <span>+243 ......</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
            </svg>
            <span>info@dcssarl</span>
          </div>
        </div>
        <nav className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-8 py-10 text-gray-700 dark:text-gray-300">
          {
            footerBlocks.map(footerBlock => (
              <FooterBlockItem key={footerBlock.id} {...footerBlock} />
            ))
          }
          <div className="space-y-5 col-span-2 md:col-span-3 lg:col-span-1">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Subscribe to our newsletter
            </h1>
            <p className="max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores debitis ex temporibus
            </p>
            <form action="#" method="post" className="grid w-full relative max-w-xl">
              <div className="flex flex-col gap-3 w-full relative">
                <input type="email" className="w-full outline-none px-3 py-3 rounded-md bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700" placeholder="johndoe@gmail.com" />
                <button className="w-full py-3 sm:py-0 sm:w-max sm:absolute sm:right-1 sm:inset-y-1 px-4 text-sm flex sm:items-center justify-center outline-none bg-blue-600 text-white rounded-md">Subscribe</button>
              </div>
            </form>
          </div>
        </nav>
        <div className="w-full flex justify-center gap-4 items-center py-3 border-t border-gray-200 dark:border-t-gray-800 text-gray-700 dark:text-gray-300">
          <div >
            <p> © 2024 HireableJS. All right reserved </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterBlock
