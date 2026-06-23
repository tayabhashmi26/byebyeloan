import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // All crawlers — allow everything except admin
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      // Google (Search + Gemini AI)
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      // OpenAI / ChatGPT
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      // Anthropic / Claude
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      // Perplexity
      { userAgent: 'PerplexityBot', allow: '/' },
      // Microsoft / Bing / Copilot
      { userAgent: 'Bingbot', allow: '/' },
      { userAgent: 'msnbot', allow: '/' },
      // Meta AI
      { userAgent: 'meta-externalagent', allow: '/' },
      // Common Crawl (used to train many LLMs)
      { userAgent: 'CCBot', allow: '/' },
      // Apple
      { userAgent: 'Applebot', allow: '/' },
      // Cohere AI
      { userAgent: 'cohere-ai', allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
