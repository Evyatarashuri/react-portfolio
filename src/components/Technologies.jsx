import { RiReactjsLine } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import { BiLogoDjango } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { SiNginx } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";


const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaAws className="text-7xl text-yellow-400" />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoDjango className="text-7xl text-green-600" />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl" style={{ color: '#306998' }} />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiNginx  className="text-7xl text-green-600"/>
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql  className="text-7xl text-sky-700"/>
                </div>


            </div>
         </div>
    );
};

export default Technologies;