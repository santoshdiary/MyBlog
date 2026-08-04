import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import parse from "html-react-parser";

import dbservice from "../appwrite/configDb";
import { Button } from "../components";

export default function Post() {
    const [post, setPost] = useState(null);

    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData
        ? post.userId === userData.$id
        : false;

    useEffect(() => {
        if (slug) {
            dbservice.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                } else {
                    navigate("/");
                }
            });
        } else {
            navigate("/");
        }
    }, [slug, navigate]);

    const deletePost = async () => {
        if (!post) return;

        try {
            const deleted = await dbservice.deletePost(post.$id);

            if (deleted && post.featuredImage) {
                await dbservice.deleteFile(post.featuredImage);
            }

            navigate("/");
        } catch (error) {
            console.error("Delete post failed:", error);
        }
    };

    const imageUrl = post?.featuredImage
        ? dbservice.getFilePreview(post.featuredImage)
        : null;

    if (!post) return null;

    return (
        <div className="w-full py-6 sm:py-10">
            <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">

                <div className="relative mb-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm sm:mb-8">
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt={post.title}
                            className="h-56 w-full object-cover sm:h-72 lg:h-96"
                        />
                    ) : (
                        <div className="flex h-56 items-center justify-center bg-gray-100 text-gray-500 sm:h-72 lg:h-96">
                            No image available
                        </div>
                    )}

                    {isAuthor && (
                        <div className="absolute right-3 top-3 flex flex-wrap gap-2 sm:right-5 sm:top-5">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button>
                                    Edit
                                </Button>
                            </Link>

                            <Button
                                bgColor="bg-red-600"
                                onClick={deletePost}
                            >
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div>
                    <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:mb-8 sm:text-3xl lg:text-4xl">
                        {post.title}
                    </h1>
                    <p className="mb-2 text-lg text-gray-600">By {post.authorName}</p>
                    <p className="mb-6 text-sm text-gray-500">
                        {post.$createdAt
                            ? new Date(post.$createdAt).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                            })
                            : "Unknown date"}
                    </p>
                </div>
                <article className="prose prose-base max-w-none sm:prose-lg">
                    {parse(post.content)}
                </article>

            </div>
        </div>
    );
}