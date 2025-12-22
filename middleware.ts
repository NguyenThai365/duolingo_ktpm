import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
	"/anyone-can-visit-this-route",
]);

export default clerkMiddleware((auth, req) => {
	if (isPublicRoute(req)) return;
	// Có thể xử lý thêm ở đây nếu muốn
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};