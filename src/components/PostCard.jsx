import React from "react";
import { Link } from "react-router-dom";
import dbservice from "../appwrite/configDb";

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
        <Link to={`/post/${$id}`} className="block h-full">
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
                        <div className="flex h-full items-center justify-center text-sm text-ink-soft">
                            No Image Available
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
                    <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-ink-soft">
                        <span className="truncate font-medium">
                            👤 {authorName || "Unknown Author"}
                        </span>

                        <span className="hidden sm:inline">•</span>

                        <span className="whitespace-nowrap">
                            📅 {publishedDate}
                        </span>
                    </div>

                    {/* Read More */}
                    <div className="mt-auto pt-4">
                        <span className="inline-flex items-center text-sm font-medium text-sprout transition-colors hover:text-canopy">
                            Read More →
                        </span>
                    </div>

                </div>
            </div>
        </Link>
    );
}

export default PostCard;