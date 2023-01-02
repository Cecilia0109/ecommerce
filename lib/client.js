import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = sanityClient({
    projectId:'9mp23s3o',
    dataset:'production',
    apiVersion:'2002-12-30',
    useCdn:true,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN
})

// FIXME: need to fix
const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)