
// // icons
// import { HiHome, HiUser, HiViewColumns, HiRectangleGroup, HiChatBubbleBottomCenterText, HiEnvelope } from 'react-icons/hi2';

// import Link from 'next/link';//next link
// import { useRouter } from 'next/router';//next router

// // nav data
// export const navData = [
//   { name: 'home', path: '/', icon: <HiHome /> },
//   { name: 'about', path: '/about', icon: <HiUser /> },
//   { name: 'education', path: '/services', icon: <HiRectangleGroup /> },
//   { name: 'work', path: '/work', icon: <HiViewColumns /> },
//   {
//     name: 'hobbies',
//     path: '/testimonials',
//     icon: <HiChatBubbleBottomCenterText />,
//   },
//   // {
//   //   name: 'contact',
//   //   path: '/contact',
//   //   icon: <HiEnvelope />,
//   // },
// ];


// const Nav = () => {

//   const router = useRouter();
//   const pathname = router.pathname;

//   return <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed  h-max bottom-0
//   mt-auto xl:right-2 z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen '>

//     <div className='flex w-full xl:flex-col items-center justify-between 
//     xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-{80px} bg-red-200/10 xl:h-max py-8 bg-white/10 
//     backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
//       {
//         navData.map((link, index) => {
//           return <Link className={
//             `${link.path === pathname && 'text-accent'} relative flex items-center 
//             group hover:text-accent transition-all duration-300`
//           } href={link.path} key={index}>

//             {/* tooltip */}
//             <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
//               <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
//                 <div className='text-[12px] leading-none font-semibold capitalize'>{link.name}</div>
//                 <div className='absolute -right-2  border-solid border-l-white border-l-8 border-y-transparent border-y-[6px]'></div>
//               </div>
//             </div>

//             <div>{link.icon}</div>

//           </Link>;
//         })
//       }
//     </div>

//   </nav>;
// };

// export default Nav;


// icons
import { HiHome, HiUser, HiViewColumns } from 'react-icons/hi2';
import { MdSchool } from "react-icons/md";          // NEW EDUCATION ICON
import { GiBrain } from "react-icons/gi";            // NEW HOBBIES ICON
import Link from 'next/link';                        // next link
import { useRouter } from 'next/router';              // next router

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },

  // UPDATED EDUCATION ICON
  { name: 'education', path: '/services', icon: <MdSchool /> },

  { name: 'work', path: '/work', icon: <HiViewColumns /> },

  // UPDATED HOBBIES ICON
  {
    name: 'hobbies',
    path: '/testimonials',
    icon: <GiBrain />,
  },
];

const Nav = () => {

  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0
      mt-auto xl:right-2 z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>

      <div className='flex w-full xl:flex-col items-center justify-between 
        xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 bg-white/10 backdrop-blur-sm 
        text-3xl xl:text-xl xl:rounded-full py-8'>

        {navData.map((link, index) => {
          return (
            <Link
              className={`
                ${link.path === pathname && 'text-accent'}
                relative flex items-center group hover:text-accent transition-all duration-300
              `}
              href={link.path}
              key={index}
            >

              {/* tooltip */}
              <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
                  <div className='text-[12px] leading-none font-semibold capitalize'>
                    {link.name}
                  </div>
                  <div className='absolute -right-2 border-solid border-l-white 
                    border-l-8 border-y-transparent border-y-[6px]'>
                  </div>
                </div>
              </div>

              {/* icon */}
              <div>{link.icon}</div>

            </Link>
          );
        })}

      </div>

    </nav>
  );
};

export default Nav;
