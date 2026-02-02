export default function PostCardSkeleton() {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 animate-pulse">
            {/* Badge Skeleton */}
            <div className="flex items-center gap-2 mb-4">
                <div className="h-6 w-20 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                <div className="h-3 w-3 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                <div className="h-4 w-16 bg-slate-200 dark:bg-slate-700 rounded"></div>
            </div>

            {/* Title Skeleton */}
            <div className="space-y-2 mb-4">
                <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-4/5"></div>
                <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-3/5"></div>
            </div>

            {/* Content Skeleton */}
            <div className="space-y-2 mb-4">
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-11/12"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-4/5"></div>
            </div>

            {/* Button Skeleton */}
            <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded w-32 mt-6"></div>
        </div>
    );
}
