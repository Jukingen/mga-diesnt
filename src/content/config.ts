import { defineCollection, z } from 'astro:content';

const settingsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        top_banner: z.object({
            enabled: z.boolean(),
            text: z.string(),
            phone: z.string(),
            email: z.string(),
            address_short: z.string(),
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
    }),
});

const servicesCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        items: z.array(z.string()),
        order: z.number().optional(),
        image: image().optional(),
    }),
});

const pagesCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        heroHeading: z.string().optional(),
        heroText: z.string().optional(),
        hero_background_image: image().optional(),
        aboutText: z.string().optional(),
        intro: z.string().optional(),
        about_image: image().optional(),
        address: z.string().optional(),
        phone: z.string().optional(),
        email: z.string().optional(),
    }).passthrough(),
});

export const collections = {
    'settings': settingsCollection,
    'services': servicesCollection,
    'pages': pagesCollection,
};
