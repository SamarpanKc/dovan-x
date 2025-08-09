'use client';
import { motion } from "framer-motion";
// import { useRouter } from 'next/navigation';

export default function Home() {
  // const router = useRouter();

  // const handleSignUp = () => {
  //   router.push('/pages');
  // };

  return (
    <div className="flex items-start justify-center flex-col min-h-screen p-8 pb-20 sm:p-20 text-5xl font-Manrope font-bold">
      <h1 className="">
      Hellooooou, Samarpan KC
      </h1>
      <p className="font-Sora font-light text-xl mt-2 mb-12">
      I have more money that i thought to fullfill my needs.
      </p>
      <motion.button
      className="bg-gradient-to-br from-secondary to-primary cursor-pointer text-black text-xl px-3 py-2 rounded-xl font-sora font-semibold"
      type="button"
      whileHover={{backgroundColor: '#16bc4e', scale:1}}
      // onClick={handleSignUp}
      >
      Sign up
      </motion.button>
    </div>
  );
}
