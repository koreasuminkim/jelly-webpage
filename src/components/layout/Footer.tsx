import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className='w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <div className='container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0'>
                <div className='flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0'>
                    <p className='text-center text-sm leading-loose text-muted-foreground md:text-left'>
                        서울시 성동구 뚝섬로 13길 38 (성수동 2가)
                    </p>
                    <p className='text-center text-sm leading-loose text-muted-foreground md:text-left'>
                        사업자 번호: 290-15-02231
                    </p>
                    <p className='text-center text-sm leading-loose text-muted-foreground md:text-left'>
                        이메일: tachyon@boltlab.co
                    </p>
                </div>
                <p className='text-center text-sm leading-loose text-muted-foreground md:text-left'>
                    Built by{" "}
                    <Link to='/' className='font-medium underline underline-offset-4'>
                        BoltLab
                    </Link>
                    . All rights reserved.
                </p>
            </div>
        </footer>
    );
}
