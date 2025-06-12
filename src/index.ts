export default {
	async fetch(request, env, ctx): Promise<Response> {
		return Response.json({ messgae: 'Hello World!' });
	},
} satisfies ExportedHandler<Env>;
