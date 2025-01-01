```
---
import { getCollection } from 'astro:content';
import Layout from '../../layouts/Layout.astro';
import '../../styles/global.scss';

const blogPosts = await getCollection('blog');
const { slug } = Astro.params;
const post = blogPosts.find(post => post.slug === slug);

if (!post) {
    return new Response("Not Found", { status: 404 });
}

const { Content } = await post.render();
---

<Layout>
    <section class="prose lg:prose-xl mx-auto p-6">
        <h1>{post.data.title}</h1>
        <Content/>
    </section>
</Layout>
```