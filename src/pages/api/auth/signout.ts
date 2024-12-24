// Configuration Note: 
// This component is designed for static sites, but the `prerender` export is set to `false`
// which disables static prerendering for this API route.
export const prerender = false;



import type { APIRoute } from "astro"; // Importing Astro's APIRoute type.



// Define the GET handler for this API route.
export const GET: APIRoute = async ({ cookies, redirect }) => {
  
  // Delete authentication tokens from cookies.
  cookies.delete("sb-access-token", { path: "/" }); // Remove access token.
  cookies.delete("sb-refresh-token", { path: "/" }); // Remove refresh token.



  // Redirect the user to the "/signin" page after logout.
  return redirect("/signin");
};