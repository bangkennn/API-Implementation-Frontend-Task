import Link from 'next/link';
import { Post } from '@/types';

interface PostCardProps {
    post: Post;
}

export default function PostCard({ post }: PostCardProps) {
    return (
        <article className="group bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-full border border-indigo-200 dark:border-indigo-800">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    User {post.userId}
                </span>
                <span className="text-xs text-slate-400 dark:text-slate-600">•</span>
                <span className="text-xs text-slate-500 dark:text-slate-500">Post #{post.id}</span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight">
                {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 flex-grow leading-relaxed">
                {post.body}
            </p>

            {/* Read More Link */}
            <Link
                href={`/dashboard/posts/${post.id}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:gap-3 transition-all duration-300 mt-auto"
            >
                Read Full Article
                <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                </svg>
            </Link>
        </article>
    );
}
