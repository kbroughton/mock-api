export default {
	async fetch(request): Promise<Response> {
		const data = {
			score: {
            dependencies_score: 3,
            dependencies_depth: 1,
            dependencies_total_count: 40,
            length_score: 7,
            length: 1304040,
            complexity_score: 0,
            reputation_score: 0,
            low_reputation_count: 0,
            change_frequency_score: 2,
            changes_per_year: 2,
            risky_behavior_score: 1,
            obfuscation_score: 0,
            malicious_score: 0,
		},
        page_score: 10,
        header_score: 5,
        page_score_total: 15,
        page_classification: "medium",
        script_urls_data: {
            script_urls: [
                {
                    url: "https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js",
                    score: 2,
                    type: "js",
                    size: 400,
                    reputation: 0,
                    obfuscation: 0,
                    malicious: 0,
                    risky_behavior: 0,
                },
                {
                    url: "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js",
                    score: 0,
                    type: "js",
                    size: 1000,
                    reputation: 0,
                    obfuscation: 0,
                    malicious: 0,
                    risky_behavior: 0,
                },
            ],
        }

    }

		return Response.json(data);
	},
} satisfies ExportedHandler;
