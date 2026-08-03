import React from "react";
import { Link } from "react-router-dom";
import dbservice from "../appwrite/configDb";

import {
    HiOutlineUser,
    HiOutlineCalendarDays,
    HiOutlineArrowRight,
    HiOutlinePhoto,
} from "react-icons/hi2";

function PostCard({
    $id,
    title,
    featuredImage,
    authorName,
    $createdAt,
}) {
    const imageUrl = featuredImage
        ? dbservice.getFilePreview(featuredImage)
        : null;

    const publishedDate = new Date($createdAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });

    return (
        <Link
            to={`/post/${$id}`}
            className="group block h-full"
        >
            <div className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-sprout hover:shadow-lift">

                {/* Featured Image */}
                <div className="h-48 overflow-hidden bg-mist">
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            loading="lazy"
                            alt={title}
                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    ) : (
                        <div className="flex h-full flex-col items-center justify-center gap-2 text-ink-soft">
                            <HiOutlinePhoto className="h-10 w-10 text-gray-400" />
                            <span className="text-sm">No Image Available</span>
                        </div>
                    )}
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-4">

                    {/* Title */}
                    <h2 className="line-clamp-2 text-lg font-bold leading-snug text-canopy sm:text-xl">
                        {title}
                    </h2>

                    {/* Author & Date */}
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-ink-soft">

                        <div className="flex items-center gap-1.5 truncate">
                            <HiOutlineUser className="h-4 w-4 text-green-500" />
                            <span className="font-medium">
                                {authorName || "Unknown Author"}
                            </span>
                        </div>

                        <div className="flex items-center gap-1.5 whitespace-nowrap">
                            <HiOutlineCalendarDays className="h-4 w-4 text-green-500" />
                            <span>{publishedDate}</span>
                        </div>

                    </div>

                    {/* Read More → */}
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-green-500 transition-colors hover:text-canopy">
                        Read More
                        <HiOutlineArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>

                </div>


            </div>
        </Link>
    );
}

export default PostCard;