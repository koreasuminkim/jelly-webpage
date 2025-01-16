import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Portfolio() {
    return (
        <div className='container flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
            <div className='mx-auto flex w-full flex-col items-center gap-4 md:max-w-[64rem]'>
                <h1 className='text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]'>
                    Portfolio
                </h1>
                <Link to='/'>
                    <Button variant='outline'>Back to Home</Button>
                </Link>
            </div>
        </div>
    );
}
