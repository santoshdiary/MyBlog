import React from "react";
import dbservice from "../appwrite/configDb";
import { Link } from "react-router-dom";

function PostCard({$id, title, featuredImage}) {
    const imageUrl = featuredImage ? dbservice.getFilePreview(featuredImage) : null;

    return (
        <Link to={`/post/${$id}`} className="block h-full">
            <div className='flex h-full flex-col rounded-xl border border-line bg-white p-3 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-sprout hover:shadow-lift sm:p-4'>
                <div className='mb-4 flex h-36 items-center justify-center overflow-hidden rounded-xl bg-mist sm:h-48'>
                    {imageUrl ? (
                        <img src={imageUrl} alt={title} className='h-full w-full object-cover' />
                    ) : (
                        <div className='flex h-full w-full items-center justify-center text-ink-soft'>
                            No image available
                        </div>
                    )}
                </div>
                <h2 className='line-clamp-2 font-display text-lg font-bold text-canopy sm:text-xl'>{title}</h2>
            </div>
        </Link>
    )
}


export default PostCard