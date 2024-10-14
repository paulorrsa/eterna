import React from 'react';
import { HiOutlineDesktopComputer, HiOutlineChartBar } from "react-icons/hi";
import { MdWeb } from "react-icons/md";
import { HiOutlineMagnifyingGlass, HiOutlineWrenchScrewdriver, } from "react-icons/hi2";
import { } from "react-icons/hi2";
import { } from "react-icons/hi";
import dateServices from './dateServices.json';

const icons = {
    MdWeb: MdWeb,
    HiOutlineMagnifyingGlass: HiOutlineMagnifyingGlass,
    HiOutlineDesktopComputer: HiOutlineDesktopComputer,
    HiOutlineChartBar: HiOutlineChartBar,
    HiOutlineWrenchScrewdriver: HiOutlineWrenchScrewdriver,

};

function Card() {
    return (
        <div className='flex flex-wrap justify-center py-6 gap-8 items-center'>
            {
                dateServices.map((date, id) => {
                    const IconComponent = icons[date.icon];
                    return (
                        <div key={id} className=' flex flex-col justify-start items-center h-80 w-60 bg-slate-600 m-4 p-4 rounded-lg shadow-md'>
                            <span className='text-4xl mb-4'><i> {IconComponent && <IconComponent />}</i></span>
                            <h3 className='font-bold mb-2'>{date.servico}</h3>
                            <p className='text-sm text-start'>{date.texto}</p>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Card;