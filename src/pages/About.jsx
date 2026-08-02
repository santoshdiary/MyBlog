import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components";

export default function About() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">

        {/* Hero */}
        <div className="mb-20 text-center">
          <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
            About MyBlog
          </span>

          <h1 className="mt-6 text-5xl font-bold text-gray-900">
            Write. Share. Inspire.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            MyBlog is a modern blogging platform where writers can publish
            articles, share knowledge, and inspire readers. Whether you're
            documenting your journey, sharing technical tutorials, or telling
            personal stories, MyBlog provides a clean and distraction-free
            reading experience.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-20 grid gap-10 md:grid-cols-2">

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Our Mission
            </h2>

            <p className="leading-7 text-gray-600">
              We believe everyone has a story worth sharing. Our mission is to
              provide a simple, elegant, and accessible platform where ideas can
              be published without unnecessary complexity.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Why MyBlog?
            </h2>

            <p className="leading-7 text-gray-600">
              Built with React and modern web technologies, MyBlog focuses on
              performance, readability, and simplicity. From writing your first
              article to discovering new perspectives, everything is designed to
              make the experience enjoyable.
            </p>
          </div>

        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
            What You Can Do
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <div className="mb-4 text-4xl">✍️</div>
              <h3 className="mb-2 font-semibold text-gray-900">
                Create Posts
              </h3>
              <p className="text-sm text-gray-600">
                Write and publish rich articles with ease.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <div className="mb-4 text-4xl">📖</div>
              <h3 className="mb-2 font-semibold text-gray-900">
                Read Stories
              </h3>
              <p className="text-sm text-gray-600">
                Explore articles shared by writers from different backgrounds.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <div className="mb-4 text-4xl">🚀</div>
              <h3 className="mb-2 font-semibold text-gray-900">
                Share Ideas
              </h3>
              <p className="text-sm text-gray-600">
                Express your thoughts and reach a wider audience.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
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

        {/* Tech Stack */}
        <div className="mb-20 rounded-2xl border border-gray-200 bg-white p-10 shadow-sm">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Built With
          </h2>

          <div className="flex flex-wrap justify-center gap-4">

            {[
              "React",
              "Redux Toolkit",
              "React Router",
              "Tailwind CSS",
              "Appwrite",
              "TinyMCE",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-green-100 px-5 py-2 text-sm font-medium text-green-700"
              >
                {tech}
              </span>
            ))}

          </div>
        </div>

        {/* CTA */}
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

      </div>
    </section>
  );
}