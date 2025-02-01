import Link from "next/link";

export default function Home() {
  return (
   <div>
    <div className="text-3xl font-semibold">Welcome to home page</div>

<h2 className="text-xl">ToDo application</h2>

<Link href={"/signup"} className="border border-gray-200" >SignUp</Link>
<Link href={"/signin"} className="border border-gray-200" >SignIn</Link>

   </div>
  );
}
