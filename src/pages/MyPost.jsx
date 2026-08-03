import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import dbservice from "../appwrite/configDb";
import { useSelector } from "react-redux";

function MyPosts() {

    const [posts, setPosts] = useState([]);

    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {

        if (!userData) return;

        dbservice.getMyPosts(userData.$id)
            .then((response) => {

                if (response) {
                    setPosts(response.documents);
                }

            });

    }, [userData]);

    return (

        <Container>

            <div className="py-8">

                <h1 className="mb-8 text-3xl font-bold">
                    My Posts
                </h1>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {posts.map((post) => (
                        <PostCard
                            key={post.$id}
                            {...post}
                        />
                    ))}

                </div>

            </div>

        </Container>

    );
}

export default MyPosts;