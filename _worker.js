export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);
        const path = url.pathname;

        // Try to serve the requested file
        let response = await env.ASSETS.fetch(request);

        // If file not found and it's not a static asset, serve index.html
        if (response.status === 404 && !path.includes('.')) {
            response = await env.ASSETS.fetch(new URL('/index.html', url));
        }

        return response;
    }
};
