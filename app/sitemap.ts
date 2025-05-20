import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://barataribeiro.com",
            lastModified: new Date().toISOString().split("T")[0],
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: "https://barataribeiro.com/#home",
            lastModified: new Date().toISOString().split("T")[0],
            priority: 0.5,
        },
        {
            url: "https://barataribeiro.com/#about",
            lastModified: new Date().toISOString().split("T")[0],
            priority: 0.64,
        },
        {
            url: "https://barataribeiro.com/#projects",
            lastModified: new Date().toISOString().split("T")[0],
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://barataribeiro.com/#education",
            lastModified: new Date().toISOString().split("T")[0],
            changeFrequency: "monthly",
            priority: 0.64,
        },
    ]
}
