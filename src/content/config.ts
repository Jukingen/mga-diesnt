import { defineCollection, z } from 'astro:content';


const settingsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        top_banner: z.object({
            enabled: z.boolean(),
            text: z.string(),
            cta_label: z.string(),
            cta_link: z.string(),
            style_variant: z.enum(['dark', 'light']).optional(),
        }),
        header: z.object({
            brand_name: z.string(),
            optional_subtitle: z.string().optional(),
            header_cta_label: z.string(),
            header_cta_link: z.string(),
        }),
        company_info: z.object({
            company_name: z.string(),
            street: z.string(),
            city: z.string(),
            phone: z.string(),
            phone_link: z.string(),
            email_display: z.string(),
            email_form: z.string(),
            ceo_name: z.string(),
            ceo_title: z.string(),
            map: z.object({
                latitude: z.string(),
                longitude: z.string(),
            }),
        }),
    }),
});

const servicesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        banner: z.object({
            image: z.string().optional(),
            title: z.string().optional(),
            description: z.string().optional(),
        }).optional(),
        seo: z.object({
            title: z.string().optional(),
            description: z.string().optional(),
        }).optional(),
        order: z.number().default(99),
        // Deprecated fields (kept for backward compatibility)
        image: z.string().optional(),
        description: z.string().optional(),
        items: z.array(z.string()).optional(),
    }),
});

const pagesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        heroHeading: z.string().optional(),
        heroText: z.string().optional(),
        // Image as string path
        hero_background_image: z.string().optional(),
        aboutText: z.string().optional(),
        intro: z.string().optional(),
        // Image as string path
        about_image: z.string().optional(),
        address: z.string().optional(),
        phone: z.string().optional(),
        email: z.string().optional(),
        // Header Banner object
        headerBanner: z.object({
            enabled: z.boolean().default(false),
            text: z.string().optional(),
            cta_label: z.string().optional(),
            cta_link: z.string().optional(),
            image: z.string().optional(),
            variant: z.enum(['dark', 'light']).default('dark'),
        }).optional(),
    }).passthrough(),
});

export const collections = {
    'settings': settingsCollection,
    'services': servicesCollection,
    'pages': pagesCollection,
};
