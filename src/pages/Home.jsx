import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { Container, PostCard } from '../components'
import dbservice from "../appwrite/configDb";
import { Link } from "react-router-dom";


function Home() {
    const [posts, setPosts] = useState([])
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        if (!authStatus) {
            setPosts([])
            return
        }

        dbservice.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [authStatus])

    if (!authStatus) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="mb-20">

                            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
                                Welcome to MyBlog!
                            </h2>

                            <h2 className="mb-10 text-center text-2xl font-bold text-gray-900">
                                What You Can Do?
                            </h2>

                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                                <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:scale-y-105">
                                    <div className="mb-4 text-4xl">✍️</div>
                                    <h3 className="mb-2 font-semibold text-gray-900">
                                        Create Posts
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Write and publish rich articles with ease.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:scale-y-105">
                                    <div className="mb-4 text-4xl">📖</div>
                                    <h3 className="mb-2 font-semibold text-gray-900">
                                        Read Stories
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Explore articles shared by writers from different backgrounds.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:scale-y-105">
                                    <div className="mb-4 text-4xl">🚀</div>
                                    <h3 className="mb-2 font-semibold text-gray-900">
                                        Share Ideas
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Express your thoughts and reach a wider audience.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:scale-y-105">
                                    <div className="mb-4 text-4xl">🌍</div>
                                    <h3 className="mb-2 font-semibold text-gray-900">
                                        Connect
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Join a growing community of passionate readers and writers.
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="rounded-2xl bg-green-600 px-8 py-14 text-center text-white">

                        <h2 className="text-3xl font-bold">
                            Ready to Share Your Story?
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-green-100">
                            Join MyBlog today and start publishing your ideas for the world to
                            discover.
                        </p>

                        <Link
                            to="/signup"
                            className="mt-8 inline-block rounded-xl bg-white px-8 py-3 font-semibold transition hover:bg-gray-100"
                            style={{ color: "#1b5e20" }}
                        >
                            Get Started
                        </Link>


                    </div>


                </Container>
            </div>
        )
    }

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="font-display text-2xl font-bold text-canopy transition-colors hover:text-leaf-dark">
                                No posts available right now
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4'>
                    {posts.map((post) => (
                        <div key={post.$id} className='w-full'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home