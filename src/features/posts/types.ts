type Author = {
    displayName: string
}
export type Post = {
    id: string
    title: string
    content: string | TrustedHTML
    author: Author
}